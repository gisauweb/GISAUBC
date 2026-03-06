import type { InferSelectModel } from "drizzle-orm";
import db from "../db/database.js";
import { merch } from "../db/schema/index.js";

export type Merch = InferSelectModel<typeof merch>;

export const get_all_merch = async (): Promise<Merch[]> => {
  try {
    return await db.select().from(merch);
  } catch (err) {
    console.error("Error fetching merch:", err);
    throw err;
  }
};
