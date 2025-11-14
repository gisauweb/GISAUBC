import type { InferSelectModel } from "drizzle-orm";
import { gt, lt } from "drizzle-orm";
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
export const get_upcoming_posts = async (): Promise<Post[]> => {
  try {
    const now = new Date();
    const result = await db
      .select()
      .from(postsTable)
      .where(gt(postsTable.date, now)); // date > now
    return result;
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
    const result = await db
      .select()
      .from(postsTable)
      .where(lt(postsTable.date, now)); // date < now
    return result;
  } catch (err) {
    console.error("Error fetching past posts:", err);
    throw err;
  }
};

// TODO
// export const delete_post = async (postId: number): Promise<Post | null> => {
//   const [result] = await db
//     .delete(postsTable)
//     .where(eq(postsTable.id, postId))
//     .returning();
//   return result || null;
// };

// TODO
// export const update_post = async (
//   postId: number,
//   updateData: UpdatePostInput
// ): Promise<Post | null> => {
//   const [result] = await db
//     .update(postsTable)
//     .set(updateData)
//     .where(eq(postsTable.id, postId))
//     .returning();
//   return result || null;
// };

// TODO
// export const get_by_term = async (term: string): Promise<Post[]> => {
//   const result = await db
//     .select()
//     .from(postsTable)
//     .where(like(postsTable.title, `%${term}%`));
//   return result;
// };
