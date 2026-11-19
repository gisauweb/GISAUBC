import type { InferSelectModel } from "drizzle-orm";
import { and, eq, inArray } from "drizzle-orm";
import db from "../db/database.js";
import {
  memberMerch,
  merch as merchTable,
  profiles,
} from "../db/schema/index.js";
import { syncOptIn } from "./contacts.js";
import { sendWelcomeEmail } from "./mail.js";

const MEMBERSHIP_PRICES: Record<string, number> = {
  full: 9,
  sem1: 5,
  sem2: 5,
};

/**
 * Returns the current academic year string (e.g. "2026-2027").
 * Academic year starts June 1 — matches the convention used throughout the codebase.
 */
export const getCurrentAcademicYear = (): string => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1; // 1-indexed
  const startYear = month >= 6 ? year : year - 1;
  return `${startYear}-${startYear + 1}`;
};

/**
 * Calculates the expected total in cents from authoritative server-side prices.
 * merch prices are looked up from the DB.
 */
export const calculateExpectedTotal = async (
  membershipType: string,
  merchIds: string[]
): Promise<number> => {
  const membershipDollars = MEMBERSHIP_PRICES[membershipType] ?? 0;

  let merchDollars = 0;
  if (merchIds.length > 0) {
    const rows = await db
      .select({ price: merchTable.price })
      .from(merchTable)
      .where(inArray(merchTable.id, merchIds));
    for (const row of rows) {
      merchDollars += Number(row.price);
    }
  }

  return Math.round((membershipDollars + merchDollars) * 100);
};

export type Profile = InferSelectModel<typeof profiles>;

export type RegisterInput = {
  userId: string;
  firstName: string;
  lastName: string;
  studentId: string;
  email: string;
  faculty: string;
  membershipType: "full" | "half";
  yearOfStudy: string;
  recommendation?: string;
  paymentMethod: string;
  hasPayed: boolean;
  paymentStatus:
    | "unpaid"
    | "paid_card"
    | "paid_cash"
    | "paid_interac"
    | "paid_existing_member"
    | "refunded";
  paymentProofUrl?: string;
  totalPrice: string;
  merch?: string[];
  marketingOptIn?: boolean;
};

export const get_profile = async (userId: string): Promise<Profile | null> => {
  const currentYear = getCurrentAcademicYear();
  const rows = await db
    .select()
    .from(profiles)
    .where(
      and(
        eq(profiles.userId, userId),
        eq(profiles.academicYear, currentYear),
      )
    )
    .limit(1);

  return rows[0] ?? null;
};

export const register_user = async (input: RegisterInput): Promise<Profile> => {
  const newProfile = await db.transaction(async (tx) => {
    const currentYear = getCurrentAcademicYear();

    // Block duplicate registration for the same user in the same academic year
    const existing = await tx
      .select({ id: profiles.id })
      .from(profiles)
      .where(
        and(
          eq(profiles.userId, input.userId),
          eq(profiles.academicYear, currentYear),
        )
      )
      .limit(1);

    if (existing.length) {
      throw new Error("ALREADY_EXISTS");
    }

    // existing_members allowlist is deprecated — new signups must pay (card / cash / interac).

    const [newProfile] = await tx
      .insert(profiles)
      .values({
        userId: input.userId,
        academicYear: currentYear,
        firstName: input.firstName,
        lastName: input.lastName,
        email: input.email,
        studentId: input.studentId,
        faculty: input.faculty,
        membershipType: input.membershipType,
        yearOfStudy: input.yearOfStudy,
        recommendation: input.recommendation,
        paymentMethod: input.paymentMethod,
        hasPayed: input.hasPayed,
        paymentStatus: input.paymentStatus,
        paymentProofUrl: input.paymentProofUrl,
        totalPrice: input.totalPrice,
        marketingOptIn: input.marketingOptIn ?? false,
        marketingOptInAt: input.marketingOptIn ? new Date().toISOString() : null,
        role: "member",
      })
      .returning();

    if (!newProfile) throw new Error("Failed to insert profile");

    if (input.merch && input.merch.length > 0) {
      const merchRows = input.merch.map((merchId) => ({
        memberId: newProfile.id, // surrogate UUID, not auth UUID
        merchId,
      }));
      await tx.insert(memberMerch).values(merchRows);
    }

    return newProfile;
  });

  try {
    await sendWelcomeEmail({
      to: newProfile.email,
      firstName: newProfile.firstName,
    });
  } catch (err) {
    console.error("Welcome email failed", err);
  }

  // Never throws. A tick subscribes; no tick unsubscribes an existing contact but never creates one.
  await syncOptIn({
    email: newProfile.email,
    firstName: newProfile.firstName,
    lastName: newProfile.lastName,
    marketingOptIn: newProfile.marketingOptIn,
  });

  return newProfile;
};
