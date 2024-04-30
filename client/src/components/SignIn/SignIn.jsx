import React, { useEffect } from 'react';
// import axios from 'axios';  // Import Axios
import style from './SignIn.module.css';
import GitHubLogo from '../../assets/github.png';
import { setUser } from '../../redux/slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import ServerURL from '../../config/serverURL';

const SignIn = () => {
  const dispatch = useDispatch();
  const signedIn = useSelector((state) => state.user.isAuthenticated);

  useEffect(() => {
    const fetchUser = async () => {
      if(localStorage.getItem('token'))
      try {
        const response = await fetch(`${ServerURL}/userdata?token=${localStorage.getItem('token')}`);
        const data = await response.json();
        if (data.id) {
          dispatch(setUser(data));
        }
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };
    // Function to parse the URL and extract the token from query parameters
    const getTokenFromUrl = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get('token');
      // check if token exists
      if (token) {
        // Storing token from query params in localStorage
        localStorage.setItem('token', token);
        // Removing token from the URL after storing it
        window.history.replaceState({}, document.title, window.location.pathname);
      }
      fetchUser();
    };
    getTokenFromUrl();
  }, [dispatch]);

  return !signedIn ? (
    <a className={style.SignInLink} href={`${ServerURL}/auth/github`}>
      <button className={style.gitHubButton}>
        <img className={style.gitHubLogo} src={GitHubLogo} alt="GitHub Logo" />
        <b>Sign In With GitHub</b>
      </button>
    </a>
  ) : null;
};

export default SignIn;