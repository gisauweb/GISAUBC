import express from "express";
import * as MemberController from "../controllers/member.controller.js";
import { requireAuth } from "../middleware.js";

const router = express.Router();

/**
 * GET /members/check?studentId=<id>
 * Qualtrics integration: returns { isEligible: true | false } for a given student ID.
 * Requires auth to prevent enumeration of student IDs.
 */
router.get("/check", requireAuth, MemberController.checkStudentId);

export default router;
