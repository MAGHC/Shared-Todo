import Styles from './TodoPage.module.css';
import TodoItem from './../components/Todo/TodoItem';
import Nav from './../components/Common/Nav';
import useTodo from './../hooks/todo';

import { BsFillArrowUpCircleFill } from 'react-icons/bs';

const TodoPage = () => {
  const { useGetTodo } = useTodo();

  const { todos } = useGetTodo();

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
              return <TodoItem todo={todo}></TodoItem>;
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
