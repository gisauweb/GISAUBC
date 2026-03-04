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
  boolean,
  decimal,
  serial,
} from "drizzle-orm/pg-core";
import { relations, sql } from "drizzle-orm";

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

    email: text("email").notNull(),

    faculty: text("faculty").notNull().default(""),
    membershipType: membershipType("membership_type").notNull().default("full"),
    yearOfStudy: text("year_of_study").notNull(),
    recommendation: text("recommendation").default(""),

    role: userRole("user_role").notNull().default("member"),

    paymentMethod: text("payment_method").notNull().default("card"),
    hasPayed: boolean("has_payed").notNull().default(false),
    totalPrice: numeric("total_price", { precision: 10, scale: 2 }).default("0").notNull(),

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

export const merch = pgTable("merch", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  price: decimal("price", { precision: 10, scale: 2 }).notNull(),
});

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
  date: timestamp({ withTimezone: true }).notNull(),
  location: varchar({ length: 255 }).notNull(),
  type: postType().notNull(),
  coverImage: varchar("cover_image", { length: 512 }).notNull(),
  instagramLink: varchar("instagram_link", { length: 512 }),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
  registrationLink: varchar("registration_link", { length: 512 }),
  infoLink: varchar("info_link", { length: 512 }),
  status: postStatus().default("draft").notNull(),
  priceMember: numeric("price_member", { precision: 10, scale: 2 }),
  priceRegular: numeric("price_regular", { precision: 10, scale: 2 }),
});

export const memberMerch = pgTable("member_merch", {
  id: serial("id").primaryKey(),
  memberId: uuid("member_id").references(() => profiles.id, {
    onDelete: "cascade",
  }),
  merchId: text("merch_id").references(() => merch.id, { onDelete: "cascade" }),
  purchasedAt: timestamp("purchased_at").defaultNow(),
});

export const existingMembers = pgTable("existing_members", {
	id: serial("id").primaryKey(),
	studentId: text("student_id").notNull().unique(),
	academicYear: text("academic_year").notNull().default("2025-2026"),
	createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const membersRelations = relations(profiles, ({ many }) => ({
  purchases: many(memberMerch),
}));

export const merchRelations = relations(merch, ({ many }) => ({
  soldTo: many(memberMerch),
}));

export const memberMerchRelations = relations(memberMerch, ({ one }) => ({
  member: one(profiles, {
    fields: [memberMerch.memberId],
    references: [profiles.id],
  }),
  item: one(merch, { fields: [memberMerch.merchId], references: [merch.id] }),
}));
