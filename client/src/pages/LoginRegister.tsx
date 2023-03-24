import { FormEvent, useEffect, useState } from 'react';

import Styles from './LoginRegister.module.css';

import { AiOutlineMail } from 'react-icons/ai';
import { Si1Password } from 'react-icons/si';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { MdOutlineDriveFileRenameOutline } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';

import { CSSTransition } from 'react-transition-group';

import InputBox from './../components/Common/InputBox';
import LoginRegistWrapper from '../components/LoginRegist/LoginRegistWrapper';
import Btn from './../components/Common/Btn';
import Form from './../components/Common/Form';
import LoginRegistBotSection from '../components/LoginRegist/LoginRegistBotSection';
import Nav from './../components/Common/Nav';
import { useValidation } from './../hooks/validation';
import { useAuth } from './../hooks/auth';

import { LoginBody, RegistBody } from '../type/auth';

function LoginRegister() {
  const [registValid, setRegistValid] = useState(false);
  const [activeMenu, setActiveMenu] = useState(true);
  const [toggleLoginRegister, setTogleLoginRegister] = useState('login');

  const {
    emailValid,
    pwValid,
    nicknameValid,
    nickname,
    email,
    password,
    profileUrl,
    onChangeEmail,
    onChangePw,
    onChangeFile,
    onChangeNickname,
  } = useValidation();

  const { regist, login } = useAuth();

  useEffect(() => {
    const isValid = emailValid && pwValid && nicknameValid;
    console.log(isValid, '확인');

    isValid ? setRegistValid(false) : setRegistValid(true);
  }, [emailValid, pwValid, nicknameValid]);

  const handleRegistSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const reqBody: RegistBody = { email, password, nickname, profileUrl };
    const res = await regist(reqBody);
    console.log(res);
  };

  const handleLoginSubmit = async (e: FormEvent<HTMLElement>) => {
    e.preventDefault();
    const reqBody: LoginBody = { email, password };
    const res = await login(reqBody);
    console.log(res);
  };

  console.log(registValid);
  return (
    <>
      <Nav handleLoginMenu={setActiveMenu}></Nav>
      <CSSTransition
        classNames={{
          enter: Styles.mainEnter,
          enterActive: Styles.mainEnterAcitve,
          exit: Styles.mainExit,
          exitActive: Styles.mainExitActive,
        }}
        unmountOnExit
        timeout={200}
        in={activeMenu}
      >
        <LoginRegistWrapper>
          <AiOutlineCloseCircle
            onClick={() => setActiveMenu(false)}
            className={Styles.close}
          ></AiOutlineCloseCircle>
          <CSSTransition
            classNames={{
              enter: Styles.loginEnter,
              enterActive: Styles.loginEnterAcitve,
              exit: Styles.loginExit,
              exitActive: Styles.loginExitActive,
            }}
            unmountOnExit
            timeout={200}
            in={toggleLoginRegister === 'login'}
          >
            <Form handleSumbit={handleLoginSubmit} formName={'LOGIN'}>
              <InputBox
                type="email"
                handleOnChange={onChangeEmail}
                children={<AiOutlineMail></AiOutlineMail>}
                label={'이메일'}
              ></InputBox>
              <InputBox
                type={'password'}
                handleOnChange={onChangePw}
                children={<Si1Password></Si1Password>}
                label={'비밀번호'}
              ></InputBox>
              <Btn label={'로그인'}></Btn>
              <LoginRegistBotSection
                label={'계정이 없으신가요?'}
                spanLabel={'regist'}
                onclick={setTogleLoginRegister}
              ></LoginRegistBotSection>
            </Form>
          </CSSTransition>
          <CSSTransition
            classNames={{
              enter: Styles.registerEnter,
              enterActive: Styles.registerEnterAcitve,
              exit: Styles.registerExit,
              exitActive: Styles.registerExitActive,
            }}
            unmountOnExit
            timeout={200}
            in={toggleLoginRegister === 'regist'}
          >
            <Form handleSumbit={handleRegistSubmit} formName={'REGISTER'}>
              <InputBox
                type="email"
                handleOnChange={onChangeEmail}
                children={<AiOutlineMail></AiOutlineMail>}
                label={'이메일'}
              ></InputBox>

              <InputBox
                type={'password'}
                handleOnChange={onChangePw}
                children={<Si1Password></Si1Password>}
                label={'비밀번호'}
              ></InputBox>

              <InputBox
                type={'text'}
                handleOnChange={onChangeNickname}
                children={<MdOutlineDriveFileRenameOutline></MdOutlineDriveFileRenameOutline>}
                label={'닉네임'}
              ></InputBox>

              <InputBox
                type={'file'}
                handleOnChange={onChangeFile}
                children={<CgProfile></CgProfile>}
                label={'파일'}
              ></InputBox>

              <Btn isActive={registValid} label={'회원가입'}></Btn>
              <LoginRegistBotSection
                label={'계정이 이미 있으신가요?'}
                spanLabel={'login'}
                onclick={setTogleLoginRegister}
              ></LoginRegistBotSection>
            </Form>
          </CSSTransition>
        </LoginRegistWrapper>
      </CSSTransition>
    </>
  );
}

export default LoginRegister;
