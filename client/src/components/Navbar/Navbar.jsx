import React from 'react'
import style from './Navbar.module.css'

const Navbar = () => {
  return (
    <div className={style.container}>
        <ul>
            <li>Home</li>
            <li>Courses</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}

export default Navbar