import {
  pgTable,
  serial,
  text,
  decimal,
  uuid,
  timestamp,
} from "drizzle-orm/pg-core";
import { profiles } from "./profiles.js";

export const merch = pgTable("merch", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  price: decimal("price", { precision: 10, scale: 2 }).notNull(),
});

export const memberMerch = pgTable("member_merch", {
  id: serial("id").primaryKey(),
  memberId: uuid("member_id").references(() => profiles.id, { onDelete: "cascade" }),
  merchId: text("merch_id").references(() => merch.id, { onDelete: "cascade" }),
  purchasedAt: timestamp("purchased_at").defaultNow(),
});
