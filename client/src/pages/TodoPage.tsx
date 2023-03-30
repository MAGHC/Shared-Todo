import Styles from './TodoPage.module.css';
import TodoItem from './../components/Todo/TodoItem';
import Nav from './../components/Common/Nav';
import useTodo from './../hooks/todo';

import { useState } from 'react';

import { BsFillArrowUpCircleFill } from 'react-icons/bs';

const TodoPage = () => {
  const [nickname, setNickName] = useState('');

  const { useGetTodos } = useTodo();

  const { todos } = useGetTodos(nickname);

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
        <div className={Styles.send}>
          <input type="text" className={Styles.sendInput}></input>
          <div>
            <button className={Styles.btn}>
              <BsFillArrowUpCircleFill></BsFillArrowUpCircleFill>보내기
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoPage;
