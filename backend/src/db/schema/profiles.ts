import {
  pgTable,
  pgPolicy,
  unique,
  uuid,
  text,
  timestamp,
  numeric,
  boolean,
  serial,
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";
import { membershipType, userRole, paymentStatus } from "./enums";

export const profiles = pgTable(
  "profiles",
  {
    id: uuid().primaryKey().notNull(),
    firstName: text("first_name").notNull(),
    lastName: text("last_name").notNull(),
    studentId: text("student_id").notNull(),

    email: text("email").notNull(),

    faculty: text("faculty").notNull().default(""),
    membershipType: membershipType("membership_type").notNull().default("full"),
    yearOfStudy: text("year_of_study").notNull(),
    recommendation: text("recommendation").default(""),

    role: userRole("user_role").notNull().default("member"),

    paymentMethod: text("payment_method").notNull().default("card"),
    hasPayed: boolean("has_payed").notNull().default(false),
    paymentStatus: paymentStatus("payment_status").notNull().default("unpaid"),
    paymentIntentId: text("payment_intent_id"),
    totalPrice: numeric("total_price", { precision: 10, scale: 2 })
      .default("0")
      .notNull(),

    createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true, mode: "string" })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    unique("profiles_student_id_unique").on(table.studentId),
    unique("profiles_email_unique").on(table.email),
    pgPolicy("Enable insert for authenticated users only", {
      as: "permissive",
      for: "insert",
      to: ["authenticated"],
      withCheck: sql`(( SELECT auth.uid() AS uid) = id)`,
    }),
  ]
);

export const existingMembers = pgTable("existing_members", {
  id: serial("id").primaryKey(),
  studentId: text("student_id").notNull().unique(),
  academicYear: text("academic_year").notNull().default("2025-2026"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
