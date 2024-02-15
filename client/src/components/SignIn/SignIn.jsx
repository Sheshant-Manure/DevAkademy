import React from 'react';
import style from './SignIn.module.css';
import GitHubLogo from '../../assets/github.png'

const SignIn = () => {
  return (
      <button className={style.gitHubButton}>
        <img
          className={style.gitHubLogo}
          src={ GitHubLogo }
          alt="GitHub Logo"
        />
        <b>Sign in with GitHub</b>
      </button>
  );
};

export default SignIn;
