import db from "../database";
import { usersTable } from "../schema";

export const add_post = async () => {
  await db.insert(usersTable).values({ name: "halo" });
};

// TODO
export const delete_post = async () => {};

// TODO
export const update_post = async () => {};

// TODO
export const get_by_term = async () => {};
