import express from "express";
import * as MemberController from "../controllers/member.controller.js";

const router = express.Router();

/**
 * GET /members/check?studentId=<id>
 * Qualtrics integration: returns { isEligible: true | false } for a given student ID.
 */
router.get("/check", MemberController.checkStudentId);

export default router;
