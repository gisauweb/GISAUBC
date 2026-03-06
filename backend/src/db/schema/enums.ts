import { pgEnum } from "drizzle-orm/pg-core";

export const postStatus = pgEnum("post_status", ["draft", "published"]);
export const postType = pgEnum("post_type", ["event", "rantangan"]);
export const userRole = pgEnum("user_role", ["member", "admin"]);
export const membershipType = pgEnum("membership_type", ["full", "half"]);
export const paymentStatus = pgEnum("payment_status", [
  "unpaid",
  "paid_card",
  "paid_cash",
  "paid_existing_member",
  "refunded",
]);
export const registrationStatus = pgEnum("registration_status", [
  "confirmed",
  "cancelled",
]);
