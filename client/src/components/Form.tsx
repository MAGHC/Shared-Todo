const Form = ({ formName, children }: { formName: string; children: React.ReactNode }) => {
  return (
    <form>
      <h2>{formName}</h2>
      {children}
    </form>
  );
};

export default Form;
