import Styles from './Btn.module.css';

const Btn = ({ label }: { label: string }) => {
  return <button className={Styles.btn}>{label}</button>;
};

export default Btn;
