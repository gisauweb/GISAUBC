import { relations } from "drizzle-orm";
import { profiles } from "./profiles";
import { posts, eventRegistrations } from "./posts";
import { merch, memberMerch } from "./merch";

export const membersRelations = relations(profiles, ({ many }) => ({
  purchases: many(memberMerch),
  eventRegistrations: many(eventRegistrations),
}));

export const postsRelations = relations(posts, ({ many }) => ({
  registrations: many(eventRegistrations),
}));

export const eventRegistrationsRelations = relations(eventRegistrations, ({ one }) => ({
  event: one(posts, { fields: [eventRegistrations.eventId], references: [posts.id] }),
  member: one(profiles, { fields: [eventRegistrations.memberId], references: [profiles.id] }),
}));

export const merchRelations = relations(merch, ({ many }) => ({
  soldTo: many(memberMerch),
}));

export const memberMerchRelations = relations(memberMerch, ({ one }) => ({
  member: one(profiles, { fields: [memberMerch.memberId], references: [profiles.id] }),
  item: one(merch, { fields: [memberMerch.merchId], references: [merch.id] }),
}));
