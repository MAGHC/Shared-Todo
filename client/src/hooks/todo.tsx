import { useQuery } from '@tanstack/react-query';
import { useState, ChangeEvent } from 'react';
import { EventBusI, useEventBus } from '../context/EventBusContext';
import { Todo } from '../type/todo';
import { useFetch } from './fetch';

const useTodo = () => {
  const { get, post, put, del } = useFetch();

  const [todoInput, setTodoInput] = useState('');

  const { show } = useEventBus() as EventBusI;

  const onChangeTodo = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTodoInput(value);
  };

  const useGetTodo = () => {
    const {
      data: todos,
      isLoading,
      isError,
    } = useQuery<Todo[]>(['todos'], () => get('/todos').then((res) => res as Todo[]), {
      onError: () => {
        show({ status: 'error', message: '에러' });
      },
      onSuccess: () => {
        show({ status: 'success', message: '성공' });
      },
    });

    return { todos, isLoading, isError };
  };

  const useGetTodoById = (id: string) => {
    const {
      data: dataById,
      isLoading,
      error,
    } = useQuery<Todo>(['todos', id], () => get(`/todos/${id}`).then((res) => res as Todo));

    return { dataById, isLoading, error };
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
