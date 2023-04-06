import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import 'express-async-errors';

import todoRouter from './router/todosRouter';
import authRouter from './router/authRouter';

import { config } from './config';
import { Server } from 'socket.io';

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

const server = app.listen(config.host.port, () => {
  console.log('hisda');
});

const io = new Server(server, {
  cors: {
    origin: '*',
  },
});

io.on('connect', (socket) => {
  console.log('클라이언트');
  io.emit('sharedTodo', 'Hi!');
});
