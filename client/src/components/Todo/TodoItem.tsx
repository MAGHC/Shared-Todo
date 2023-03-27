import Styles from './TodoItem.module.css';
import Profile from './Profile';
import { Todo } from '../../type/todo';

const TodoItem = ({ todo: { nickname, email, todo, createdAt } }: { todo: Todo }) => {
  return (
    <li className={Styles.wrapper}>
      <Profile></Profile>
      <div className={Styles.todoWrapper}>
        <div className={Styles.username}>
          <p>{nickname}</p>
          <p>{email}</p>
        </div>
        <p className={Styles.describe}>{todo}</p>
        <time className={Styles.date}>{createdAt}</time>
      </div>
    </li>
  );
};

export default TodoItem;
