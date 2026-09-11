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
import { membershipType, userRole, paymentStatus } from "./enums.js";

export const profiles = pgTable(
  "profiles",
  {
    // Surrogate PK — auto-generated, used by member_merch FK
    id: uuid().primaryKey().defaultRandom().notNull(),
    // Supabase auth UID — identifies the user across years
    userId: uuid("user_id").notNull(),
    academicYear: text("academic_year").notNull(),

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
    // Same user can register again in a new academic year
    unique("profiles_user_year_unique").on(table.userId, table.academicYear),
    // Student ID and email must be unique within a given year
    unique("profiles_student_year_unique").on(table.studentId, table.academicYear),
    unique("profiles_email_year_unique").on(table.email, table.academicYear),
    pgPolicy("Enable insert for authenticated users only", {
      as: "permissive",
      for: "insert",
      to: ["authenticated"],
      withCheck: sql`(( SELECT auth.uid() AS uid) = user_id)`,
    }),
  ]
);

export const existingMembers = pgTable("existing_members", {
  id: serial("id").primaryKey(),
  studentId: text("student_id").notNull().unique(),
  academicYear: text("academic_year").notNull().default("2025-2026"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
