import React from 'react'
import style from './Courses.module.css'
import ReactLogo from '../../assets/ReactLogo.png'
import LiveLogo from '../../assets/live.png'
import Calendar from '../../assets/calendar.png'
import Clock from '../../assets/clock.png'

const Courses = () => {
  return (
    <div className={style.container}>
      <div className={style.course}>
        <h1>Master <span className={style.topic}>React</span></h1>
        <img width={'70px'} src={ReactLogo} alt='React Logo' />
      </div>
      <div className={style.main}>
          
          <div className={style.box}>
            <div style={{display: 'flex', gap: '20px'}}>
              <div style={{padding: '10px', borderLeft: '4px solid var(--sec-color)'}}><h3>Duration<sup>*</sup></h3><p style={{fontFamily:'Gilroy-Light, sans-serif'}}> 1 week</p></div>
              <div style={{padding: '10px', borderLeft: '4px solid var(--sec-color)'}}><h3>Price<sup>*</sup></h3><p style={{fontFamily:'Gilroy-Light, sans-serif'}}><s>&#8377;2500/-</s> &#8377;0/-</p></div>
              <div style={{padding: '10px', borderLeft: '4px solid var(--sec-color)', background: 'linear-gradient(to right, #10a37e56, white )'}}><div className={style.registerBtn}><button><b>Register Now</b></button></div></div>
            </div>
            <h1 className={style.deliverables}>Deliverables</h1>
            <h2>Basic Plan</h2>
            <ul style={{fontFamily:'Gilroy-Light, sans-serif'}}>
              <li>Free live session on 21<sup>st</sup> Feb</li>
              <li>Roadmap to advance React.js project</li>
            </ul>
            <h2>Premium</h2>
            <ul style={{fontFamily:'Gilroy-Light, sans-serif'}}>
              <li>1:1 Guidance and Mentorship for 7 days</li>
              <li>Project Review</li>
              <li>Referral for placement</li>
            </ul>
          </div>

          <div className={style.box}>
            <div className={style.title1}>
              <img src={LiveLogo} alt='Live Logo' width={'50px'} height={'50px'} className={style.icon} />
              <h1>Free <br/><span style={{fontFamily:'Gilroy-Light, sans-serif'}}>Master Class</span></h1>
            </div>
            <div className={style.title1}>
              <img src={Calendar} alt='Calendar' width={'30px'} className={style.icon} /> 
              <h1 style={{fontFamily:'Gilroy-Light, sans-serif', fontSize: 'Medium'}}>21<sup>st</sup> to 28<sup>th</sup> Feb, 2024</h1>
              <img src={Clock} alt='Calendar' width={'30px'} className={style.icon} /> 
              <h1 style={{fontFamily:'Gilroy-Light, sans-serif', fontSize: 'Medium'}}>9 PM - 11 PM </h1>
            </div>
            <div className={style.title2}>
              <h1>By Sheshant Manure</h1>
              <h4 style={{fontFamily:'Gilroy-Light, sans-serif'}}>Freelance Developer, 2+ Yrs Exp</h4>
            </div>
            <div>
              <h3 style={{fontFamily:'Gilroy-Light, sans-serif', textAlign: 'center', padding: '5px', border: '4px solid var(--sec-color)'}}>For Working Professionals</h3>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Courses