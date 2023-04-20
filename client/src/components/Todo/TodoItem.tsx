import Styles from './TodoItem.module.css';
import Profile from './Profile';
import { Todo } from '../../type/todo';
import { useEffect, useRef, useState } from 'react';
import useTodo from './../../hooks/todo';
import { useAuthContext } from '../../context/AuthContext';
import { AuthContextT } from '../../type/auth';

const TodoItem = ({
  todo: { todoId, nickname, email, todo, createdAt },
  setNickName,
}: {
  todo: Todo;
  setNickName: Function;
}) => {
  const todoItemRef = useRef<null | HTMLLIElement>(null);

  useEffect(() => {
    if (todoItemRef.current === null) {
      return;
    } else todoItemRef.current.scrollIntoView();
  }, []);

  const { putTodo, deleteTodo } = useTodo();

  const [toggleEdit, setToggleEdit] = useState(false);

  const [todoItem, setTodoItem] = useState(todo);

  const { userEmail } = useAuthContext() as AuthContextT;

  const shiftEnterEvent = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.nativeEvent.isComposing) {
      return;
    }
    if (e.key === 'Enter' && e.shiftKey) {
      return;
    }
    if (e.key === 'Enter') {
      const requestBody = { todo: todoItem };
      putTodo(todoId, requestBody);
      setToggleEdit(false);
    }
  };

  const onChangeTodo = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTodoItem(e.target.value);
  };

  return (
    <li
      ref={todoItemRef}
      className={email === userEmail ? `${Styles.wrapper} ${Styles.nowUser}` : `${Styles.wrapper}`}
    >
      <Profile></Profile>
      <div className={Styles.todoWrapper}>
        <div
          className={
            email === userEmail ? `${Styles.username} ${Styles.nowUser}` : `${Styles.username}`
          }
        >
          <p onClick={() => setNickName(nickname)}>{nickname}</p>
          <p>{email}</p>
          {!toggleEdit && <p onClick={() => setToggleEdit(!toggleEdit)}>수정</p>}
          {toggleEdit && <p onClick={() => setToggleEdit(!toggleEdit)}>수정완료</p>}
          <p onClick={() => deleteTodo(todoId)}>삭제</p>
        </div>
        {!toggleEdit && (
          <p
            className={
              email === userEmail ? `${Styles.describe} ${Styles.nowUser}` : `${Styles.describe}`
            }
          >
            {todo}
          </p>
        )}
        {toggleEdit && (
          <textarea onChange={onChangeTodo} value={todoItem} onKeyDown={shiftEnterEvent}></textarea>
        )}

        <time
          className={email === userEmail ? `${Styles.date} ${Styles.nowUser}` : `${Styles.date}`}
        >
          {createdAt}
        </time>
      </div>
    </li>
  );
};

export default TodoItem;

//fix 백엔드 에서 userEmail 넘겨주면 지금 context와 비교해서 로그인 사람이 자신이면 다르게 표현되게끔 변경할것임
//fix 마찬가지로 수정 버튼도 로그인한 본인이 아니면 안나오게끔 변경
