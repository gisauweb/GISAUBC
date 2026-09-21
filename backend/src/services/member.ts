import { and, desc, eq, ilike, or } from "drizzle-orm";
import db from "../db/database.js";
import { existingMembers, profiles } from "../db/schema/index.js";
import type { Profile } from "./auth.js";
import { getCurrentAcademicYear } from "./auth.js";

/**
 * Checks whether a given student ID exists in profiles OR in existing_members
 * for the current academic year.
 */
export const check_student_id = async (studentId: string): Promise<boolean> => {
  const trimmed = studentId.trim();
  const currentYear = getCurrentAcademicYear();

  const [inProfiles, inExisting] = await Promise.all([
    db
      .select({ studentId: profiles.studentId })
      .from(profiles)
      .where(
        and(
          eq(profiles.studentId, trimmed),
          eq(profiles.academicYear, currentYear),
        )
      )
      .limit(1),
    db
      .select({ studentId: existingMembers.studentId })
      .from(existingMembers)
      .where(
        and(
          eq(existingMembers.studentId, trimmed),
          eq(existingMembers.academicYear, currentYear),
        )
      )
      .limit(1),
  ]);

  return inProfiles.length > 0 || inExisting.length > 0;
};

export type MemberFilters = {
  academicYear?: string;
  paymentStatus?: string;
  membershipType?: string;
  search?: string;
};

export const get_all_members = async (filters: MemberFilters): Promise<Profile[]> => {
  const conditions = [];

  if (filters.academicYear) {
    conditions.push(eq(profiles.academicYear, filters.academicYear));
  }
  if (filters.paymentStatus) {
    conditions.push(eq(profiles.paymentStatus, filters.paymentStatus as any));
  }
  if (filters.membershipType) {
    conditions.push(eq(profiles.membershipType, filters.membershipType as any));
  }
  if (filters.search) {
    const term = `%${filters.search}%`;
    conditions.push(
      or(
        ilike(profiles.firstName, term),
        ilike(profiles.lastName, term),
        ilike(profiles.email, term),
        ilike(profiles.studentId, term),
      )
    );
  }

  return db
    .select()
    .from(profiles)
    .where(conditions.length ? and(...conditions) : undefined)
    .orderBy(desc(profiles.createdAt));
};

export type MemberUpdateInput = Partial<{
  firstName: string;
  lastName: string;
  email: string;
  studentId: string;
  faculty: string;
  yearOfStudy: string;
  membershipType: "full" | "half";
  recommendation: string;
  role: "member" | "admin";
  paymentMethod: string;
  hasPayed: boolean;
  paymentStatus: "unpaid" | "paid_card" | "paid_cash" | "paid_existing_member" | "refunded";
  totalPrice: string;
}>;

export const update_member = async (id: string, data: MemberUpdateInput): Promise<Profile> => {
  // Explicit allowlist — TypeScript types are erased at runtime, so we manually
  // pick only the permitted fields instead of spreading req.body directly.
  const sanitized: MemberUpdateInput = {};
  if (data.firstName     !== undefined) sanitized.firstName     = data.firstName;
  if (data.lastName      !== undefined) sanitized.lastName      = data.lastName;
  if (data.email         !== undefined) sanitized.email         = data.email;
  if (data.studentId     !== undefined) sanitized.studentId     = data.studentId;
  if (data.faculty       !== undefined) sanitized.faculty       = data.faculty;
  if (data.yearOfStudy   !== undefined) sanitized.yearOfStudy   = data.yearOfStudy;
  if (data.membershipType !== undefined) sanitized.membershipType = data.membershipType;
  if (data.recommendation !== undefined) sanitized.recommendation = data.recommendation;
  if (data.role          !== undefined) sanitized.role          = data.role;
  if (data.paymentMethod !== undefined) sanitized.paymentMethod = data.paymentMethod;
  if (data.hasPayed      !== undefined) sanitized.hasPayed      = data.hasPayed;
  if (data.paymentStatus !== undefined) sanitized.paymentStatus = data.paymentStatus;
  if (data.totalPrice    !== undefined) sanitized.totalPrice    = data.totalPrice;

  const [updated] = await db
    .update(profiles)
    .set({ ...sanitized, updatedAt: new Date().toISOString() })
    .where(eq(profiles.id, id))
    .returning();

  if (!updated) throw new Error("MEMBER_NOT_FOUND");
  return updated;
};
