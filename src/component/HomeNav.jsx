import React, { useEffect, useState } from 'react';
import style from '../css/nav.module.css';
import logo from '../assets/logo.png';
import arrow from '../assets/right.png';
import LetMeet from "../assets/LetMeet.png";
import client from "../assets/clientProtal.png";
import { Link } from 'react-router-dom';
import Booking from './Booking';

const HomeNav = () => {
    const [hideHeader, setHideHeader] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [showBooking, setShowBooking] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                setHideHeader(true);
            } else {
                setHideHeader(false);
            }
            setLastScrollY(currentScrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const toggleBooking = () => {
        setShowBooking(prev => !prev);
    };

    return (
        <>
            <div className={`${style.homeNav} ${hideHeader ? style.hide : ''}`}>
                <Link to="/"> <img className={style.logo} src={logo} alt="logo" /></Link>

                {/* SERVICES with toggle logic */}
                <div
                    onMouseEnter={toggleBooking}
                    style={{ position: 'relative', cursor: 'pointer' }}
                >
                    <span className={style.navItem}>
                        SERVICES{" "}
                        <img
                            src={arrow}
                            alt="arrow"
                            className={`${style.arrowIcon} ${showBooking ? style.rotate : ''}`}
                        />
                    </span>
                </div>

                <Link to="/carrer" className={style.navItem}>CARRERS</Link>
                <Link to="/payout" className={style.navItem}>PAYOUT</Link>
                <Link to="/resource" className={style.navItem}>RESOURCES <img src={arrow} alt="arrow" /></Link>
                <Link to="/contact" className={style.navItem}>CONTACT US</Link>
                <Link to="/about" className={style.navItem}>ABOUT US</Link>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <button style={{
                        background: '#f7fbff',
                        border: 'none',
                        borderRadius: 42,
                        color: '#08306b',
                        padding: 10,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: 5
                    }}>
                        <img src={LetMeet} alt="arrow" />
                        <p>LET’S MEET!</p>
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

            {/* Booking section */}
            {showBooking && (
                <div
                    onMouseLeave={() => setShowBooking(false)}
                >
                    <Booking />
                </div>
            )}
        </>
    );
};

export default HomeNav;
