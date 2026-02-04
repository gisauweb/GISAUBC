import { eq } from "drizzle-orm";
import express from "express";
import { profiles } from "../db/schema";
import db from "../db/database";
import { requireAuth } from "../middleware";

const router = express.Router();

router.get("/me", requireAuth, async (req, res) => {
  const userId = req.user!.sub;

  const rows = await db
    .select()
    .from(profiles)
    .where(eq(profiles.id, userId))
    .limit(1);

  const profile = rows[0] ?? null;

  res.json({
    userId,
    registered: !!profile,
    profile,
  });
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

router.post("/register", requireAuth, async (req, res) => {
  const userId = req.user!.sub;
  const {
    firstName,
    lastName,
    studentId,
    faculty,
    membershipType,
    yearOfStudy,
    lookingForward,
  } = req.body;

  // basic validation (use zod)
  if (!firstName || !lastName || !studentId) {
    return res.status(400).json({ error: "Missing fields" });
  }

  // Prevent overwriting an existing profile
  const existing = await db
    .select({ id: profiles.id })
    .from(profiles)
    .where(eq(profiles.id, userId))
    .limit(1);

  if (existing.length) {
    return res.status(409).json({ error: "Already registered" });
  }

  try {
    const created = await db
      .insert(profiles)
      .values({
        id: userId,
        firstName,
        lastName,
        studentId,
        faculty,
        membershipType,
        yearOfStudy,
        lookingForward,
        role: "member",
      })
      .returning();

    res.json({ registered: true, profile: created[0] });
  } catch (e: any) {
    // student_id unique violation in Postgres is 23505
    if (e?.code === "23505") {
      return res.status(409).json({ error: "Student ID already in use" });
    }
    return res.status(500).json({ error: "Server error" });
  }
});

export default router;
