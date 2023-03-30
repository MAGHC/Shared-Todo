export type Todo = {
  id: string;
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
