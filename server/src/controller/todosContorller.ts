import { Request, Response } from 'express';

type Todo = {
  email: string;
  todo: string;
  createdAt: Date;
  nickname: string;
  profileUrl?: string;
};

const todos: Todo[] = [
  { email: 'easdsa@naver.com', createdAt: new Date(), todo: '2021까지~다하기', nickname: '시말' },
  { email: 'easdsa@naver.com', createdAt: new Date(), todo: '2023까지~다하기', nickname: '시2말' },
];

export async function getTodos(req: Request, res: Response): Promise<void> {
  const nickname = req.query.nickname;
  const data = nickname ? todos.filter((todo) => todo.nickname === nickname) : todos;
  res.status(200).json(data);
}
