import React from 'react'
import style from './Courses.module.css'
import ReactLogo from '../../assets/ReactLogo.png'

const Courses = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>Courses</h1>
      <h2>React</h2>
      <img src={ReactLogo} alt='React Logo' />
    </div>
  )
}

export default Courses