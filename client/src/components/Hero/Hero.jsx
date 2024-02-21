import React from 'react';
import { Typewriter } from 'react-simple-typewriter'
import style from './Hero.module.css';
import Quotes from '../Quotes/Quotes';
import SignIn from '../SignIn/SignIn';
import video from '../../assets/bubbles.mp4';

const Hero = () => {
  return (
      <div className={style.container} style={{fontFamily: "Gilroy-Regular, sans-serif"}}>
        <Quotes />
        <div className={style.textContainer}>
          <h1 className={style.HeroH1}>Learn
          <div className={style.typingWords}>
          <Typewriter words={['Web Development', 'Projects', 'Tech Interviews']} typeSpeed={ 80 } deleteSpeed={ 80 }
            delaySpeed={1000} loop={false} cursor={true} cursorStyle={'|'} cursorBlinking={true} />
          </div>
          Faster & Better.<br/> Get started for free!</h1>
          <p className={style.HeroPara}>Eat. Sleep. Code. Repeat.</p>
        </div>
        <SignIn/>
        <video src={video} autoPlay loop muted />
      </div>
  );
}

export default Hero;