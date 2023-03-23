import { API } from '../utils/axios';

export const useFetch = <T, V>() => {
  const get = async (url: string): Promise<T> => {
    const res = await API.get(url);

    return res.data;
  };

  const post = async (url: string, body: V): Promise<T> => {
    const res = await API.post(url, body);

    return res.data;
  };

  const put = async (url: string, body: V): Promise<T> => {
    const res = await API.put(url, body);

    return res.data;
  };

  const del = async (url: string): Promise<T> => {
    const res = await API.delete(url);

    return res.data;
  };

  return { get, post, put, del };
};
