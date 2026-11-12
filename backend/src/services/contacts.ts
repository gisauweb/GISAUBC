import { Resend } from "resend";

export type ContactInput = { email: string; firstName: string; lastName: string };
export type ContactDeps = { resend: Pick<Resend, "contacts">; segmentId: string };

/** Only the boolean `true` is an opt-in; strings and numbers from a request body are not. */
export const parseMarketingOptIn = (value: unknown): boolean => value === true;

export const normalizeEmail = (email: string): string => email.trim().toLowerCase();

/** First occurrence wins; returned rows carry the normalized email. */
export const dedupeByEmail = <T extends { email: string }>(rows: T[]): T[] => {
  const seen = new Map<string, T>();
  for (const row of rows) {
    const email = normalizeEmail(row.email);
    if (!seen.has(email)) seen.set(email, { ...row, email });
  }
  return [...seen.values()];
};

export const getContactDeps = (): ContactDeps | null => {
  const apiKey = process.env.RESEND_API_KEY;
  const segmentId = process.env.RESEND_SEGMENT_ID;
  if (!apiKey || !segmentId) {
    console.warn(
      "Marketing contact sync skipped: RESEND_API_KEY or RESEND_SEGMENT_ID is not set"
    );
    return null;
  }
  return { resend: new Resend(apiKey), segmentId };
};

// The SDK puts the email straight into the URL path. Encode anything that would change the
// path (/ ? # %) but keep @, so ordinary addresses reach Resend exactly as before.
const pathEmail = (email: string): string =>
  encodeURIComponent(email).replaceAll("%40", "@");

type ResendError = { name: string; message: string; statusCode: number | null };

const failure = (what: string, e: ResendError): Error =>
  new Error(`Resend ${what} failed: ${e.name}: ${e.message}`);

// Unverified against the live API; adjust here if Resend words it differently.
const isAlreadyInSegment = (e: ResendError): boolean =>
  e.statusCode === 409 || /already/i.test(e.message);

const createContact = async (input: ContactInput, email: string, deps: ContactDeps) => {
  const { error } = await deps.resend.contacts.create({
    email,
    unsubscribed: false,
    firstName: input.firstName,
    lastName: input.lastName,
    segments: [{ id: deps.segmentId }],
  });
  if (error) throw failure("create", error);
};

const addToSegment = async (email: string, deps: ContactDeps) => {
  const { error } = await deps.resend.contacts.segments.add({
    email: pathEmail(email),
    segmentId: deps.segmentId,
  });
  if (error && !isAlreadyInSegment(error)) throw failure("segments.add", error);
};

/** Explicit opt-in: subscribes the contact even if it had unsubscribed before. */
export const subscribeContact = async (
  input: ContactInput,
  deps: ContactDeps
): Promise<void> => {
  const email = normalizeEmail(input.email);
  const { error } = await deps.resend.contacts.update({
    email: pathEmail(email),
    unsubscribed: false,
    firstName: input.firstName,
    lastName: input.lastName,
  });
  if (!error) return addToSegment(email, deps);
  // Only a missing contact falls through to create; a rate limit or outage must not.
  if (error.name !== "not_found") throw failure("update", error);
  await createContact(input, email, deps);
};

/** Signup without the tick: the latest choice wins. Never creates a contact; a missing one is fine. */
export const unsubscribeContact = async (email: string, deps: ContactDeps): Promise<void> => {
  const { error } = await deps.resend.contacts.update({
    email: pathEmail(normalizeEmail(email)),
    unsubscribed: true,
  });
  if (error && error.name !== "not_found") throw failure("update", error);
};

/** Backfill: creates a missing contact as subscribed, never changes an existing `unsubscribed`. */
export const ensureContact = async (
  input: ContactInput,
  deps: ContactDeps
): Promise<"created" | "existing"> => {
  const email = normalizeEmail(input.email);
  const { error } = await deps.resend.contacts.get(pathEmail(email));
  if (error) {
    if (error.name !== "not_found") throw failure("get", error);
    await createContact(input, email, deps);
    return "created";
  }
  await addToSegment(email, deps);
  return "existing";
};

/**
 * Backfill row: someone who ticked the box is subscribed (a tick overrides an old unsubscribe);
 * everyone else is only ensured, so an existing unsubscribe is never undone.
 */
export const backfillContact = async (
  member: ContactInput & { marketingOptIn: boolean },
  deps: ContactDeps
): Promise<"subscribed" | "created" | "existing"> => {
  if (member.marketingOptIn) {
    await subscribeContact(member, deps);
    return "subscribed";
  }
  return ensureContact(member, deps);
};

/** Called at signup. Never throws: a Resend problem must not block registration. */
export const syncOptIn = async (
  input: ContactInput & { marketingOptIn: boolean },
  deps?: ContactDeps | null
): Promise<void> => {
  const resolved = deps === undefined ? getContactDeps() : deps;
  if (!resolved) return;
  try {
    if (input.marketingOptIn) await subscribeContact(input, resolved);
    else await unsubscribeContact(input.email, resolved);
  } catch (err) {
    console.error("Marketing contact sync failed", err);
  }
};
