import { and, eq } from "drizzle-orm";
import db from "../db/database.js";
import { existingMembers, profiles } from "../db/schema/index.js";
import { getCurrentAcademicYear } from "./auth.js";

/**
 * Checks whether a given student ID exists in profiles OR in existing_members
 * for the current academic year.
 */
export const check_student_id = async (studentId: string): Promise<boolean> => {
  const trimmed = studentId.trim();
  const currentYear = getCurrentAcademicYear();

  const [inProfiles, inExisting] = await Promise.all([
    db
      .select({ studentId: profiles.studentId })
      .from(profiles)
      .where(
        and(
          eq(profiles.studentId, trimmed),
          eq(profiles.academicYear, currentYear),
        )
      )
      .limit(1),
    db
      .select({ studentId: existingMembers.studentId })
      .from(existingMembers)
      .where(
        and(
          eq(existingMembers.studentId, trimmed),
          eq(existingMembers.academicYear, currentYear),
        )
      )
      .limit(1),
  ]);

  return inProfiles.length > 0 || inExisting.length > 0;
};
