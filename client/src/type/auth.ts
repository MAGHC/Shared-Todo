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
  email: string | null;
}
