import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pg;

export function makePool(connectionString) {
  return new Pool({
    connectionString,
    ssl: { rejectUnauthorized: false }, // Supabase requires SSL
  });
}

// Runtime pool, used by the API (pooled connection - safe for many short-lived queries)
export const pool = makePool(process.env.DATABASE_URL);
