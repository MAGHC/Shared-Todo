import { Todo } from '../type/todo';

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

export async function getAllTodos() {
  return todos;
}

export async function getAllTodoByNick(nickname: string) {
  return todos.filter((todo) => todo.nickname === nickname);
}

export async function getTodoById(id: string) {
  return todos.find((todo) => todo.todoId === id);
}

export async function createTodo(email: string, todo: string, nickname: string) {
  const newTodo: Todo = {
    nickname,
    todo,
    email,
    todoId: '3',
    createdAt: new Date(),
  };

  todos = [newTodo, ...todos];

  return newTodo;
}

export async function updateTodo(id: string, todo: string) {
  const findedTodo = await getTodoById(id);

  if (findedTodo) {
    findedTodo.todo = todo;
  }
  return findedTodo;
}

export function deleteTodo(id: string) {
  todos.filter((todo) => todo.todoId !== id);
}
