import Styles from './LoginRegistBotSection.module.css';

const LoginRegistBotSection = ({
  label,
  onclick,
  spanLabel,
}: {
  spanLabel: string;
  label: string;
  onclick: Function;
}) => {
  return (
    <div className={Styles.loginRegist}>
      <p>{label}</p>
      <span onClick={() => onclick(spanLabel)}>{spanLabel}</span>
    </div>
  );
};

export default LoginRegistBotSection;
