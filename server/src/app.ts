import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import 'express-async-errors';

import tweetRotuer from './router/todosRouter';

const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());

app.use('/todos', tweetRotuer);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.sendStatus(404);
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  res.sendStatus(500);
});

app.listen(8080, () => {
  console.log('hisda');
});
