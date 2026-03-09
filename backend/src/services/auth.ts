import type { InferSelectModel } from "drizzle-orm";
import { eq, inArray } from "drizzle-orm";
import db from "../db/database.js";
import {
  existingMembers,
  memberMerch,
  merch as merchTable,
  profiles,
} from "../db/schema/index.js";

const MEMBERSHIP_PRICES: Record<string, number> = {
  full: 9,
  sem1: 5,
  sem2: 5,
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
    | "paid_existing_member"
    | "refunded";
  paymentIntentId?: string;
  totalPrice: string;
  merch?: string[];
};

/**
 * Recreates a membership profile from a Stripe PaymentIntent's metadata.
 * Called by the webhook as a fallback when the normal registration flow fails.
 * Idempotent — silently ignores if the profile already exists.
 */
export const register_user_from_webhook = async (
  metadata: Record<string, string>,
  paymentIntentId: string
): Promise<void> => {
  const {
    userId,
    firstName,
    lastName,
    studentId,
    email,
    faculty,
    dbMembershipType,
    yearOfStudy,
    recommendation,
    totalPrice,
    merch,
  } = metadata;

  if (!userId || !firstName || !lastName || !studentId || !email) {
    console.error(
      "Webhook membership recovery: missing required metadata fields",
      metadata
    );
    return;
  }

  try {
    await register_user({
      userId,
      firstName,
      lastName,
      studentId,
      email,
      faculty: faculty ?? "",
      membershipType: (dbMembershipType as "full" | "half") ?? "full",
      yearOfStudy: yearOfStudy ?? "",
      recommendation: recommendation ?? "",
      paymentMethod: "card",
      hasPayed: true,
      paymentStatus: "paid_card",
      paymentIntentId,
      totalPrice: totalPrice ?? "0",
      merch: merch ? JSON.parse(merch) : [],
    });
  } catch (e: any) {
    if (e.message === "ALREADY_EXISTS") return; // idempotent
    throw e;
  }
};

export const get_profile = async (userId: string): Promise<Profile | null> => {
  const rows = await db
    .select()
    .from(profiles)
    .where(eq(profiles.id, userId))
    .limit(1);

  return rows[0] ?? null;
};

export const register_user = async (input: RegisterInput): Promise<Profile> => {
  return await db.transaction(async (tx) => {
    const existing = await tx
      .select({ id: profiles.id })
      .from(profiles)
      .where(eq(profiles.id, input.userId))
      .limit(1);

    if (existing.length) {
      throw new Error("ALREADY_EXISTS");
    }

    const existingMember = await tx
      .select({ id: existingMembers.id })
      .from(existingMembers)
      .where(eq(existingMembers.studentId, input.studentId.trim()))
      .limit(1);

    if (input.paymentMethod === "payed") {
      if (!existingMember.length) {
        throw new Error("NOT_EXISTING_MEMBER");
      }
    } else if (existingMember.length) {
      // card or cash: block if the student ID is in the existing members table
      throw new Error("MUST_USE_PAYED");
    }

    const [newProfile] = await tx
      .insert(profiles)
      .values({
        id: input.userId,
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
        paymentIntentId: input.paymentIntentId,
        totalPrice: input.totalPrice,
        role: "member",
      })
      .returning();

    if (input.merch && input.merch.length > 0) {
      const merchRows = input.merch.map((merchId) => ({
        memberId: input.userId,
        merchId,
      }));
      await tx.insert(memberMerch).values(merchRows);
    }

    if (!newProfile) throw new Error("Failed to insert profile");
    return newProfile;
  });
};
