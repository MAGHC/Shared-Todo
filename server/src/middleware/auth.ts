import { Request, Response, NextFunction } from 'express';

import jwt from 'jsonwebtoken';
import { getUserByEmail } from '../model/auth';
import { TokenI } from '../type/auth';

const secretKey = 'n_a9ivm=y0dt5x#)xzd-x%ie5i3dxn*kvp2jd)6ofe&=7+%v*5';

export async function isAuth(req: Request, res: Response, next: NextFunction) {
  const authHead = req.get('Authorization');

  if (!(authHead && authHead.startsWith('Bearer '))) {
    return res.sendStatus(401);
  }

  const token = authHead && authHead.split(' ')[1];

  if (!token) {
    return res.sendStatus(401);
  }

  jwt.verify(token, secretKey, async (error, decoded) => {
    if (error) {
      return res.sendStatus(401);
    }
    const user = await getUserByEmail((decoded as TokenI).email);

    if (!user) {
      return res.sendStatus(401);
    }

    req.userEmail = user.email;
    req.token = token;

    next();
  });
}
