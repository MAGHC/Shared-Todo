import Styles from './TodoItem.module.css';
import Profile from './Profile';
import { Todo } from '../../type/todo';

const TodoItem = ({
  todo: { nickname, email, todo, createdAt },
  setNickName,
}: {
  todo: Todo;
  setNickName: Function;
}) => {
  return (
    <li className={Styles.wrapper}>
      <Profile></Profile>
      <div className={Styles.todoWrapper}>
        <div className={Styles.username}>
          <p onClick={() => setNickName(nickname)}>{nickname}</p>
          <p>{email}</p>
        </div>
        <p className={Styles.describe}>{todo}</p>
        <time className={Styles.date}>{createdAt}</time>
      </div>
    </li>
  );
};

export default TodoItem;
