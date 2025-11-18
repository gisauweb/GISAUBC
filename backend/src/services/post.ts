import type { InferSelectModel } from "drizzle-orm";
import { and, desc, eq, gt, gte, lt } from "drizzle-orm";
import db from "../db/database.js";
import { postsTable } from "../db/schema.js";

// Automatically inferred type of a post
export type Post = InferSelectModel<typeof postsTable>;

// Type for creating a post (exclude id and timestamps)
export type CreatePostInput = Omit<Post, "id" | "createdAt" | "updatedAt">;

// Type for updating a post (partial)
export type UpdatePostInput = Partial<
  Omit<Post, "id" | "createdAt" | "updatedAt">
>;

export enum EventType {
  Event = "event",
  Rantangan = "rantangan",
}

export enum PostStatus {
  Draft = "draft",
  Published = "published",
}

/**
 * Get all posts
 */
export const get_all_posts = async (): Promise<Post[] | null> => {
  try {
    const result = await db.select().from(postsTable);
    return result;
  } catch (err) {
    console.error("Error fetching posts:", err);
    throw err;
  }
};

/**
 * Adds a new post to the database.
 */
export const add_post = async (postData: CreatePostInput): Promise<Post> => {
  try {
    postData.date = new Date(postData.date);
    const [result] = await db.insert(postsTable).values(postData).returning();
    if (!result) throw new Error("Failed to insert post");
    return result;
  } catch (err) {
    console.error("Error adding post:", err);
    throw err;
  }
};

/**
 * Get upcoming posts
 * - Filters posts where date is in the future
 */
export const get_upcoming_posts = async (
  type: EventType | undefined
): Promise<Post[]> => {
  try {
    const now = new Date();
    if (type) {
      return await db
        .select()
        .from(postsTable)
        .where(
          and(
            gt(postsTable.date, now),
            eq(postsTable.type, type),
            eq(postsTable.status, PostStatus.Published)
          )
        ); // date > now
    }

    return await db
      .select()
      .from(postsTable)
      .where(
        and(
          gt(postsTable.date, now),
          eq(postsTable.status, PostStatus.Published)
        )
      ); // date > now
  } catch (err) {
    console.error("Error fetching upcoming posts:", err);
    throw err;
  }
};

/**
 * Get past posts
 * - Filters posts where date is in the past
 */
export const get_past_posts = async (): Promise<Post[]> => {
  try {
    const now = new Date();
    return await db
      .select()
      .from(postsTable)
      .where(
        and(
          lt(postsTable.date, now),
          eq(postsTable.status, PostStatus.Published)
        )
      ); // date < now
  } catch (err) {
    console.error("Error fetching past posts:", err);
    throw err;
  }
};

/**
 * Get posts given a year
 */
export const get_posts_by_year = async (
  year: number,
  type: EventType | undefined
): Promise<Post[]> => {
  // Academic year:
  // start: June 1 (year)
  // end: June 1 (year + 1)

  const start = new Date(`${year}-06-01T00:00:00Z`);
  const end = new Date(`${Number(year) + 1}-06-01T00:00:00Z`);

  try {
    const now = new Date();

    if (type) {
      return await db
        .select()
        .from(postsTable)
        .where(
          and(
            gte(postsTable.date, start),
            lt(postsTable.date, end),
            lt(postsTable.date, now),
            eq(postsTable.type, type),
            eq(postsTable.status, PostStatus.Published)
          )
        )
        .orderBy(desc(postsTable.date));
    }

    return await db
      .select()
      .from(postsTable)
      .where(
        and(
          gte(postsTable.date, start),
          lt(postsTable.date, end),
          lt(postsTable.date, now),
          eq(postsTable.status, PostStatus.Published)
        )
      )
      .orderBy(desc(postsTable.date));
  } catch (err) {
    console.error("Error fetching posts by academic year:", err);
    throw err;
  }
};
