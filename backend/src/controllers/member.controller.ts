import type { Request, Response } from "express";
import * as MemberService from "../services/member.js";

export async function getAllMembers(req: Request, res: Response) {
  const { academicYear, paymentStatus, membershipType, search } = req.query;

  try {
    const members = await MemberService.get_all_members({
      // Cast query params: only pass if they're non-empty strings
      ...(typeof academicYear  === "string" && academicYear  ? { academicYear }  : {}),
      ...(typeof paymentStatus === "string" && paymentStatus ? { paymentStatus } : {}),
      ...(typeof membershipType === "string" && membershipType ? { membershipType } : {}),
      ...(typeof search        === "string" && search        ? { search }        : {}),
    });
    res.json(members);
  } catch (e) {
    console.error("getAllMembers error:", e);
    res.status(500).json({ error: "Server error" });
  }
}

export async function updateMember(req: Request, res: Response) {
  const id = req.params["id"];

  if (!id) return res.status(400).json({ error: "Missing id" });

  try {
    const updated = await MemberService.update_member(id, req.body);
    res.json(updated);
  } catch (e: any) {
    if (e.message === "MEMBER_NOT_FOUND") {
      return res.status(404).json({ error: "Member not found" });
    }
    console.error("updateMember error:", e);
    res.status(500).json({ error: "Server error" });
  }
}

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
