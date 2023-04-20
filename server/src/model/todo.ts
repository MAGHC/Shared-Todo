import { db } from '../db/db';
import { Todo } from '../type/todo';

const COMMON_QUERY =
  'SELECT td.email, td.todo, td.createdAt, us.nickname, us.profileUrl, us.email FROM todos as td JOIN users as us ON td.email=us.email ';

const ORDERBY = 'ORDER BY td.createdAt DESC';

export async function getAllTodos() {
  return db.execute(`${COMMON_QUERY} ${ORDERBY}`).then((res: Todo[] | []) => res[0]);
}

export async function getAllTodoByNick(nickname: string) {
  return db
    .execute(`${COMMON_QUERY} WHERE td.nickname=? ${ORDERBY} `, [nickname])
    .then((res: Todo[] | []) => res[0]);
}

export async function getTodoById(id: string) {
  return db.execute(`${COMMON_QUERY} WHERE td.todoId=?`, [id]).then((res) => res[0][0]);
}

export async function createTodo(email: string, todo: string, nickname: string) {
  return db
    .execute('INSERT INTO todos (todo,email,createdAt,nickname) VALUES(?,?,?,?)', [
      todo,
      email,
      new Date(),
      nickname,
    ])
    .then((res) => getTodoById(res[0].insertId));
}

export async function updateTodo(id: string, todo: string) {
  const findedTodo = await getTodoById(id);

  if (findedTodo) {
    return db
      .execute('UPDATE todos SET todo=? WHERE todoId=? ', [todo, id])
      .then((res) => getTodoById(id));
  }
  return findedTodo;
}

export function deleteTodo(id: string) {
  return db.execute('DELETE FROM todos WHERE todoId=?', [id]);
}
