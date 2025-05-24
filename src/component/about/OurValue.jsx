

import React from 'react'

import style from '../../css/about/about.module.css'
import mission from '../../assets/about/mission.png'
import vision from '../../assets/about/binoculars.png'
import checkmark from '../../assets/about/checkmark.png'


export const OurValueCard = ({ img, tittle }) => {
    return (
        <div className={style.OurValueCard}>

            <button className={style.OurValueCardButton}>
                <img src={img} alt="" />
                <h3 className={style.OurValueCardTitle}>{tittle}</h3>
            </button>


            <div className={style.OurValueCardContent}>
                <div className={style.OurValueCardContentItem}>
                    <img src={checkmark} alt="" />
                    <p className={style.OurValueCardContentItemText}>Deliver full accounting services that help clients flourish</p>

                </div>
                <div className={style.OurValueCardContentItem}>
                    <img src={checkmark} alt="" />
                    <p className={style.OurValueCardContentItemText}>Deliver full accounting services that help clients flourish</p>

                </div>
                <div className={style.OurValueCardContentItem}>
                    <img src={checkmark} alt="" />
                    <p className={style.OurValueCardContentItemText}>Deliver full accounting services that help clients flourish</p>

                </div>

            </div>
        </div>
    )
}

const OurValue = () => {
    return (
        <div className={style.OurValue}>
            <h2 className={style.OurValueTitle}>Our Values</h2>
            <OurValueCard img={mission} tittle="Mission" />
            <OurValueCard img={vision} tittle="Vission" />

        </div>
    )
}

export default OurValue