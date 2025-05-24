


import React from 'react'
import style from '../../css/payout/greenBox.module.css'
import like from '../../assets/payout/lik.png'

export const GreenBox = () => {
    return (
        <div className={style.GreenBoxContainer}>
            <h2 className={style.GreenBoxHead}>HEAR FROM OUR CLIENTS</h2>
            <p className={style.GreenBoxText}>“Switching from our previous payroll service was incredibly smooth. Whenever we had questions or needed assistance, our representative responded promptly with effective solutions. I highly recommend them to anyone in search of a reliable payroll service provider.”</p>
            <div className={style.GreenBoxImage}>
                <img src={like} alt="image" />
                <p className={style.GreenBoxLikes} >JAKE WHITEFOOT</p>
            </div>


        </div>
    )
}
