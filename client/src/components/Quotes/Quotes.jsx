import React, { useEffect, useState } from 'react'
import style from './Quotes.module.css'
import { quotations } from './quotations'

const Quotes = () => {
    const [quote, setQuote] = useState("Welcome to DevAcademy")
    const [showClass, setShowClass] = useState(true)

    useEffect(() => {
        let i = 0;
        const intervalId = setInterval(() => {
            if (i === quotations.length) i = 0
            setQuote(quotations[i])
            i++;
            setShowClass(true)
            setTimeout(() => {
                setShowClass(false)
            }, 4000)
        }, 5000)
        return () => clearInterval(intervalId)
    }, [])

    return (
        <div className={style.container}>
            <blockquote className={`${style.fadeIn} ${ showClass ? style.show : ''}`}> &lt; {quote} /&gt; </blockquote>
        </div>
    );
};

export default Quotes
