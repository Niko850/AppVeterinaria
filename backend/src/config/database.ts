import mysql from "mysql2/promise";
import "dotenv/config";

console.log({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
});

export const pool = mysql.createPool({
  host: "127.0.0.1",
  port: 3306,
  user: "veterinaria",
  password: "Veterinaria123",
  database: "veterinaria_huellitas",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  dateStrings: true,
});

export async function probarConexion(): Promise<void> {
  const connection = await pool.getConnection();

  try {
    await connection.ping();
    console.log("Conexión con MySQL establecida");
  } finally {
    connection.release();
  }
}