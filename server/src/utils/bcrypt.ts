import bcrypt from 'bcryptjs';

const bcryptSaltyValue = 12;

export async function hashPw(pw: string) {
  const hashedPw = await bcrypt.hash(pw, bcryptSaltyValue);

  return hashedPw;
}

export async function comparePw(userPw: string, dataPw: string): Promise<boolean> {
  const result = await bcrypt.compare(userPw, dataPw);

  return result;
}
