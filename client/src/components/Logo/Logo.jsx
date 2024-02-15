import React from 'react'
import logo from '../../assets/logo.svg'
import style from './Logo.module.css'

const Logo = () => {
  return (
    <img className={style.logoimg} src={logo} alt='Logo' draggable='false' />
  )
}

export default Logo