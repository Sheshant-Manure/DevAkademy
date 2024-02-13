import React from 'react';
import style from './SignIn.module.css';

const SignIn = () => {
  return (
    <div className={style.signInContainer}>
      <button className={style.gitHubButton}>
        <img
          className={style.gitHubLogo}
          src="https://cdn-icons-png.flaticon.com/128/2111/2111432.png"
          alt="GitHub Logo"
        />
        <b>Sign in with GitHub</b>
      </button>
    </div>
  );
};

export default SignIn;
