import Styles from './Nav.module.css';

import { FaFireAlt } from 'react-icons/fa';

const Nav = ({ handleLoginMenu }: { handleLoginMenu: Function }) => {
  return (
    <header className={Styles.header}>
      <h2>Logo</h2>
      <nav className={Styles.nav}>
        <div>
          <FaFireAlt className={Styles.icon}></FaFireAlt>
          <button onClick={() => handleLoginMenu(true)} className={Styles.btn}>
            로그인
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
