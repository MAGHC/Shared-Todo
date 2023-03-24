import { FormEventHandler } from 'react';

const Form = ({
  formName,
  children,
  handleSumbit,
}: {
  formName: string;
  children: React.ReactNode;
  handleSumbit: FormEventHandler<HTMLFormElement>;
}) => {
  return (
    <form onSubmit={handleSumbit}>
      <h2>{formName}</h2>
      {children}
    </form>
  );
};

export default Form;
