import { Request, Response } from 'express';
import { comparePw } from '../utils/bcrypt';
import { createToken } from './../utils/jwt';

import { AUTH_ERRORS } from '../utils/auth';
import { AUTH_SUCCESS } from '../utils/auth';
import { createUser, getUserByEmail } from '../model/auth';

export async function postRegist(req: Request, res: Response): Promise<void> {
  const { email, password, nickname } = req.body;

  if (!email || !password || !nickname) {
    res.sendStatus(422);
  }

  const isExist = await getUserByEmail(email);

  if (isExist) {
    res.status(409).json({
      message: AUTH_ERRORS.ISEXIST,
    });
  }

  createUser(email, password, nickname);

  res.status(201).json({
    token: createToken(email),
    message: `${email} ${AUTH_SUCCESS.createID}`,
  });
}

export async function postLogin(req: Request, res: Response): Promise<void> {
  const { email, password } = req.body;

  const user = await getUserByEmail(email);

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

export async function getCheck(req: Request, res: Response): Promise<void | Response> {
  if (!req.userEmail || !req.token) {
    return res.sendStatus(404);
  }

  res.status(200).json({
    token: req.token,
    email: req.userEmail,
  });
}
