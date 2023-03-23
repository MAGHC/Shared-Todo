import { useState } from 'react';

import Styles from './LoginRegister.module.css';

import { AiOutlineMail } from 'react-icons/ai';
import { Si1Password } from 'react-icons/si';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { MdOutlineDriveFileRenameOutline } from 'react-icons/md';
import { CgProfile } from 'react-icons/cg';

import { CSSTransition } from 'react-transition-group';

import InputBox from './../components/InputBox';
import LoginRegistWrapper from './../components/LoginRegistWrapper';
import Btn from './../components/Btn';
import Form from './../components/Form';
import LoginRegistBotSection from './../components/LoginRegistBotSection';
import Nav from './../components/Nav';

function LoginRegister() {
  const [activeMenu, setActiveMenu] = useState(false);
  const [toggleLoginRegister, setTogleLoginRegister] = useState('login');

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
            <Form formName={'LOGIN'}>
              <InputBox
                type="email"
                children={<AiOutlineMail></AiOutlineMail>}
                label={'이메일'}
                isRequired={true}
              ></InputBox>
              <InputBox
                type={'password'}
                children={<Si1Password></Si1Password>}
                label={'비밀번호'}
                isRequired={true}
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
            <Form formName={'REGISTER'}>
              <InputBox
                type="email"
                children={<AiOutlineMail></AiOutlineMail>}
                label={'이메일'}
                isRequired={true}
              ></InputBox>

              <InputBox
                type={'password'}
                children={<Si1Password></Si1Password>}
                label={'비밀번호'}
                isRequired={true}
              ></InputBox>

              <InputBox
                type={'text'}
                children={<MdOutlineDriveFileRenameOutline></MdOutlineDriveFileRenameOutline>}
                label={'닉네임'}
                isRequired={true}
              ></InputBox>

              <InputBox
                type={'file'}
                children={<CgProfile></CgProfile>}
                label={'파일'}
                isRequired={true}
              ></InputBox>

              <Btn label={'회원가입'}></Btn>
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
