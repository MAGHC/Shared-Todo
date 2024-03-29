import { Request, Response } from 'express';
import * as todoModel from '../model/todo';
import { TODOS_ERRORS } from './../utils/todos';
import { initIo } from '../connection/socket';

export async function getTodos(req: Request, res: Response): Promise<void> {
  const nickname: string = req.query.nickname as string;

  const data = nickname
    ? await todoModel.getAllTodoByNick(nickname)
    : await todoModel.getAllTodos();
  res.status(200).json(data);
}

export async function getByIdParam(req: Request, res: Response): Promise<void> {
  const id: string = req.params.id;

  const isExist = await todoModel.getTodoById(id);

  if (isExist) {
    res.status(200).json(isExist);
  } else {
    res.status(404).json({ message: TODOS_ERRORS.NOT_FOUND_TODO });
  }
}

export async function postTodo(req: Request, res: Response): Promise<void> {
  const { email, todo, nickname } = req.body;
  const newTodo = await todoModel.createTodo(email, todo, nickname);

  res.status(201).json(newTodo);
  initIo().emit('todo', newTodo);
}

export async function delTodo(req: Request, res: Response): Promise<void> {
  const id = req.params.id;

  const isExist = await todoModel.getTodoById(id);

  if (isExist) {
    todoModel.deleteTodo(id);
    res.send(204);
  }
  if (!isExist) {
    res.status(404).json({ message: TODOS_ERRORS.NOT_FOUND_TODO });
  }
  if (isExist?.email === req.userEmail) {
    res.sendStatus(403);
  }
}

export async function putTodo(req: Request, res: Response): Promise<void> {
  const { id } = req.params;
  const { todo } = req.body;

  const isExist = await todoModel.getTodoById(id);

  if (isExist) {
    const updatedTodo = await todoModel.updateTodo(id, todo);
    res.status(200).json({ message: updatedTodo });
  }
  if (!isExist) {
    res.status(404).json({ message: TODOS_ERRORS.NOT_FOUND_TODO });
  }
  if (req.userEmail === isExist?.email) {
    res.sendStatus(403);
  }
}
