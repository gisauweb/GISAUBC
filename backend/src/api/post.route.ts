import express from "express";
import * as PostController from "../controllers/post.controller.js";

const router = express.Router();

/**
 * GET all posts
 */
router.get("/", PostController.getAllPosts);

/**
 * GET upcoming posts
 */
router.get("/upcoming", PostController.getUpcomingPosts);

/**
 * GET past posts
 */
router.get("/past", PostController.getPastPosts);

/**
 * POST /posts
 * Adds a new post to the database.
 * Only accessible by admins.
 */
router.post("/", PostController.addPost);

export default router;
