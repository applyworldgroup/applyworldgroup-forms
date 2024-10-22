import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "./schema/index";

if (!process.env.DATABASE_URL) {
  throw new Error(
    "Database URL not found. Please set DRIZZLE_DATABASE_URL in your environment variables.",
  );
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

await pool.connect();
const db = drizzle(pool, { schema });

export default db;

