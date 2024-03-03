import React from 'react';
import style from './SignIn.module.css';
import GitHubLogo from '../../assets/github.png'

const SignIn = () => {
  return (
      <a className={style.SignInLink} href='http://localhost:8080/auth/github'>
        <button className={style.gitHubButton}>
          <img
            className={style.gitHubLogo}
            src={ GitHubLogo }
            alt="GitHub Logo"
          />
          <b>Sign In With GitHub</b>
        </button>
      </a>
  );
};

export default SignIn;
