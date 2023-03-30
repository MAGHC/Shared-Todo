import Styles from './TodoPage.module.css';
import TodoItem from './../components/Todo/TodoItem';
import Nav from './../components/Common/Nav';
import useTodo from './../hooks/todo';

import { useState, FormEvent } from 'react';

import { BsFillArrowUpCircleFill } from 'react-icons/bs';

const MOCKDATA = { email: 'sddas@naver.com', nickname: 'sdasda' };

const TodoPage = () => {
  const [nickname, setNickName] = useState('');

  const { useGetTodos, postTodo, onChangeTodo, todoInput, setTodoInput } = useTodo();

  const { todos } = useGetTodos(nickname);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const todoBody = { ...MOCKDATA, todo: todoInput };
    postTodo(todoBody);
    setTodoInput('');
  };

  console.log(todos, '확인');
  return (
    <>
      <Nav
        handleLoginMenu={() => {
          console.log('');
        }}
      ></Nav>
      <div className={Styles.wrapper}>
        <ul className={Styles.todos}>
          {todos &&
            todos.map((todo) => {
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
