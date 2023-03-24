import { AuthContext } from './AuthContext';

import { useState, useEffect } from 'react';
import { AuthContextT } from '../type/auth';

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [email, setUserEmail] = useState('');

  useEffect(() => {}, []);

  return <AuthContext.Provider value={{ email }}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
