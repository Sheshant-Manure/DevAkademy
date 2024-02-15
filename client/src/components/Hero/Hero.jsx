import React from 'react';
import style from './Hero.module.css';
import Quotes from '../Quotes/Quotes';
import SignIn from '../SignIn/SignIn';
import video from '../../assets/dots.mp4';

const Hero = () => {
  return (
      <div className={style.container}>
        <Quotes />
        <video src={video} autoPlay loop muted />
        <div className={style.textContainer}>
          <h1>Learn Web Development<br/> Faster & Better.<br/> Get started for free!</h1>
          <p>Learn to code by creating cool DIY projects. Build a strong portfolio alongside your learning journey.</p>
        </div>
        <SignIn/>
      </div>
  );
}

export default Hero;