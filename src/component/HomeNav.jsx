import React, { useEffect, useRef, useState } from 'react';
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
    const [hoveredMenu, setHoveredMenu] = useState(null); // 'service' | 'resource' | null
    const bookingRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setHideHeader(currentScrollY > lastScrollY && currentScrollY > 50);
            setLastScrollY(currentScrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                bookingRef.current &&
                !bookingRef.current.contains(event.target) &&
                !event.target.closest(`.${style.navItem}`)
            ) {
                setShowBooking(false);
                setHoveredMenu(null);
            }
        };
        if (showBooking) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [showBooking]);

    const handleMouseEnter = (menu) => {
        setHoveredMenu(menu);
        setShowBooking(true);
    };

    return (
        <>
            <div className={`${style.homeNav} ${hideHeader ? style.hide : ''}`}>
                <Link to="/">
                    <img className={style.logo} src={logo} alt="logo" />
                </Link>

                {/* SERVICES */}
                <div
                    onMouseEnter={() => handleMouseEnter('service')}
                    style={{ position: 'relative', cursor: 'pointer' }}
                >
                    <span className={style.navItem}>
                        SERVICES{' '}
                        <img
                            src={arrow}
                            alt="arrow"
                            className={`${style.arrowIcon} ${hoveredMenu === 'service' ? style.rotate : ''}`}
                        />
                    </span>
                </div>

                <Link to="/carrer" className={style.navItem}>CARRERS</Link>
                <Link to="/payout" className={style.navItem}>PAYOUT</Link>

                {/* RESOURCES */}
                <div
                    onMouseEnter={() => handleMouseEnter('resource')}
                    style={{ position: 'relative', cursor: 'pointer' }}
                >
                    <span className={style.navItem}>
                        RESOURCES{' '}
                        <img
                            src={arrow}
                            alt="arrow"
                            className={`${style.arrowIcon} ${hoveredMenu === 'resource' ? style.rotate : ''}`}
                        />
                    </span>
                </div>

                <Link to="/contact" className={style.navItem}>CONTACT US</Link>
                <Link to="/about" className={style.navItem}>ABOUT US</Link>

                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <button style={{
                        background: '#f7fbff', border: 'none', borderRadius: 42, color: '#08306b',
                        padding: 10, display: 'flex', alignItems: 'center', gap: 5
                    }}>
                        <img src={LetMeet} alt="arrow" />
                        <p>LET’S MEET!</p>
                    </button>
                    <button style={{
                        background: '#026331', border: 'none', borderRadius: 42, color: '#fff',
                        padding: 10, display: 'flex', alignItems: 'center', gap: 5, marginLeft: 10
                    }}>
                        <img src={client} alt="arrow" />
                        <p>CLIENT PORTAL</p>
                    </button>
                </div>
            </div>

            {/* Booking section (outside click closes it) */}
            {showBooking && (
                <div ref={bookingRef}>
                    <Booking />
                </div>
            )}
        </>
    );
};

export default HomeNav;
