import mysql from 'mysql2';
import { config } from '../config';

const pool = mysql.createPool({
  host: config.db.host,
  user: config.db.user,
  database: config.db.datebase,
  password: config.db.password,
});

export const db = pool.promise();
