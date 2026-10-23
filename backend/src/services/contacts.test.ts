import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { dedupeByEmail, normalizeEmail, parseMarketingOptIn } from "./contacts.js";

describe("parseMarketingOptIn", () => {
  it("accepts only the boolean true", () => {
    assert.equal(parseMarketingOptIn(true), true);
    for (const v of [false, "true", "false", 1, null, undefined, {}]) {
      assert.equal(parseMarketingOptIn(v), false, String(v));
    }
  });
});

describe("normalizeEmail", () => {
  it("trims and lowercases", () => {
    assert.equal(normalizeEmail(" Gaida@UBC.ca "), "gaida@ubc.ca");
  });
});

describe("dedupeByEmail", () => {
  it("keeps the first row and normalizes the email", () => {
    const rows = [
      { email: "A@x.ca", firstName: "First" },
      { email: "a@x.ca ", firstName: "Second" },
    ];
    assert.deepEqual(dedupeByEmail(rows), [{ email: "a@x.ca", firstName: "First" }]);
  });

  it("returns [] for []", () => {
    assert.deepEqual(dedupeByEmail([]), []);
  });
});
