import {
  pgTable,
  unique,
  pgPolicy,
  uuid,
  text,
  timestamp,
  integer,
  varchar,
  numeric,
  pgEnum,
} from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

export const postStatus = pgEnum("post_status", ["draft", "published"]);
export const postType = pgEnum("post_type", ["event", "rantangan"]);
export const userRole = pgEnum("user_role", ["member", "admin"]);
export const membershipType = pgEnum("membership_type", ["full", "half"]);

export const profiles = pgTable(
  "profiles",
  {
    id: uuid().primaryKey().notNull(),
    firstName: text("first_name").notNull(),
    lastName: text("last_name").notNull(),
    studentId: text("student_id").notNull(),

    faculty: text("faculty").notNull().default(""),
    membershipType: membershipType("membership_type").notNull().default("full"),
    yearOfStudy: text("year_of_study").notNull().default(""),
    lookingForward: text("looking_forward").notNull().default(""),

    role: userRole("user_role").notNull().default("member"),

    createdAt: timestamp("created_at", { withTimezone: true, mode: "string" })
      .defaultNow()
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true, mode: "string" })
      .defaultNow()
      .notNull(),
  },
  (table) => [
    unique("profiles_first_name_unique").on(table.firstName),
    unique("profiles_last_name_unique").on(table.lastName),
    unique("profiles_student_id_unique").on(table.studentId),
    pgPolicy("Enable insert for authenticated users only", {
      as: "permissive",
      for: "insert",
      to: ["authenticated"],
      withCheck: sql`(( SELECT auth.uid() AS uid) = id)`,
    }),
  ]
);

export const posts = pgTable("posts", {
  id: integer().primaryKey().generatedAlwaysAsIdentity({
    name: "posts_id_seq",
    startWith: 1,
    increment: 1,
    minValue: 1,
    maxValue: 2147483647,
    cache: 1,
  }),
  title: varchar({ length: 255 }).notNull(),
  description: text(),
  date: timestamp({ withTimezone: true, mode: "string" }).notNull(),
  location: varchar({ length: 255 }).notNull(),
  type: postType().notNull(),
  coverImage: varchar({ length: 512 }).notNull(),
  instagramLink: varchar({ length: 512 }),
  createdAt: timestamp({ withTimezone: true, mode: "string" })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp({ withTimezone: true, mode: "string" })
    .defaultNow()
    .notNull(),
  registrationLink: varchar({ length: 512 }),
  infoLink: varchar({ length: 512 }),
  status: postStatus().default("draft").notNull(),
  priceMember: numeric({ precision: 10, scale: 2 }),
  priceRegular: numeric({ precision: 10, scale: 2 }),
});
