import { Navigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';

import { AuthContextT } from './../../type/auth';

const ProtectedRouter = ({ children }: { children: React.ReactNode }) => {
  const { email } = useAuthContext() as AuthContextT;

  if (!email) return <Navigate to="/" replace></Navigate>;

  return <div>{children}</div>;
};

export default ProtectedRouter;
