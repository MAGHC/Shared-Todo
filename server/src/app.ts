import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import 'express-async-errors';

import todoRouter from './router/todosRouter';
import authRouter from './router/authRouter';

import { config } from './config';
import { initIo } from './connection/socket';
import { db } from './db/db';

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

app.use('/todos', todoRouter);

app.use('/auth', authRouter);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.sendStatus(404);
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.sendStatus(500);
});

db.getConnection().then((res) => console.log(res, '확인'));

const server = app.listen(config.host.port);

initIo(server);
