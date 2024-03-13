import React, { useEffect } from 'react';
import axios from 'axios';  // Import Axios
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
      try {
        const response = await axios.get(`${ServerURL}/userdata`, { withCredentials: true });
        if (response.data._id) {
          dispatch(setUser(response.data));
        }
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };
    fetchUser();
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