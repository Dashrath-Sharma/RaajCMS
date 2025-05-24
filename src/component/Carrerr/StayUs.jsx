import React from 'react'
import style from '../../css/Carreer/StayUs.module.css'
import msg from '../../assets/carrer/msg.png'
import Indded from '../../assets/carrer/Indeed.png'
import linkedIn from '../../assets/carrer/linkedIn.png'
import glassdoor from '../../assets/carrer/glassdoor.png'

const StayUs = () => {
    return (
        <div className={style.stayUsContainer}>
            <div className={style.stayUsImage}>
                <img src={msg} alt="stayUs" />
            </div>
            <h1 className={style.stayUsTitle}>Stay Us</h1>
            <p className={style.stayUsText}>Stay Updated, Stay Compliant
                <br />
                Navigate Numbers with Confidence!</p>
            <button className={style.stayUsButton}>FOLLOW US</button>
            <div className={style.cardContainer}>
                <div className={style.card}>
                    <img src={Indded} alt="stayUs" className={style.cardImage} />
                    <h3 className={style.cardTitle}>Inddeed</h3>

                </div>
                <div className={style.card}>
                    <img src={linkedIn} alt="stayUs" className={style.cardImage} />
                    <h3 className={style.cardTitle}>LinkedIN</h3>

                </div>
                <div className={style.card}>
                    <img src={glassdoor} alt="stayUs" className={style.cardImage} />
                    <h3 className={style.cardTitle}>Glassdoor</h3>

                </div>

            </div>

        </div>
    )
}

export default StayUs