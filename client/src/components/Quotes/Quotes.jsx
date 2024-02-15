import React, { useEffect, useState } from 'react'
import style from './Quotes.module.css'
import { quotations } from './quotations'

const Quotes = () => {
    const [quote, setQuote] = useState(quotations[0])

    useEffect(() => {
        let i = 0;
        const intervalId = setInterval(() => {
            if (i === quotations.length) i = 0
            setQuote(quotations[i])
            i++;
            const quoteElement = document.querySelector(`.${style.fadeIn}`)
            quoteElement.classList.add(style.show)
            setTimeout(() => {
                quoteElement.classList.remove(style.show)
            }, 4000)
        }, 5000)
        return () => clearInterval(intervalId)
    }, [])

    return (
        <div className={style.container}>
            <quote className={style.fadeIn}> &quot; {quote} &quot; </quote>
        </div>
    );
};

export default Quotes
