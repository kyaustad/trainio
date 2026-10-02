import { drizzle } from "drizzle-orm/node-postgres";
import { relations } from "./schema";
import { env } from "@/env";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: env.DATABASE_URL,
});
export const db = drizzle({
  client: pool,
  relations,
});
