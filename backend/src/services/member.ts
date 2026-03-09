import { eq } from "drizzle-orm";
import db from "../db/database.js";
import { existingMembers, profiles } from "../db/schema/index.js";

/**
 * Checks whether a given student ID exists in either profiles or existing_members.
 */
export const check_student_id = async (studentId: string): Promise<boolean> => {
  const trimmed = studentId.trim();

  const [inProfiles, inExisting] = await Promise.all([
    db
      .select({ studentId: profiles.studentId })
      .from(profiles)
      .where(eq(profiles.studentId, trimmed))
      .limit(1),
    db
      .select({ studentId: existingMembers.studentId })
      .from(existingMembers)
      .where(eq(existingMembers.studentId, trimmed))
      .limit(1),
  ]);

  return inProfiles.length > 0 || inExisting.length > 0;
};
