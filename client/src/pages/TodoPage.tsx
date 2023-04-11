import Styles from './TodoPage.module.css';
import TodoItem from './../components/Todo/TodoItem';
import Nav from './../components/Common/Nav';
import useTodo from './../hooks/todo';

import { useState, FormEvent, useEffect } from 'react';

import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import { useFetch } from '../hooks/fetch';
import { Todo } from '../type/todo';

const MOCKDATA = { email: 'sddas@naver.com', nickname: 'sdasda' };

const TodoPage = () => {
  const [nickname, setNickName] = useState('');

  const { postTodo, onChangeTodo, todoInput, setTodoInput, setSocketTodos, socketTodos } =
    useTodo();

  const { get } = useFetch();

  useEffect(() => {
    get('/todos')
      .then((res) => res as Todo[])
      .then((res) => setSocketTodos(res));
  }, []);

  // const { todos } = useGetTodos(nickname);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const todoBody = { ...MOCKDATA, todo: todoInput };
    postTodo(todoBody);
    setTodoInput('');
  };

  // console.log(socketTodos, '확인');
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
