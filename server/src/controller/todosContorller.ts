import { Request, Response } from 'express';
import { TODOS_ERRORS } from './../utils/todos';

type Todo = {
  todoId: string;
  email: string;
  todo: string;
  createdAt: Date;
  nickname: string;
  profileUrl?: string;
};

let todos: Todo[] = [
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

export async function getByIdParam(req: Request, res: Response): Promise<void> {
  const id = req.params.id;

  const isExist = todos.find((todo) => todo.todoId === id);

  if (isExist) {
    res.status(200).json(isExist);
  } else {
    res.status(404).json({ message: TODOS_ERRORS.NOT_FOUND_TODO });
  }
}

export async function postTodo(req: Request, res: Response): Promise<void> {
  const { email, todo, nickname } = req.body;

  const newTodo: Todo = {
    nickname,
    todo,
    email,
    todoId: '3',
    createdAt: new Date(),
  };

  todos = [newTodo, ...todos];

  res.status(201).json(newTodo);
}

export async function delTodo(req: Request, res: Response): Promise<void> {
  const id = req.params.id;

  const isExist = todos.find((todo) => todo.todoId === id);

  if (isExist) {
    todos = todos.filter((todo) => todo.todoId !== id);
    res.send(204);
  } else {
    res.status(404).json({ message: TODOS_ERRORS.NOT_FOUND_TODO });
  }
}

export async function putTodo(req: Request, res: Response): Promise<void> {
  const { id } = req.params;
  const { todo } = req.body;

  const isExist = todos.find((todo) => todo.todoId === id);

  if (isExist) {
    isExist.todo = todo;
    res.status(200).json(isExist);
  } else {
    res.status(404).json({ message: TODOS_ERRORS.NOT_FOUND_TODO });
  }
}
