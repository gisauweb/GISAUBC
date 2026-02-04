import express from "express";

import db from "../db/database";
import { requireAuth } from "../middleware";
import { profiles } from "../db/schema";

const router = express.Router();

router.post("/profile", requireAuth, async (req, res) => {
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

  const result = await db
    .insert(profiles)
    .values({
      id: userId,
      firstName,
      lastName,
      studentId,
      faculty: "",
      membershipType: "full",
      yearOfStudy: "",
      lookingForward: "",
      role: "member",
    })
    .onConflictDoUpdate({
      target: profiles.id,
      set: { firstName, lastName, studentId },
    })
    .returning();

  res.json(result[0]);
});

export default router;
