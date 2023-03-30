import Styles from './TodoItem.module.css';
import Profile from './Profile';
import { Todo } from '../../type/todo';
import { useState } from 'react';
import useTodo from './../../hooks/todo';

const TodoItem = ({
  todo: { todoId, nickname, email, todo, createdAt },
  setNickName,
}: {
  todo: Todo;
  setNickName: Function;
}) => {
  const { putTodo, deleteTodo } = useTodo();

  const [toggleEdit, setToggleEdit] = useState(false);

  const [todoItem, setTodoItem] = useState(todo);

  const shiftEnterEvent = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.nativeEvent.isComposing) {
      return;
    }
    if (e.key === 'Enter' && e.shiftKey) {
      return;
    }
    if (e.key === 'Enter') {
      //보내는함수
      console.log(todoId, '보내는 함수 쪽 확인');
      const requestBody = { todo: todoItem };
      putTodo(todoId, requestBody);
      setToggleEdit(false);
    }
  };

  const onChangeTodo = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTodoItem(e.target.value);
  };

  return (
    <li className={Styles.wrapper}>
      <Profile></Profile>
      <div className={Styles.todoWrapper}>
        <div className={Styles.username}>
          <p onClick={() => setNickName(nickname)}>{nickname}</p>
          <p>{email}</p>
          {!toggleEdit && <p onClick={() => setToggleEdit(!toggleEdit)}>수정</p>}
          {toggleEdit && <p onClick={() => setToggleEdit(!toggleEdit)}>수정완료</p>}
          <p onClick={() => deleteTodo(todoId)}>삭제</p>
        </div>
        {!toggleEdit && <p className={Styles.describe}>{todo}</p>}
        {toggleEdit && (
          <textarea onChange={onChangeTodo} value={todoItem} onKeyDown={shiftEnterEvent}></textarea>
        )}

        <time className={Styles.date}>{createdAt}</time>
      </div>
    </li>
  );
};

export default TodoItem;

//fix 백엔드 에서 userEmail 넘겨주면 지금 context와 비교해서 로그인 사람이 자신이면 다르게 표현되게끔 변경할것임
//fix 마찬가지로 수정 버튼도 로그인한 본인이 아니면 안나오게끔 변경
