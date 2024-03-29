import { useQuery } from '@tanstack/react-query';
import { useState, ChangeEvent, useEffect } from 'react';
import { EventBusI, useEventBus } from '../context/EventBusContext';
import { Todo } from '../type/todo';
import { useFetch } from './fetch';
import { TodoBody } from './../type/todo';

const useTodo = () => {
  const { get, post, put, del } = useFetch();
  const [socketTodos, setSocketTodos] = useState<Todo[]>([]);

  useEffect(() => {
    get('/todos')
      .then((res) => res as Todo[])
      .then((res) => setSocketTodos(res));
  }, []);

  const [todoInput, setTodoInput] = useState('');

  const { show } = useEventBus() as EventBusI;

  const onChangeTodo = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTodoInput(value);
  };

  const useGetTodos = (nicnkname?: string) => {
    const query = nicnkname ? `?nickname=${nicnkname}` : '';

    const {
      data: todos,
      isLoading,
      isError,
    } = useQuery<Todo[]>(
      ['todos', query],
      () => get(`/todos/${query}`).then((res) => res as Todo[]),
      {
        onError: () => {
          show({ status: 'error', message: '에러' });
        },
        onSuccess: () => {
          show({ status: 'success', message: '성공' });
        },
      },
    );

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

  const postTodo = (body: TodoBody) => {
    return post(`/todos`, body);
  };

  const putTodo = (id: string, body: { todo: string }) => {
    return put(`/todos/${id}`, body);
  };

  const deleteTodo = (id: string) => {
    return del(`/todos/${id}`);
  };

  return {
    todoInput,
    onChangeTodo,
    useGetTodos,
    useGetTodoById,
    postTodo,
    setTodoInput,
    putTodo,
    deleteTodo,
    setSocketTodos,
    socketTodos,
  };
};

export default useTodo;
