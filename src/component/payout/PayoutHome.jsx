import React from 'react';
import HomeNav from '../HomeNav';
import heroImage from '../../assets/payout/PayoutHero.png';

const PayoutHome = () => {
    return (
        <div style={{ display: 'flex', width: '100vw', height: '100vh', background: '#f7fbff' }}>
            {/* Left Section */}
            <div style={{
                width: '70%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                paddingLeft: '5%',
                paddingRight: '5%'
            }}>
                <div style={{ width: '100%' }}>
                    <button style={{
                        fontFamily: 'Ubuntu',
                        fontSize: 12,
                        fontWeight: 700,
                        color: '#08306b',
                        lineHeight: '30px',
                        width: "fit-content",
                        background: "#E9F2FC",
                        padding: "10px 40px",
                        borderRadius: '10px',
                        border: 'none',
                        cursor: 'pointer',
                        margin: 0
                    }}>
                        Payroll
                    </button>
                    <h2 style={{
                        fontFamily: 'Ubuntu',
                        fontSize: 40,
                        fontWeight: 700,
                        color: '#08306b',
                        lineHeight: '50px',
                        marginTop: '20px'
                    }}>
                        Accurate and Compliant
                        <br />
                        Payroll Services
                    </h2>
                    <p style={{
                        fontFamily: "Inter",
                        fontSize: 20,
                        fontWeight: 400,
                        color: '#08519C',
                        marginTop: '20px'
                    }}>
                        Whether you're a solo entrepreneur or managing a team, our payroll services make paydays easy, keep you compliant, and simplify year-end tax filings
                    </p>
                </div>
            </div>

            {/* Right Section */}
            <div style={{
                width: '30%',
                height: '100%',
                background: '#08306b',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative'
            }}>
                {/* Hero Image Container with Corner Borders */}
                <div style={{
                    position: 'relative',
                    width: '300px',
                    height: '300px'
                }}>
                    {/* Top Left Border */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '60px',
                        height: '60px',
                        borderTop: '4px solid #fff',
                        borderLeft: '4px solid #fff',
                        borderTopLeftRadius: '12px'
                    }} />

                    {/* Bottom Right Border */}
                    <div style={{
                        position: 'absolute',
                        bottom: 0,
                        right: 0,
                        width: '60px',
                        height: '60px',
                        borderBottom: '4px solid blue',
                        borderRight: '4px solid white',
                        borderBottomRightRadius: '12px'
                    }} />

                    {/* Hero Image */}
                    <img
                        src={heroImage}
                        alt="hero"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                            zIndex: 1
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default PayoutHome;
