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
