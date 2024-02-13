import React from 'react'
import Logo from '../Logo/Logo'
import style from './Hero.module.css'
import SignIn from '../SignIn/SignIn'

const Hero = () => {
  return (
    <div className={style.container}> 
      <Logo />
      <SignIn />
    </div>
  )
}

export default Hero