import Styles from './Btn.module.css';

const Btn = ({ label, isActive }: { label: string; isActive?: boolean }) => {
  return (
    <button disabled={isActive} className={Styles.btn}>
      {label}
    </button>
  );
};

export default Btn;
