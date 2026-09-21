import express from "express";
import * as MemberController from "../controllers/member.controller.js";
import { requireAdmin, requireAuth } from "../middleware.js";

const router = express.Router();

/**
 * GET /members/check?studentId=<id>
 * Qualtrics integration: returns { isEligible: true | false } for a given student ID.
 * Requires auth to prevent enumeration of student IDs.
 */
router.get("/check", requireAuth, MemberController.checkStudentId);

/**
 * GET /members
 * Returns all member profiles. Supports query filters:
 *   ?academicYear=2026-2027&paymentStatus=unpaid&membershipType=full&search=john
 * Admin only.
 */
router.get("/", requireAuth, requireAdmin, MemberController.getAllMembers);

/**
 * PATCH /members/:id
 * Updates any field on a member profile by surrogate UUID.
 * Admin only.
 */
router.patch("/:id", requireAuth, requireAdmin, MemberController.updateMember);

export default router;
