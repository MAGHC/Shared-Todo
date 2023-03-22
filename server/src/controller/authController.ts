import { Request, Response } from 'express';
import { comparePw, hashPw } from '../utils/bcrypt';
import { createToken } from './../utils/jwt';

import { AUTH_ERRORS } from '../utils/auth';
import { AUTH_SUCCESS } from '../utils/auth';

type User = {
  email: string;
  password: string;
  nickname: string;
  profileUrl?: string;
};

let allUser: User[] = [];

export async function postRegist(req: Request, res: Response): Promise<void> {
  const { email, password, nickname } = req.body;

  const newId: User = {
    email,
    password: await hashPw(password),
    nickname,
  };

  if (!email || !password || !nickname) {
    res.sendStatus(422);
  }

  const isExist = allUser.find((user) => user.email === email);

  if (isExist) {
    res.status(409).json({
      message: AUTH_ERRORS.ISEXIST,
    });
  }

  allUser = [...allUser, newId];

  console.log(allUser);

  res.status(201).json({
    token: createToken(email),
    message: `${email} ${AUTH_SUCCESS.createID}`,
  });
}

export async function postLogin(req: Request, res: Response): Promise<void> {
  const { email, password } = req.body;

  const user = allUser.find((user) => user.email === email);

  if (!user) {
    res.sendStatus(404);
  }

  const currentPw = user && user.password;

  if (currentPw) {
    const isValid = await comparePw(password, currentPw);

    if (!isValid) {
      res.sendStatus(422);
    } else {
      res.status(200).json({
        token: createToken(email),
        message: `${AUTH_SUCCESS.login}`,
      });
    }
  }

  res.sendStatus(202);
}

export async function getCheck(req: Request, res: Response): Promise<void> {
  res.sendStatus(205);
}
