import express from "express";
import { profiles } from "../../drizzle/schema";
import db from "../db/database";
import { requireAuth } from "../middleware";

const router = express.Router();

router.post("/profile", requireAuth, async (req, res) => {
  const userId = req.user!.sub;
  const { firstName, lastName, studentId } = req.body;

  const result = await db
    .insert(profiles)
    .values({ id: userId, firstName, lastName, studentId })
    .onConflictDoUpdate({
      target: profiles.id,
      set: { firstName, lastName, studentId },
    })
    .returning();

  res.json(result[0]);
});

export default router;
