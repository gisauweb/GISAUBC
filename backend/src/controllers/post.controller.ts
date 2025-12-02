import type { Request, Response } from "express";
import * as PostsService from "../services/post.js";

/**
 * GET all posts (optional ?year=YYYY)
 */
export async function getAllPosts(req: Request, res: Response) {
  try {
    const yearParam = req.query.year as string | undefined;
    const typeParam = req.query.eventType as PostsService.EventType | undefined;

    let posts: PostsService.Post[] | null;
    if (yearParam) {
      const year = Number(yearParam);
      if (Number.isNaN(year)) {
        return res.status(400).json({ error: "Invalid year" });
      }
      posts = await PostsService.get_posts_by_year(year, typeParam);
    } else {
      posts = await PostsService.get_all_posts();
    }

    res.json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch posts" });
  }
}

/**
 * GET upcoming posts
 */
export async function getUpcomingPosts(req: Request, res: Response) {
  try {
    const typeParam = req.query.eventType as PostsService.EventType | undefined;
    const posts = await PostsService.get_upcoming_posts(typeParam);
    res.json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch upcoming posts" });
  }
}

/**
 * GET past posts
 */
export async function getPastPosts(req: Request, res: Response) {
  try {
    const posts = await PostsService.get_past_posts();
    res.json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch past posts" });
  }
}

/**
 * POST /posts
 * Adds a new post
 */
export async function addPost(req: Request, res: Response) {
  try {
    // Example: Admin check (uncomment if auth middleware is set up)
    // const user = req.user;
    // if (!user || user.role !== "admin") {
    //   return res.status(403).json({ error: "Only admins can create posts" });
    // }

    const postData = req.body;
    const newPost = await PostsService.add_post(postData);

    res.status(201).json(newPost);
  } catch (err) {
    console.error("Error creating post:", err);
    res.status(500).json({ error: "Failed to create post" });
  }
}
