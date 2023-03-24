import Styles from './InputBox.module.css';
import { ChangeEventHandler } from 'react';

const InputBox = ({
  type,
  children,
  label,
  isRequired,
  handleOnChange,
}: {
  type: string;
  children: React.ReactNode;
  label: string;
  isRequired?: boolean;
  handleOnChange: ChangeEventHandler<HTMLInputElement>;
}) => {
  return (
    <div className={Styles.inputBox}>
      <input
        accept={type === 'file' ? 'image/*' : ''}
        onChange={handleOnChange}
        id={label}
        type={type}
        required={isRequired}
      ></input>
      <span className={Styles.icon}>{children}</span>
      <label htmlFor={label} className={Styles.label}>
        {label}
      </label>
    </div>
  );
};

export default InputBox;
