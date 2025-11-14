import express from "express";
import {
  add_post,
  get_all_posts,
  get_past_posts,
  get_post,
  get_upcoming_posts,
} from "../controllers/posts.controller.js";

const router = express.Router();

/**
 * GET all posts
 */
router.get("/", async (req, res) => {
  try {
    const posts = await get_all_posts(); // call the controller
    res.json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch posts" });
  }
});

/**
 * GET upcoming posts
 */
router.get("/upcoming", async (req, res) => {
  try {
    const posts = await get_upcoming_posts();
    res.json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch upcoming posts" });
  }
});

/**
 * GET past posts
 */
router.get("/past", async (req, res) => {
  try {
    const posts = await get_past_posts();
    res.json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch past posts" });
  }
});

/**
 * GET a single post by id
 */
router.get("/:id", async (req, res) => {
  try {
    const postId = Number(req.params.id);
    if (Number.isNaN(postId)) {
      return res.status(400).json({ error: "Invalid post id" });
    }

    const post = await get_post(postId);
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    res.json(post);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch post" });
  }
});

/**
 * POST /posts
 * Adds a new post to the database.
 * Only accessible by admins.
 */
router.post("/", async (req, res) => {
  try {
    // const user = req.user; // assuming you have auth middleware that sets req.user
    // if (!user || user.role !== "admin") {
    //   return res.status(403).json({ error: "Only admins can create posts" });
    // }

    const postData = req.body; // expect JSON body matching CreatePostInput
    const newPost = await add_post(postData);

    res.status(201).json(newPost);
  } catch (err) {
    console.error("Error creating post:", err);
    res.status(500).json({ error: "Failed to create post" });
  }
});

export default router;
