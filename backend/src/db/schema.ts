import {
  integer,
  numeric,
  pgEnum,
  pgTable,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";

export const membershipTypeEnum = pgEnum("membership_type", [
  "fullYear",
  "halfYear",
]);
export const userRoleEnum = pgEnum("user_role", ["user", "admin"]);

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),

  // Basic information
  email: varchar({ length: 255 }).notNull().unique(),
  firstName: varchar({ length: 100 }).notNull(),
  lastName: varchar({ length: 100 }).notNull(),

  // Student details
  studentNumber: varchar({ length: 20 }).notNull(),
  faculty: varchar({ length: 100 }).notNull(),
  yearOfStudy: integer().notNull(),

  // Role (user or admin)
  role: userRoleEnum().notNull().default("user"),

  // Preferences
  lookingForward: text().notNull(), // foods/events they look forward to
  membershipType: membershipTypeEnum().notNull(),
  createdAt: timestamp({ withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp({ withTimezone: true }).defaultNow().notNull(),
});

export const postTypeEnum = pgEnum("post_type", ["event", "rantangan"]);
export const postStatusEnum = pgEnum("post_status", ["upcoming", "past"]);

export const postsTable = pgTable("posts", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),

  title: varchar({ length: 255 }).notNull(),
  description: text().notNull(),
  date: timestamp({ withTimezone: true }).notNull(), // event date/time
  location: varchar({ length: 255 }).notNull(),

  // post type: event or rantangan
  type: postTypeEnum().notNull(),
  status: postStatusEnum().notNull().default("upcoming"),

  price: numeric({ precision: 10, scale: 2 }).notNull(), // supports decimals (e.g., 5.00)
  coverImage: varchar({ length: 512 }).notNull(), // URL to event cover image

  // optional Instagram link
  instagramLink: varchar({ length: 512 }),

  // timestamps
  createdAt: timestamp({ withTimezone: true }).defaultNow().notNull(),
  updatedAt: timestamp({ withTimezone: true }).defaultNow().notNull(),
});
