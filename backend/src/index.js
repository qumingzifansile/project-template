import express from "express";
import mysql from "mysql2/promise";

const app = express();
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

app.get("/health", async (req, res) => {
  const [rows] = await pool.query("SELECT 1 AS ok");
  res.json({ code: 0, data: rows[0], message: "healthy" });
});

app.listen(3000, () => console.log("Backend on :3000"));
