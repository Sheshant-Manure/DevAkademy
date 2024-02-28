import React from 'react'
import style from './Footer.module.css';
import Logo from '../../assets/logo.svg';
import About from '../../pages/About/About';
import LinkedinLogo from '../../assets/linkedin.png'
import GithubLogo from '../../assets/github.png'

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
        <div className={style.contact}>
            <div style={{textAlign: 'right'}}>
                <h5>2024 &copy; DevAkademy Pvt Ltd</h5>
                <h5><a style={{color: 'white', textDecoration: 'none'}} href='/terms-of-service'>Terms of Service</a> | <a style={{color: 'white', textDecoration: 'none'}} href='/privacy-policy'>Privacy Policy</a></h5>
            </div>
            <div className={style.map}>
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
        </div>
        <div className={style.socials}>
            <a href='https://www.linkedin.com/in/msheshant/' target='_blank' rel='noopener noreferrer'><img width={'32px'} src={LinkedinLogo} alt='Linkedin Logo' /><p>Sheshant Manure</p></a>
            <a href='https://github.com/Sheshant-Manure/DevAkademy' target='_blank' rel='noopener noreferrer'><img width={'32px'} src={GithubLogo} alt='GitHub Logo' /><p>DevAkademy</p></a>
        </div>
    </footer>
  )
}

export default Footer