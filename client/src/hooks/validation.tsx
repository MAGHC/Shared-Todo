import { ChangeEvent, useState } from 'react';

import { EMAIL_REG } from './../utils/regexp';

export const useValidation = () => {
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [nickname, setNickName] = useState('');
  const [nicknameValid, setNicknameValid] = useState(false);
  const [password, setPw] = useState('');
  const [pwValid, setPwValid] = useState(false);
  const [profileUrl, setProfile] = useState<string>();

  //   console.log(email);
  //   console.log(pw);
  //   console.log(profile);
  //   console.log(nickname);
  //   console.log(pwValid);
  //   console.log(emailValid);
  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEmail(value);
    const isValidEmail = value.match(EMAIL_REG);

    isValidEmail ? setEmailValid(true) : setEmailValid(false);
  };

  const onChangePw = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setPw(value);

    const isValidPW = value.length < 5;

    isValidPW ? setPwValid(false) : setPwValid(true);
  };

  const onChangeNickname = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setNickName(value);

    const isValidNick = value.length < 1;

    isValidNick ? setNicknameValid(false) : setNicknameValid(true);
  };

  const onChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    const file = (e.currentTarget.files as FileList)[0];

    const url = URL.createObjectURL(file);

    setProfile(url);
  };

  return {
    onChangeEmail,
    onChangePw,
    onChangeFile,
    onChangeNickname,
    nicknameValid,
    email,
    nickname,
    password,
    emailValid,
    pwValid,
    profileUrl,
  };
};
