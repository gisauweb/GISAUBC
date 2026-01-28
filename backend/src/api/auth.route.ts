import type { JwtPayload } from "jsonwebtoken";

import express from "express";
import { requireAuth } from "../middleware";

const router = express.Router();

router.get("/me", requireAuth, (req, res) => {
  res.json({ sub: req.user.sub, email: req.user.email });
});

router.get("/google", (req, res) => {
  const callback = "http://localhost:3000/auth/callback";
  const redirectTo = "http://localhost:5173/games";
  const url =
    `${process.env.SUPABASE_URL}/authorize` +
    `?provider=google` +
    `&redirect_to=${encodeURIComponent(redirectTo)}`;

  res.redirect(url);
});

router.get("/callback", (req, res) => {
  const code = req.query.code as string | undefined;
  if (!code) return res.status(400).send("Missing code");

  // send user to React callback route
  res.redirect(`http://localhost:5173/games?code=${encodeURIComponent(code)}`);
});

export default router;
