import express from "express";
import * as MemberController from "../controllers/member.controller.js";

const router = express.Router();

/**
 * GET /members/student-ids
 * Returns all unique student IDs across profiles + existing_members.
 */
router.get("/student-ids", MemberController.getAllStudentIds);

/**
 * GET /members/check?studentId=<id>
 * Qualtrics integration: returns { exists: true | false } for a given student ID.
 */
router.get("/check", MemberController.checkStudentId);

export default router;
