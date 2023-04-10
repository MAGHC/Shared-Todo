export type RegistBody = {
  email: string;
  password: string;
  nickname: string;
  profileUrl?: string;
};

export type LoginBody = {
  email: string;
  password: string;
};

export interface AuthContextT {
  userEmail: string | null;
  login: Function;
  regist: Function;
}

export interface ResponseAuth {
  token: string;
  message: string;
  user: {
    email: string;
    nickname: string;
  };
}
