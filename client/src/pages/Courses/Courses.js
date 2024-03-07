import React, { useState } from 'react'
import style from './Courses.module.css'
import ReactLogo from '../../assets/ReactLogo.png'
import LiveLogo from '../../assets/live.png'
import Calendar from '../../assets/calendar.png'
import Clock from '../../assets/clock.png'
import Close from '../../assets/cross.png'

const Courses = () => {

  const [modal, setModal] = useState(false)  
  const [razorData, setRazorData] = useState({});
  const toggleModal = () => setModal(!modal);

  const createRazorpayCustomer = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:8080/razorpay/customer/create-customer', {
      credentials: 'include',
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(
        { 
          name: `${e.target.fname.value} ${e.target.lname.value}`,
          contact: e.target.contact.value,
          email: e.target.email.value,
          course: e.target.course.value
        })
    });
    const data = await response.json();
    const customer = { 'customer_id' : data.id }
    setRazorData((prev)=>({...prev, customer}));
    console.log(razorData);
  }

  return (
    <div className={style.container}>
      { modal && (
            <div className={style.modal}>
                <div className={style.overlay}>
                    <div className={style.modalContent}>
                      <div className={style.row}>
                        <div className={style.column}>
                          <form className={style.razorpayForm} onSubmit={createRazorpayCustomer}>
                              
                              <h2>Personal Details</h2>
                              <input type='text' name='fname' placeholder='First Name' />
                              <input type='text' name='lname' placeholder='Last Name' />
                              <input type='text' name='contact' placeholder='Phone Number' />
                              <input type='email' name='email' placeholder='E-mail' />
                              
                              <h2>Order details</h2>
                              <label>Amount</label>
                              <input className={style.order} type='number' name='amount' value={199.00} readOnly /> 
                              <input className={style.order} type='text' name='currency' value={'INR'} readOnly /> 
                              <div className={style.dropNbtn}>
                              <select name='course'>
                                <option value={'React Masterclass'}>React Masterclass</option>
                                <option value={'Node Masterclass'}>Node Masterclass</option>
                              </select>
                              <button>Submit</button>
                              </div>
                            </form>
                        </div>
                        <div className={style.column}></div>
                      </div>               
                    </div>
                    <button className={style.closeModalBtn} onClick={toggleModal}><img src={ Close } alt='Close' /></button>
                </div>
            </div>) 
        }
      <div className={style.course}>
        <h1>Master <span className={style.topic}>React</span></h1>
        <img width={'70px'} src={ReactLogo} alt='React Logo' />
      </div>
      <div className={style.main}>
          
          <div className={style.box}>
            <div style={{display: 'flex', gap: '20px'}}>
              <div style={{padding: '10px', borderLeft: '4px solid var(--sec-color)'}}><h3>Duration<sup>*</sup></h3><p style={{fontFamily:'Gilroy-Light, sans-serif'}}> 1 week</p></div>
              <div style={{padding: '10px', borderLeft: '4px solid var(--sec-color)'}}><h3>Price<sup>*</sup></h3><p style={{fontFamily:'Gilroy-Light, sans-serif'}}><s>&#8377;2500/-</s> &#8377;1/-</p></div>
            </div>
            <h1 className={style.deliverables}>Deliverables</h1>
            <div className={style.plans}>
            <ul style={{fontFamily:'Gilroy-Light, sans-serif'}}>
              <h2>Basic Plan</h2>
              <li>Build an admin dashboard for data visualization.</li>
              <li>Free live session on 21<sup>st</sup> Feb.</li>
              <li>Roadmap to advance React.js projects.</li>
            </ul>
            <ul style={{fontFamily:'Gilroy-Light, sans-serif'}}>
              <h2>Premium</h2>
              <li>1:1 Guidance and Mentorship for 7 days</li>
              <li>Project Review</li>
              <li>Referral for placement</li>
            </ul>
            </div>
            <div style={{padding: '10px', backgroundColor: '#10a37e56', width: '95%'}}>
              <div className={style.registerBtn}>
                <h3>What are you waiting for? Hurry Up! </h3>
                <button onClick={toggleModal}>Register Now</button>
              </div>
            </div>
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