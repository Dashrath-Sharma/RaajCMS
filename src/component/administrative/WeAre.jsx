
import React from 'react'
import style from "../../css/administrative/weAre.module.css"
import image from "../../assets/administatrative/WeAreImage.png"

const WeAre = () => {
    return (
        <div className={style.weAreContainer}>

            <div className={style.imageContainer}>
                <img src={image} alt="We Are" className={style.image} />
            </div>
            <div className={style.textContainer}>
                <h2 className={style.text}>Where we are?</h2>
                <p className={style.para}>Bean Counter is based in California and proudly provides accounting and administrative support to businesses across the state and throughout the U.S. Whether you're located in Los Angeles, San Diego, San Francisco, or anywhere in between, our team delivers reliable, responsive service tailored to your needs.</p>
                <button className={style.btn}> Talk to an Advisor</button>
            </div>
        </div>
    )
}

export default WeAre