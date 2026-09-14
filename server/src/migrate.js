import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import dotenv from "dotenv";
import { makePool } from "./db.js";

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function main() {
  const connectionString = process.env.DIRECT_URL || process.env.DATABASE_URL;
  if (!connectionString) {
    console.error("Set DIRECT_URL (or DATABASE_URL) in server/.env first.");
    process.exit(1);
  }

  const pool = makePool(connectionString);
  const sql = fs.readFileSync(path.join(__dirname, "schema.sql"), "utf8");

  console.log("Running schema migration...");
  await pool.query(sql);
  console.log("Done. Tables: assessees, ratings.");
  await pool.end();
}

main().catch((err) => {
  console.error("Migration failed:", err.message);
  process.exit(1);
});
