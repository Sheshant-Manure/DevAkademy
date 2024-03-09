import React, { useState } from 'react'
import style from './Courses.module.css'
import ReactLogo from '../../assets/ReactLogo.png'
import LiveLogo from '../../assets/live.png'
import Calendar from '../../assets/calendar.png'
import Clock from '../../assets/clock.png'
import Close from '../../assets/cross.png'
import ServerURL from '../../config/serverURL'

const Courses = () => {

  const [modal, setModal] = useState(false)  
  const [razorData, setRazorData] = useState({});
  const [existingCustomer, setExistingCustomer] = useState(false);
  const [customer, setCustomer] = useState({})
  const [QRCode, setQRCode] = useState(false);

  const toggleModal = () => {
    checkCustomer();
    setModal(!modal);
  }

  const checkCustomer = async () => {
    try{
        const response = await fetch(`${ ServerURL }/razorpay/customer/check-customer`, { credentials: 'include' });
        const data = await response.json()
        setExistingCustomer(data.existingCustomer);
        setCustomer({
          id: data.customer.customer.id,
          name: data.customer.customer.name,
          contact: data.customer.customer.contact,
          email: data.customer.customer.email
        })
        console.log(customer);
    }
    catch (err) {
      console.log(err);
    }
  }

  const createRazorpayCustomer = async (e) => {
    e.preventDefault();
    await fetch(`${ServerURL}/razorpay/customer/create-customer`, {
      credentials: 'include',
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(
        { 
          name: `${e.target.fname.value} ${e.target.lname.value}`,
          contact: `(+${e.target.country_code.value}) ${e.target.contact.value}`,
          email: e.target.email.value,
          course: e.target.course.value
        })
    });
    checkCustomer();
  }

  const createRazorpayOrder = async (e) => {
    e.preventDefault();
    const orderResponse = await fetch(`${ServerURL}/razorpay/order/create-order`, {
      credentials: 'include',
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        amount: e.target.amount.value * 100,
        currency: e.target.currency.value,
        receipt: `${Date.now()}${razorData[`customer_id`]}`,
       })
    });
    const orderData = await orderResponse.json();
    console.log('Order details:', orderData);
    createQRCode(e);
  }

  const createQRCode = async (e) => {
    e.preventDefault();
    const response = await fetch(`${ ServerURL }/razorpay/qrcode/create-qrcode`, {
      credentials: 'include',
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
          name: `${ customer.name } - ${ e.target.course.value }`,
          description: `Payment Fee for ${ e.target.course.value }`,
          payment_amount: e.target.amount.value * 100,
          customer_id: customer.id,
         })
      });
      const qrData = await response.json();
      console.log(qrData);
      setQRCode(qrData.image_url);
  }

  return (
    <div className={style.container}>
      { modal && (
            <div className={style.modal}>
                <div className={style.overlay}>
                    <div className={style.modalContent}>
                      <div className={style.row}>
                        <div className={style.column}>
                          <form className={style.razorpayForm} onSubmit={ !existingCustomer ? createRazorpayCustomer : createRazorpayOrder }>
                              
                              <h2>Personal Details</h2>
                              {
                                existingCustomer ? 
                                <div className={style.personalDetails}>
                                  <h4>{ customer.name }</h4>
                                  <h4>{ customer.contact }</h4>
                                  <h4>{ customer.email }</h4>
                                </div>:
                                <>
                                <input type='text' name='fname' placeholder='First Name' required />
                                <input type='text' name='lname' placeholder='Last Name' required />
                                <div style={{position: 'relative'}}>
                                  <input style={{position: 'absolute', width: '2rem', textAlign: 'center'}} type='number' name='country_code' value={91} placeholder='91' readOnly />
                                  <input style={{marginLeft: '2.5rem'}} type='number' name='contact' placeholder='Phone Number' required />
                                </div>
                                <input type='email' name='email' placeholder='E-mail' required />
                                </>
                              }
                              
                              <h2>Order details</h2>
                              <label>Amount</label>
                              <input className={style.order} type='number' name='amount' value={199.00} readOnly /> 
                              <input className={style.order} type='text' name='currency' value={'INR'} readOnly /> 
                              <div className={style.dropNbtn}>
                              <select name='course'>
                                <option value={'React Masterclass'}>React Masterclass</option>
                                <option value={'Node Masterclass'}>Node Masterclass</option>
                              </select>
                              <button type='submit'>Buy Now</button>
                              </div>
                            </form>
                        </div>
                        <div className={style.column}>
                          <div className={style.QRCode}>
                          {
                            QRCode && <img src={ QRCode } alt='QR Code' />
                          }
                          </div>
                        </div>
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