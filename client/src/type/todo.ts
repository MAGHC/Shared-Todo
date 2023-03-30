export type PostTodoBodyT = {};

export type Todo = {
  createdAt: string;
  email: string;
  nickname: string;
  todo: string;
  todoId: string;
  url?: string;
};

export interface TodoBody {
  email: string;
  nickname: string;
  todo: string;
}
