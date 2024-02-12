import React from 'react'
import logo from '../../assets/logo.png'
import style from './Hero.module.css'

const Hero = () => {
  return (
    <div className={style.container}> 
        <img className={style.logo} src={logo} alt='Logo' draggable='false' />
    </div>
  )
}

export default Hero