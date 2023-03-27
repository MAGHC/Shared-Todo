import { createContext, useContext } from 'react';
import { AuthContextT } from '../type/auth';

export const AuthContext = createContext<null | AuthContextT>(null);

export const useAuthContext = () => useContext(AuthContext);
