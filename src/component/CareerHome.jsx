import React from 'react';
import style from '../css/Carreer/careerHero.module.css';
import logo from '../assets/logo.png';
import arrow from '../assets/right.png';
import heroImage from '../assets/textCard/career.png'; // Placeholder for career hero image

const CareerHome = () => {
    return (
        <div style={{ display: 'flex', width: '100vw', height: '100vh', background: '#f7fbff' }}>
            <div style={{ width: '70%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#fff' }}>
                <div className={style.careerHomeNav}>
                    <img className={style.careerLogo} src={logo} alt="logo" />
                    <div className={style.careerNavItem}>
                        JOB OPENINGS
                        <img src={arrow} alt="arrow" />
                    </div>
                    <div className={style.careerNavItem}>INTERNSHIPS</div>
                    <div className={style.careerNavItem}>LIFE AT BEAN COUNTER</div>
                    <div className={style.careerNavItem}>APPLY NOW</div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingBottom: 50 }}>
                    <div style={{ width: '70%' }}>
                        <h2 style={{ fontFamily: 'Ubuntu', fontSize: 40, fontWeight: 700, color: '#08306b', lineHeight: '50px' }}>
                            Join Our <span style={{ color: '#026331', marginInline: 10 }}>Career</span> Team<br />
                            and Grow With Us
                        </h2>
                        <p style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: 22, lineHeight: '35px', color: '#08306b', marginTop: 20 }}>
                            Discover opportunities to build your future with Bean Counter. We value passion, growth, and teamwork. Explore our open positions and become part of our story.
                        </p>
                        <button style={{ background: '#fff', border: '1px solid #026331', borderRadius: 50, color: '#026331', padding: '15px 25px', fontSize: 16, marginTop: 20, width: '60%' }}>
                            View Open Positions
                        </button>
                        <button style={{ background: '#026331', border: 'none', borderRadius: 50, color: '#fff', padding: '15px 25px', fontSize: 16, marginTop: 20, width: '60%' }}>
                            Apply for Internship
                        </button>
                    </div>
                </div>
            </div>
            <div style={{ width: '30%', background: '#08306b', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', position: 'relative' }}>
                <div style={{ marginTop: 40, display: 'flex', justifyContent: 'space-between', width: '90%' }}>
                    <button style={{ background: '#f7fbff', border: 'none', borderRadius: 42, color: '#08306b', padding: 10, display: 'flex', alignItems: 'center', gap: 10 }}>
                        <img src={arrow} alt="arrow" />
                        <p>JOIN US</p>
                    </button>
                    <button style={{ background: '#026331', border: 'none', borderRadius: 42, color: '#fff', padding: 10, display: 'flex', alignItems: 'center', gap: 10 }}>
                        <img src={arrow} alt="arrow" />
                        <p>REFER A FRIEND</p>
                    </button>
                </div>
                <div style={{ position: 'relative', height: '80%', width: '90%', marginTop: 20, display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
                    <div style={{ background: '#e6f0fb', borderRadius: '40px 0 0 0', width: '100%', height: '100%', overflow: 'hidden', border: '4px solid #ffffff', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}>
                        <img src={heroImage} alt="career" style={{ maxHeight: '100%', objectFit: 'cover', objectPosition: 'bottom' }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CareerHome; 