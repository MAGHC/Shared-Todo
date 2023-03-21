import Styles from './InputBox.module.css';

const InputBox = ({
  type,
  children,
  label,
  isRequired,
}: {
  type: string;
  children: React.ReactNode;
  label: string;
  isRequired?: boolean;
}) => {
  return (
    <div className={Styles.inputBox}>
      <input id={label} type={type} required={isRequired}></input>
      <span className={Styles.icon}>{children}</span>
      <label htmlFor={label} className={Styles.label}>
        {label}
      </label>
    </div>
  );
};

export default InputBox;
