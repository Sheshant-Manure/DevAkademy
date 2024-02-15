import React, { useState, useEffect } from 'react'
import style from './Navbar.module.css'
import MenuLogo from '../../assets/menu.png'
import LogoSymbol from '../../assets/logosymbol.png'
import LogoText from '../../assets/logotext.png'
import SignIn from '../SignIn/SignIn'

const Navbar = () => {

  const handleResize = () => setScrnWidth(window.innerWidth)
  const [scrnWidth, setScrnWidth] = useState(window.innerWidth)
  useEffect(()=>{
    window.addEventListener('resize', handleResize)
    return()=>{
      window.removeEventListener('resize', handleResize)
    }
  },[scrnWidth])

  return (
    <nav className={style.container}>
        { scrnWidth > 415 ?
        <ul className={style.desktop}>
          <li className={style.logos}><img width={'50px'}  src={ LogoSymbol } alt='Logo Symbol' draggable='false' /><img width={'150px'}  src={ LogoText } alt='Logo Text' draggable='false' /></li>
          <li className={style.desktopli}>Home</li>
          <li className={style.desktopli}>Courses</li>
          <li className={style.desktopli}>About</li>
          <li className={style.desktopli}>Contact</li>
        </ul>
        :
        <ul className={style.mobileViewMenu}>
          <li><img src={ MenuLogo } alt='Menu Logo'/></li>
        </ul>
        }
        <div className={style.SignInBtn}><SignIn /></div>
    </nav>
  )
}

export default Navbar