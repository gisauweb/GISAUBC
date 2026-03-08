import {
  pgTable,
  integer,
  varchar,
  text,
  timestamp,
  numeric,
  serial,
  uuid,
} from "drizzle-orm/pg-core";
import { postStatus, postType, registrationStatus } from "./enums.js";
import { profiles } from "./profiles.js";

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
  capacity: integer("capacity"),
});

export const eventRegistrations = pgTable("event_registrations", {
  id: serial("id").primaryKey(),
  eventId: integer("event_id")
    .notNull()
    .references(() => posts.id, { onDelete: "cascade" }),
  memberId: uuid("member_id")
    .notNull()
    .references(() => profiles.id, { onDelete: "cascade" }),
  status: registrationStatus("status").notNull().default("confirmed"),
  paymentIntentId: text("payment_intent_id"),
  createdAt: timestamp("created_at", { withTimezone: true })
    .defaultNow()
    .notNull(),
});
