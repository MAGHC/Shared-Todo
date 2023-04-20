import { db } from '../db/db';
import { User } from '../type/auth';

let allUser: User[] = [];

export async function getAllUser(): Promise<User[]> {
  return allUser;
}

export async function getUserByEmail(email: string): Promise<undefined | User> {
  return db.execute('SELECT * FROM users WHERE email=?', [email]).then((res) => res[0][0]);
}

export async function createUser(user: User) {
  const { nickname, password, email, profileUrl } = user;

  return db
    .execute('INSERT INTO users (nickname, password, email, profileUrl) VALUES(?, ?, ?, ?)', [
      nickname,
      password,
      email,
      profileUrl,
    ])
    .then((res) => res[0].insertId);
}
