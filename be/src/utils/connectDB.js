 
import mysql from "mysql2"; 
export const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234554321",
  database: "Blog",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});
