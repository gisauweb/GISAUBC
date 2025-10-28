import { drizzle } from "drizzle-orm/node-postgres";
import postgres from "postgres";

const connectionString = process.env.DATABASE_URL;

const client = postgres(`${connectionString}`, { prepare: false });
const db = drizzle({ client });

export default db;
