import { AuthContext } from './AuthContext';
import { useFetch } from '../hooks/fetch';

import { RegistBody, LoginBody, ResponseAuth } from '../type/auth';
import axios, { AxiosError } from 'axios';

import { useState, useEffect } from 'react';
import userEvent from '@testing-library/user-event';
import LoginRegister from './../pages/LoginRegister';

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [email, setUserEmail] = useState<null | string>(null);
  const { post } = useFetch();

  console.log(email, '여기는 컨텍스트');

  const login = async (body: LoginBody) => {
    try {
      const res = (await post('/auth/login', body)) as ResponseAuth;
      setUserEmail(res.message);
    } catch (err) {
      const error = err as Error | AxiosError;

      if (axios.isAxiosError(error)) {
        console.log(error);
      }
    }
  };

  const regist = async (body: RegistBody) => {
    try {
      const res = (await post('/auth/regist', body)) as ResponseAuth;
      setUserEmail(res.message);
    } catch (err) {
      const error = err as Error | AxiosError;
      if (axios.isAxiosError(error)) {
        console.log(error);
      }
    }
  };

  // useEffect(() => {}, []);

  return (
    <AuthContext.Provider value={{ email, login, regist }}>
      {email ? children : <LoginRegister></LoginRegister>}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
