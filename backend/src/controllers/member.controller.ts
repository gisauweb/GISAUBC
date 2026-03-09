import type { Request, Response } from "express";
import * as MemberService from "../services/member.js";

/**
 * GET /members/check?studentId=<id>
 * Checks if a student ID exists in the database. Designed for Qualtrics integration.
 * Returns { exists: true | false }
 */
export async function checkStudentId(req: Request, res: Response) {
  const studentId = req.query.studentId as string | undefined;

  if (!studentId || typeof studentId !== "string" || studentId.trim() === "") {
    return res
      .status(400)
      .json({ error: "Missing or invalid studentId query parameter" });
  }

  const isEligible = await MemberService.check_student_id(studentId);
  res.json({ isEligible });
}
