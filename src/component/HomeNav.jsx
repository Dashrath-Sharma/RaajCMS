import React, { useEffect, useState } from 'react';
import style from '@css/nav.module.css';
import logo from '@assets/logo.png';
import arrow from '@assets/right.png';
import LetMeet from "@assets/LetMeet.png";
import client from "@assets/clientProtal.png";
import { Link } from 'react-router-dom';
import Booking from './Booking';

const HomeNav = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className={style.navPlaceholder} />
            <div className={`${style.homeNav} ${isScrolled ? style.scrolled : ''}`}>
                <div className={style.navContainer}>
                    <Link to="/">
                        <img className={style.logo} src={logo} alt="logo" />
                    </Link>
                    <div className={`${style.navContainer} ${style.justifyCenter}`}>
                    {/* SERVICES */}
                    <div className={style.navDropdown}>
                        <span className={style.navItem}>
                            SERVICES{' '}
                            <img
                                src={arrow}
                                alt="arrow"
                                className={style.arrowIcon}
                            />
                        </span>
                        <div className={style.dropdownContent}>
                            <Booking />
                        </div>
                    </div>

                    <Link to="/carrer" className={style.navItem}>CARRERS</Link>
                    <Link to="/payout" className={style.navItem}>PAYOUT</Link>

                    {/* RESOURCES */}
                    <div className={style.navDropdown}>
                        <span className={style.navItem}>
                            RESOURCES{' '}
                            <img
                                src={arrow}
                                alt="arrow"
                                className={style.arrowIcon}
                            />
                        </span>
                        <div className={style.dropdownContent}>
                            <Booking />
                        </div>
                    </div>

                    <Link to="/contact" className={style.navItem}>CONTACT US</Link>
                    <Link to="/about" className={style.navItem}>ABOUT US</Link>
                    </div>

                </div>
                <div className={style.navButtons}>
                    <button className={style.navButton}>
                        <img src={LetMeet} alt="Let's Meet" />
                        <p>LET'S MEET!</p>
                    </button>
                    <button className={`${style.navButton} ${style.navButtonGreen}`}>
                        <img src={client} alt="Client Portal" />
                        <p>CLIENT PORTAL</p>
                    </button>
                    </div>
            </div>
        </>
    );
};

export default HomeNav;
