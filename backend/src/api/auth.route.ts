import express from "express";
import * as AuthController from "../controllers/auth.controller.js";
import { requireAuth } from "../middleware.js";

const router = express.Router();

/**
 * GET /auth/me
 * Returns the current user's profile. Requires auth.
 */
router.get("/me", requireAuth, AuthController.me);

/**
 * GET /auth/google
 * Redirects to Supabase Google OAuth.
 */
router.get("/google", AuthController.googleAuth);

/**
 * GET /auth/callback
 * Receives the OAuth code and forwards it to the client.
 */
router.get("/callback", AuthController.callback);

/**
 * POST /auth/register
 * Creates a new member profile with optional merch selections.
 * Requires auth.
 */
router.post("/register", requireAuth, AuthController.register);

export default router;
