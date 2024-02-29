import React from 'react'
import style from './Footer.module.css';
import Logo from '../../assets/logo.svg';
import About from '../../pages/About/About';
import LinkedinLogo from '../../assets/linkedin.png'
import GithubLogo from '../../assets/github.png'
import SubscribeLogo from '../../assets/subscribe.png'
import EmailLogo from '../../assets/email.png'

const Footer = () => {
  return (
    <footer>
        <About />
        <div className={style.logo}>
            <img width={'100%'} src={Logo} alt="Logo" />
            <div style={{textAlign: 'center', margin: '20px', position: 'absolute', left: '30%'}}>
                <h1>DevAkademy</h1>
                <h3>Empowering Developers Through Hands-On Learning</h3>
            </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '300px', flexDirection:'column', position: 'absolute', left: '30%', top: '50%'}}>
            <div style={{display: 'flex', alignItems: 'center'}}>
                <h2 style={{margin: '20px'}}>Get<br/>Latest<br/>Blogposts & Course<br/>Updates!</h2>
                <form onSubmit={(e)=>e.preventDefault()} className={style.newsletter} style={{margin: '30px'}}>
                    <input type='text' placeholder='Your Full Name'/><br/>
                    <input type='email' placeholder='E-mail' /><br/>
                    <button className={style.subscribe}><img width={'24px'} src={SubscribeLogo} alt='Subscribe' /> Subscribe Newsletter</button>
                </form>
            </div>
            <div style={{textAlign: 'center'}}>
                <h5>{ new Date().getFullYear() } &copy; DevAkademy Pvt Ltd</h5>
                <small><a style={{color: 'white', textDecoration: 'none'}} href='/terms-of-service'>Terms of Service</a> | <a style={{color: 'white', textDecoration: 'none'}} href='/privacy-policy'>Privacy Policy</a></small>
            </div>
        </div>
        <div className={style.contact}>
            <div>
                <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3808.3394595704785!2d78.4842396106612!3d17.347391083464284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDIwJzUwLjYiTiA3OMKwMjknMTIuNiJF!5e0!3m2!1sen!2sin!4v1709136621160!5m2!1sen!2sin"
                    width="300"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </div><br/>
        <div className={style.socials}>
            <a href='https://www.linkedin.com/in/msheshant/' target='_blank' rel='noopener noreferrer'><img width={'32px'} src={LinkedinLogo} alt='Linkedin Logo' /><p>Sheshant Manure</p></a>
            <a href='https://github.com/Sheshant-Manure/DevAkademy' target='_blank' rel='noopener noreferrer'><img width={'32px'} src={GithubLogo} alt='GitHub Logo' /><p>DevAkademy</p></a>
            <a href='/'><img width={'32px'} src={EmailLogo} alt='E-mail' /><p>support@devakademy.com</p></a>
        </div>
    </footer>
  )
}

export default Footer