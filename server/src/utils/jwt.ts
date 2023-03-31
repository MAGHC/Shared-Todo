import jwt from 'jsonwebtoken';
import { config } from '../config';

export function createToken(email: string) {
  return jwt.sign({ email }, config.jwt.secretKey, { expiresIn: config.jwt.expireDay });
}
