import jwt from 'jsonwebtoken';
const secretKey = 'n_a9ivm=y0dt5x#)xzd-x%ie5i3dxn*kvp2jd)6ofe&=7+%v*5';
const expireDate = '1d';

export function createToken(email: string) {
  return jwt.sign({ email }, secretKey, { expiresIn: expireDate });
}

export function isVerify(token: string) {
  return jwt.verify(token, secretKey);
}
