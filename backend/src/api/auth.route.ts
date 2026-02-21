import { eq } from "drizzle-orm";
import express from "express";
import { memberMerch, profiles } from "../db/schema";
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
  const redirectTo = `${process.env.CLIENT_ORIGIN}/app`;
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
  res.redirect(
    `${process.env.CLIENT_ORIGIN}/app?code=${encodeURIComponent(code)}`
  );
});

router.post("/register", requireAuth, async (req, res) => {
  const userId = req.user!.sub;
  const {
    firstName,
    lastName,
    studentId,
    email,
    faculty,
    membershipType,
    yearOfStudy,
    recommendation,
    paymentMethod,
    merch,
    // totalPrice
  } = req.body;

  // basic validation (use zod)
  if (!firstName || !lastName || !studentId || !email) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const result = await db.transaction(async (tx) => {
      const existing = await tx
        .select({ id: profiles.id })
        .from(profiles)
        .where(eq(profiles.id, userId))
        .limit(1);

      if (existing.length) {
        throw new Error("ALREADY_EXISTS");
      }

      const [newProfile] = await tx
        .insert(profiles)
        .values({
          id: userId,
          firstName,
          lastName,
          email,
          studentId,
          faculty,
          membershipType,
          yearOfStudy,
          recommendation,
          paymentMethod,
          role: "member",
        })
        .returning();

      if (merch && Array.isArray(merch) && merch.length > 0) {
        const merchRows = merch.map((merchId: string) => ({
          memberId: userId,
          merchId: merchId,
        }));

        await tx.insert(memberMerch).values(merchRows);
      }

      return newProfile;
    });

    res.json({ registered: true, profile: result });
  } catch (e: any) {
    // Handle specific errors
    if (e.message === "ALREADY_EXISTS") {
      return res.status(409).json({ error: "Already registered" });
    }

    if (e?.code === "23505") {
      return res
        .status(409)
        .json({ error: "Student ID or Email already in use" });
    }

    console.error("Registration Error:", e);
    return res.status(500).json({ error: "Server error" });
  }
});

export default router;
