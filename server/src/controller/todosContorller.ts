import { Request, Response } from 'express';

const todos = [
  { id: 1, createdAt: new Date(), todo: '2021까지~다하기', nickname: '시말' },
  { id: 2, createdAt: new Date(), todo: '2023까지~다하기', nickname: '시2말' },
];

export async function getTodos(req: Request, res: Response) {
  const nickname = req.query.nickname;
  let data;
  if (nickname) {
    data = todos.filter((todo) => todo.nickname === nickname);
    return res.status(200).json(data);
  }
  data = todos;
  return res.status(200).json(data);
}
