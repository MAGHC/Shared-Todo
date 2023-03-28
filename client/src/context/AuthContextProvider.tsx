import { AuthContext } from './AuthContext';
import { useFetch } from '../hooks/fetch';

import { RegistBody, LoginBody, ResponseAuth } from '../type/auth';
import axios, { AxiosError } from 'axios';

import { useState } from 'react';
import LoginRegister from './../pages/LoginRegister';
import Notification from './../components/Common/Notification';
import { EventBusI, useEventBus } from './EventBusContext';
import TokenStorage from './../utils/token';

const readAuth = () => {
  const tokenstorage = new TokenStorage();

  const token = tokenstorage.get();

  return token ? JSON.stringify(token).toString() : null;
};

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [email, setUserEmail] = useState<null | string>(readAuth);
  const { post } = useFetch();

  const { show } = useEventBus() as EventBusI;

  const login = async (body: LoginBody) => {
    show({ status: 'loading', message: '' });
    try {
      const res = (await post('/auth/login', body)) as ResponseAuth;
      setUserEmail(res.message);
      show({ status: 'success', message: '성공적으로 로그인했습니다.' });
    } catch (err) {
      const error = err as Error | AxiosError;

      if (axios.isAxiosError(error)) {
        if (error.response) {
          const errObj = error.response;

          show({ status: 'error', message: `${errObj.status} 에러` });
        }
      }
    }
  };

  const regist = async (body: RegistBody) => {
    show({ status: 'loading', message: '' });
    try {
      const res = (await post('/auth/regist', body)) as ResponseAuth;
      setUserEmail(res.message);
      show({ status: 'success', message: '성공적으로 회원가입했습니다.' });
    } catch (err) {
      const error = err as Error | AxiosError;
      if (axios.isAxiosError(error)) {
        if (error.response) {
          const errObj = error.response;

          show({ status: 'error', message: `${errObj.status} 에러` });
        }
      }
    }
  };

  return (
    <AuthContext.Provider value={{ email, login, regist }}>
      {email ? (
        <Notification>{children}</Notification>
      ) : (
        <Notification>
          <LoginRegister></LoginRegister>
        </Notification>
      )}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
