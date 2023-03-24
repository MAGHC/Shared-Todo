import React from 'react';

import Styles from './LoginRegistWrapper.module.css';

const LoginRegistWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className={Styles.wrapper}>{children}</div>;
};

export default LoginRegistWrapper;
