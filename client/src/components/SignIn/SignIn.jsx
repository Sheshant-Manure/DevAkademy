import React, { useEffect } from 'react';
import style from './SignIn.module.css';
import GitHubLogo from '../../assets/github.png'
import { setUser } from '../../redux/slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';

const SignIn = () => {
  const dispatch = useDispatch();
  const signedIn = useSelector((state)=>state.user.isAuthenticated);
  useEffect(()=>{
    const fetchUser = async () => {
      try {
        const response = await fetch('http://localhost:8080/userdata', { credentials: 'include' });
        const data = await response.json();
        if(data._id) {
          dispatch(setUser(data));
        }
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    }
    fetchUser();
  },[dispatch])
  
  return (
      !signedIn ? (
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
     ): null
  );
};

export default SignIn;
