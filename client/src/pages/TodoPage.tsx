import Styles from './TodoPage.module.css';
import TodoItem from './../components/Todo/TodoItem';
import Nav from './../components/Common/Nav';
import useTodo from './../hooks/todo';

import { useState, FormEvent, useEffect } from 'react';

import { BsFillArrowUpCircleFill } from 'react-icons/bs';

import { io } from '../network/socket';

const TodoPage = () => {
  const { postTodo, onChangeTodo, todoInput, setTodoInput, setSocketTodos, socketTodos } =
    useTodo();

  useEffect(() => {
    io.on('todo', (msg) => {
      setSocketTodos((prev) => [...prev, msg]);
    });

    return () => {
      io.off('todo');
    };
  }, []);

  const [nickname, setNickName] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const todoBody = {
      email: localStorage.getItem('userEmail')!,
      nickname: localStorage.getItem('userNickName')!,
      todo: todoInput,
    };
    postTodo(todoBody);
    setTodoInput('');
  };

  return (
    <>
      <Nav
        handleLoginMenu={() => {
          console.log('');
        }}
      ></Nav>
      <div className={Styles.wrapper}>
        <ul className={Styles.todos}>
          {socketTodos &&
            socketTodos.map((todo) => {
              return <TodoItem setNickName={setNickName} todo={todo}></TodoItem>;
            })}
        </ul>
        <form onSubmit={(e) => handleSubmit(e)} className={Styles.send}>
          <input
            value={todoInput}
            onChange={onChangeTodo}
            type="text"
            className={Styles.sendInput}
          ></input>
          <div>
            <button className={Styles.btn}>
              <BsFillArrowUpCircleFill></BsFillArrowUpCircleFill>보내기
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default TodoPage;
