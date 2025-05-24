import React, { useEffect, useState } from 'react';
import style from '../css/nav.module.css';
import logo from '../assets/logo.png';
import arrow from '../assets/right.png';
import LetMeet from "../assets/LetMeet.png";
import client from "../assets/clientProtal.png";

const HomeNav = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`${style.homeNav} ${isScrolled ? style.scrolled : ''}`}>
            <img className={style.logo} src={logo} alt="logo" />
            <div className={style.navItem}>SERVICES <img src={arrow} alt="arrow" /></div>
            <div className={style.navItem}>CONTACT US</div>
            <div className={style.navItem}>CARRERS</div>
            <div className={style.navItem}>RESOURCES <img src={arrow} alt="arrow" /></div>
            <div className={style.navItem}>CARRERS <img src={arrow} alt="arrow" /></div>
            <div className={style.navItem}>ABOUT US</div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <button style={{
                    background: '#f7fbff',
                    border: 'none',
                    borderRadius: 42,
                    color: '#08306b',
                    padding: 10,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 5
                }}>
                    <img src={LetMeet} alt="arrow" />
                    <p>JOIN US</p>
                </button>
                <button style={{
                    background: '#026331',
                    border: 'none',
                    borderRadius: 42,
                    color: '#fff',
                    padding: 10,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 5,
                    marginLeft: 10
                }}>
                    <img src={client} alt="arrow" />
                    <p>CLIENT PORTAL</p>
                </button>
            </div>
        </div>
    );
};

export default HomeNav;
