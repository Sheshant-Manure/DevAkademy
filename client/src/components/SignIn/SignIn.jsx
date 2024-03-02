import React from 'react';
import style from './SignIn.module.css';
import GitHubLogo from '../../assets/github.png'

const SignIn = () => {

  const handleGitHubSignIn = () => {

  }

  return (
      <a className={style.SignInLink} href='http://localhost:8080/auth/github'>
        <button onClick={()=>handleGitHubSignIn} className={style.gitHubButton}>
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
