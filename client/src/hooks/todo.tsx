import { useQuery } from '@tanstack/react-query';
import { useState, ChangeEvent } from 'react';
import { Todo } from '../type/todo';
import { useFetch } from './fetch';

const useTodo = () => {
  const { get, post, put, del } = useFetch();

  const [todoInput, setTodoInput] = useState('');

  const onChangeTodo = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTodoInput(value);
  };

  const useGetTodo = () => {
    const {
      data: todos,
      isLoading,
      error,
    } = useQuery<Todo[]>(['todos'], () => get('/todos').then((res) => res as Todo[]));

    return { todos, isLoading, error };
  };

  const useGetTodoById = (id: string) => {
    const { data: todoById, isLoading, error } = useQuery(['todos', id], () => get(`/todos/${id}`));
    return { todoById, isLoading, error };
  };

  const useGetByNickname = async (nickname: string) => {
    const {
      data: todoByNick,
      isLoading,
      error,
    } = useQuery(['todos', nickname], () => get(`/todos/?nickname=${nickname}`));
    return { todoByNick, isLoading, error };
  };

  return {
    onChangeTodo,
    useGetTodo,
    useGetByNickname,
    useGetTodoById,
  };
};

export default useTodo;
