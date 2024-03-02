import { config } from "dotenv";

import { Pool } from "pg";

config();

const pool = new Pool({
  server: process.env.SERVER_PORT,
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  ssl: "true",
  max: 20,
  connectionTimeoutMillis: 0,
  idleTimeoutMillis: 0,
  ssl: true,
});

export default pool;
