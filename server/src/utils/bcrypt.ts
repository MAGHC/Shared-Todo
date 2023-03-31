import bcrypt from 'bcryptjs';
import { config } from './../config';

export async function hashPw(pw: string) {
  const hashedPw = await bcrypt.hash(pw, config.bcrypt.saltyValue);

  return hashedPw;
}

export async function comparePw(userPw: string, dataPw: string): Promise<boolean> {
  const result = await bcrypt.compare(userPw, dataPw);

  return result;
}
