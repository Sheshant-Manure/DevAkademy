import React from 'react';
import style from './About.module.css';

const About = () => {
  return (
    <div className={style.container}>
        <div>
            <h2 style={{textAlign: 'center', padding: '15px'}}>Our Mission</h2>
            <p style={{fontSize: 'small', lineHeight: '20px'}}>Devakademy empowers aspiring developers with practical knowledge for success in the tech industry. We provide a transformative, hands-on learning experience to build skills, confidence, and real-world project expertise sought by employers.</p>
        </div>
    </div>
  );
};

export default About;