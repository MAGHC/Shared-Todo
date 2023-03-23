import { useFetch } from './fetch';

import { RegistBody, LoginBody } from '../type/auth';
import axios, { AxiosError } from 'axios';

export const useAuth = () => {
  const { post } = useFetch();

  const regist = async (body: RegistBody) => {
    try {
      const res = await post('/auth/regist', body);
      return res;
    } catch (err) {
      const error = err as Error | AxiosError;
      if (axios.isAxiosError(error)) {
        console.log(error);
      }
    }
  };

  const login = async (body: LoginBody) => {
    try {
      const res = await post('/auth/login', body);
      return res;
    } catch (err) {
      const error = err as Error | AxiosError;

      if (axios.isAxiosError(error)) {
        console.log(error);
      }
    }
  };

  return { regist, login };
};
