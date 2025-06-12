import React from 'react';
import heroImage from '../../assets/about/aboutHome.png';
import style from '@css/about/about.module.css'

const PayoutHome = () => {
    return (
        <div style={{
            width: '100vw',
            height: '100vh',
            background: '#f7fbff',
            display: 'flex',
            flexDirection: 'row'
        }}>
            {/* Left Section - 70% */}
            <div style={{
                width: '70%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                paddingLeft: '5%',
                paddingRight: '5%'
            }}>
                <div style={{
                    width: '84%'
                }}>
                    <p style={{
                        fontFamily: 'Ubuntu',
                        fontSize: 12,
                        fontWeight: 700,
                        color: '#08306b',
                        lineHeight: '30px',
                        width: "fit-content",
                        background: "#E9F2FC",
                        padding: "10px 40px",
                        borderRadius: "10px"
                    }}>
                        About Us
                    </p>
                    <h2 style={{
                        fontFamily: 'Ubuntu',
                        fontSize: 40,
                        fontWeight: 700,
                        color: '#08306b',
                        lineHeight: '50px',
                        marginTop: '20px'
                    }}>
                        We're passionate about<br />
                        small business success<br />
                        because we live it every day.
                    </h2>
                    <p style={{
                        fontFamily: "Inter",
                        fontSize: 20,
                        fontWeight: 400,
                        color: '#08519C',
                        marginTop: '20px'
                    }}>
                        We treat your business like our own, delivering personalized service that ensures your financials are always accurate and up-to-date. You're not just a client—you're a partner in success.
                    </p>
                    <button style={{
                        background: '#026331',
                        color: 'white',
                        padding: '10px 40px',
                        borderRadius: '50px',
                        marginTop: 30,
                        border: 'none',
                        fontWeight: 'bold',
                        fontSize: '16px',
                        cursor: 'pointer'
                    }}>
                        Book an introductory call
                    </button>
                </div>
            </div>

            {/* Right Section - 30% */}
            <div style={{
                width: '30%',
                height: '100%',
                background: '#08306B',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative'
            }}>
                {/* Hero Image with Corner Borders */}
                <div
                className={style.aboutImageContainer}>

                    {/* Hero Image */}
                    <img
                    className={style.aboutImage}
                        src={heroImage}
                        alt="hero"
                    />
                </div>
            </div>
        </div>
    );
};

export default PayoutHome;
