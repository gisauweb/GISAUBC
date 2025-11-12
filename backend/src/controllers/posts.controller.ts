import type { InferSelectModel } from "drizzle-orm";
import { eq } from "drizzle-orm";
import db from "../db/database";
import { postsTable } from "../db/schema";

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
 * Get a single post
 */
export const get_post = async (id: number): Promise<Post | null> => {
  try {
    const [post] = await db
      .select()
      .from(postsTable)
      .where(eq(postsTable.id, id));

    return post || null; // return null if not found
  } catch (err) {
    console.error("Error fetching post by id:", err);
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
