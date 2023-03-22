import { Request } from 'express';
import 'express';

export type User = {
  email: string;
  password: string;
  nickname: string;
  profileUrl?: string;
};

export interface TokenI {
  email: string;
}

declare module 'express' {
  interface Request {
    userEmail?: string;
    token?: string;
  }
}
