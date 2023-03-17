import { Request, Response } from 'express';

type Todo = {
  todoId: string;
  email: string;
  todo: string;
  createdAt: Date;
  nickname: string;
  profileUrl?: string;
};

const todos: Todo[] = [
  {
    todoId: '1',
    email: 'easdsa@naver.com',
    createdAt: new Date(),
    todo: '2021까지~다하기',
    nickname: '시말',
  },
  {
    todoId: '2',
    email: 'easdsa@naver.com',
    createdAt: new Date(),
    todo: '2023까지~다하기',
    nickname: '시2말',
  },
];

export async function getTodos(req: Request, res: Response): Promise<void> {
  const nickname = req.query.nickname;
  const data = nickname ? todos.filter((todo) => todo.nickname === nickname) : todos;
  res.status(200).json(data);
}

export async function getByIdParam(req: Request, res: Response) {
  const id = req.params.id;

  const isExist = todos.find((todo) => todo.todoId === id);

  if (isExist) {
    res.status(200).json(isExist);
  } else {
    res.status(404).json({ message: '해당 Todo는 존재하지않습니다.' });
  }
}
