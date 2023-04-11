import { API } from '../utils/axios';
import TokenStorage from '../utils/token';

const token = new TokenStorage();

export const useFetch = <T, V>() => {
  const headers = {
    Authorization: `Bearer ${token.get()}`,
  };

  const get = async (url: string): Promise<T> => {
    const res = await API.get(url);

    return res.data;
  };

  const post = async (url: string, body: V): Promise<T> => {
    const res = await API.post(url, body, { headers });

    return res.data;
  };

  const put = async (url: string, body: V): Promise<T> => {
    const res = await API.put(url, body, { headers });

    return res.data;
  };

  const del = async (url: string): Promise<T> => {
    const res = await API.delete(url, { headers });

    return res.data;
  };

  return { get, post, put, del };
};
