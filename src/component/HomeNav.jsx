import React from 'react'
import style from '../css/nav.module.css'
import logo from '../assets/logo.png'
import arrow from '../assets/right.png'
const HomeNav = () => {
    return (
        <div className={style.homeNav}>
            <img className={style.logo} src={logo} alt="logo" />
            <div className={style.navItem}>
                SERVICES
                <img src={arrow} alt="arrow" />
            </div>
            <div className={style.navItem}>
                CONTACT US
            </div>
            <div className={style.navItem}>
                CARRERS
            </div>
            <div className={style.navItem}>
                RESOURCES
                <img src={arrow} alt="arrow" />
            </div>
            <div className={style.navItem}>
                CARRERS
            </div>
            <div className={style.navItem}>
                ABOUT US
            </div>




        </div>
    )
}

export default HomeNav