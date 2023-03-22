import { User } from '../type/auth';

import { hashPw } from '../utils/bcrypt';

let allUser: User[] = [];

export async function getAllUser(): Promise<User[]> {
  return allUser;
}

export async function getUserByEmail(email: string): Promise<undefined | User> {
  return allUser.find((user) => user.email === email);
}

export async function createUser(
  email: string,
  password: string,
  nickname: string,
): Promise<string> {
  const newId: User = {
    email,
    password: await hashPw(password),
    nickname,
  };

  allUser.push(newId);

  return newId.email;
}
