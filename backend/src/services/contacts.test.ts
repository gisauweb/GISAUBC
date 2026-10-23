import assert from "node:assert/strict";
import { afterEach, describe, it, mock } from "node:test";
import type { Resend } from "resend";
import {
  dedupeByEmail,
  ensureContact,
  getContactDeps,
  normalizeEmail,
  parseMarketingOptIn,
  subscribeContact,
  syncOptIn,
} from "./contacts.js";

type Res = { data: unknown; error: { name: string; message: string; statusCode: number | null } | null };
const ok: Res = { data: {}, error: null };
const err = (name: string, message = "boom"): Res => ({ data: null, error: { name, message, statusCode: null } });

/** Hand-written stand-in for resend.contacts that records calls and returns SDK-shaped results. */
const makeFake = (r: { update?: Res; create?: Res; get?: Res; add?: Res } = {}) => {
  const calls: { fn: string; arg: any }[] = [];
  const rec = (fn: string, res?: Res) => async (arg: unknown) => {
    calls.push({ fn, arg });
    return res ?? ok;
  };
  const resend = {
    contacts: {
      update: rec("update", r.update),
      create: rec("create", r.create),
      get: rec("get", r.get),
      segments: { add: rec("add", r.add) },
    },
  } as unknown as Pick<Resend, "contacts">;
  return { deps: { resend, segmentId: "seg1" }, calls };
};
const names = (calls: { fn: string }[]) => calls.map((c) => c.fn);
const input = { email: "a@x.ca", firstName: "Ann", lastName: "Lee" };

afterEach(() => mock.restoreAll());

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

describe("subscribeContact", () => {
  it("updates an existing contact to subscribed and adds it to the segment", async () => {
    const { deps, calls } = makeFake();
    await subscribeContact(input, deps);
    assert.deepEqual(calls, [
      { fn: "update", arg: { email: "a@x.ca", unsubscribed: false, firstName: "Ann", lastName: "Lee" } },
      { fn: "add", arg: { email: "a@x.ca", segmentId: "seg1" } },
    ]);
  });

  it("creates the contact in the segment when update says not_found", async () => {
    const { deps, calls } = makeFake({ update: err("not_found") });
    await subscribeContact(input, deps);
    assert.deepEqual(calls[1], {
      fn: "create",
      arg: { email: "a@x.ca", unsubscribed: false, firstName: "Ann", lastName: "Lee", segments: [{ id: "seg1" }] },
    });
    assert.deepEqual(names(calls), ["update", "create"]);
  });

  it("does not create on any other update error", async () => {
    const { deps, calls } = makeFake({ update: err("rate_limit_exceeded") });
    await assert.rejects(subscribeContact(input, deps));
    assert.deepEqual(names(calls), ["update"]);
  });

  it("ignores an already-in-segment error but rejects other segment errors", async () => {
    await subscribeContact(input, makeFake({ add: err("validation_error", "Contact already in segment") }).deps);
    await assert.rejects(subscribeContact(input, makeFake({ add: err("internal_server_error") }).deps));
  });

  it("lowercases and trims the email it sends", async () => {
    const { deps, calls } = makeFake();
    await subscribeContact({ ...input, email: " A@X.ca " }, deps);
    assert.equal(calls[0]?.arg.email, "a@x.ca");
  });
});

describe("ensureContact", () => {
  it("creates a subscribed contact in the segment when get says not_found", async () => {
    const { deps, calls } = makeFake({ get: err("not_found") });
    assert.equal(await ensureContact(input, deps), "created");
    assert.deepEqual(calls[1], {
      fn: "create",
      arg: { email: "a@x.ca", unsubscribed: false, firstName: "Ann", lastName: "Lee", segments: [{ id: "seg1" }] },
    });
  });

  it("leaves an unsubscribed contact unsubscribed and only adds it to the segment", async () => {
    const { deps, calls } = makeFake({ get: { data: { unsubscribed: true }, error: null } });
    assert.equal(await ensureContact(input, deps), "existing");
    assert.deepEqual(names(calls), ["get", "add"]);
  });

  it("does not create on any other get error", async () => {
    const { deps, calls } = makeFake({ get: err("internal_server_error") });
    await assert.rejects(ensureContact(input, deps));
    assert.deepEqual(names(calls), ["get"]);
  });
});

describe("syncOptIn", () => {
  it("makes no Resend call when the box was not ticked", async () => {
    const { deps, calls } = makeFake();
    await syncOptIn({ ...input, marketingOptIn: false }, deps);
    assert.deepEqual(calls, []);
  });

  it("subscribes when the box was ticked", async () => {
    const { deps, calls } = makeFake();
    await syncOptIn({ ...input, marketingOptIn: true }, deps);
    assert.deepEqual(names(calls), ["update", "add"]);
  });

  it("swallows and logs a Resend failure", async () => {
    const logged = mock.method(console, "error", () => {});
    const { deps } = makeFake();
    (deps.resend.contacts as any).update = async () => {
      throw new Error("network down");
    };
    await syncOptIn({ ...input, marketingOptIn: true }, deps);
    assert.equal(logged.mock.callCount(), 1);
  });

  it("does nothing when deps are null", async () => {
    await syncOptIn({ ...input, marketingOptIn: true }, null);
  });
});

describe("getContactDeps", () => {
  const saved = { key: process.env.RESEND_API_KEY, seg: process.env.RESEND_SEGMENT_ID };
  afterEach(() => {
    for (const [name, v] of [["RESEND_API_KEY", saved.key], ["RESEND_SEGMENT_ID", saved.seg]] as const) {
      if (v === undefined) delete process.env[name];
      else process.env[name] = v;
    }
  });

  it("returns null with a warning when either variable is missing", () => {
    const warned = mock.method(console, "warn", () => {});
    process.env.RESEND_API_KEY = "re_test";
    delete process.env.RESEND_SEGMENT_ID;
    assert.equal(getContactDeps(), null);
    assert.equal(warned.mock.callCount(), 1);
  });

  it("returns deps when both are set", () => {
    process.env.RESEND_API_KEY = "re_test";
    process.env.RESEND_SEGMENT_ID = "seg1";
    assert.equal(getContactDeps()?.segmentId, "seg1");
  });
});
