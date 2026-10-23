/**
 * Adds current-academic-year members to the Resend segment as subscribed contacts.
 * Members who ticked the signup box are subscribed (this also repairs a failed signup sync).
 * For everyone else an existing contact is left as it is, so an unsubscribe is never undone.
 * Does not write to the database; safe to re-run.
 *
 * From the backend folder:
 *   npm run audience:backfill -- --dry-run   (lists who would be added, no Resend calls)
 *   npm run audience:backfill                (needs RESEND_API_KEY and RESEND_SEGMENT_ID)
 */
import { eq } from "drizzle-orm";
import db from "../src/db/database.js";
import { profiles } from "../src/db/schema/index.js";
import { backfillContact, dedupeByEmail, getContactDeps } from "../src/services/contacts.js";
import { getCurrentAcademicYear } from "../src/services/auth.js";

// ensureContact makes up to two Resend calls; stay under the default rate limit.
const PACE_MS = 1200;
const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

const dryRun = process.argv.includes("--dry-run");
const year = getCurrentAcademicYear();

const rows = await db
  .select({
    email: profiles.email,
    firstName: profiles.firstName,
    lastName: profiles.lastName,
    marketingOptIn: profiles.marketingOptIn,
  })
  .from(profiles)
  .where(eq(profiles.academicYear, year));
const members = dedupeByEmail(rows);

console.log(`${members.length} distinct members for ${year}`);

if (dryRun) {
  for (const m of members) console.log(m.marketingOptIn ? `${m.email} (opted in)` : m.email);
  process.exit(0);
}

const deps = getContactDeps();
if (!deps) {
  console.error("Set RESEND_API_KEY and RESEND_SEGMENT_ID, or use --dry-run.");
  process.exit(1);
}

const totals = { subscribed: 0, created: 0, existing: 0, failed: 0 };
const failedEmails: string[] = [];
for (const [i, m] of members.entries()) {
  if (i > 0) await sleep(PACE_MS);
  try {
    totals[await backfillContact(m, deps)]++;
  } catch (err) {
    totals.failed++;
    failedEmails.push(m.email);
    console.error(`Failed: ${m.email}`, err);
  }
}

console.log(
  `subscribed ${totals.subscribed}, created ${totals.created}, existing ${totals.existing}, failed ${totals.failed}`
);
if (failedEmails.length) console.log(`Failed emails (re-run to retry):\n${failedEmails.join("\n")}`);
process.exit(totals.failed ? 1 : 0);
