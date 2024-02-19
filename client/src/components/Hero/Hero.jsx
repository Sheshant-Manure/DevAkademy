import React from 'react';
import { Typewriter } from 'react-simple-typewriter'
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
          <h1 className={style.HeroH1}>Learn
          <div className={style.typingWords}>
          <Typewriter style={{ color: 'blue' }} words={['Web Development', 'Projects', 'Tech Interviews']} typeSpeed={ 80 } deleteSpeed={ 80 }
            delaySpeed={1000} loop={false} cursor={true} cursorStyle={'|'} cursorBlinking={true} />
          </div>
          Faster & Better.<br/> Get started for free!</h1>
          <p className={style.HeroPara}>Learn to code by creating cool DIY projects. Build a strong portfolio alongside your learning journey.</p>
        </div>
        <SignIn/>
      </div>
  );
}

export default Hero;