import React from 'react';
import HomeNav from '../HomeNav';
import heroImage from '../../assets/about/aboutHome.png';
import LetMeet from "../../assets/LetMeet.png";
import client from "../../assets/clientProtal.png";

const PayoutHome = () => {
    return (
        <div style={{ display: 'flex', width: '100vw', height: '100vh', background: '#f7fbff' }}>
            {/* Left Section */}
            <div style={{ width: '70%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', background: '#fff' }}>
                <HomeNav />
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingBottom: 50 }}>
                    <div style={{ width: '70%' }}>
                        <p style={{
                            fontFamily: 'Ubuntu',
                            fontSize: 12,
                            fontWeight: 700,
                            color: '#08306b',
                            lineHeight: '30px',
                            width: "fit-content",
                            background: "#E9F2FC",
                            padding: "10px 40px",
                        }}>
                            About Us
                        </p>
                        <h2 style={{
                            fontFamily: 'Ubuntu',
                            fontSize: 40,
                            fontWeight: 700,
                            color: '#08306b',
                            lineHeight: '50px'
                        }}>
                            We’re passionate about
                            small business success
                            because we live it every day.
                        </h2>
                        <p style={{
                            fontFamily: "Inter",
                            fontSize: 20,
                            fontWeight: 400,
                            color: '#08519C'
                        }}>
                            We treat your business like our own, delivering personalized service that ensures your financials are always accurate and up-to-date. You’re not just a client—you’re a partner in success.
                        </p>
                        <button style={{
                            background: '#026331',
                            color: 'white',
                            padding: '10px 40px',
                            borderRadius: '50px',
                            marginTop: 20
                        }}>
                            Book an introductory call
                        </button>
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div style={{
                width: '30%',
                background: '#08306b',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'center',
                position: 'relative'
            }}>
                {/* Buttons */}
                <div style={{ marginTop: 40, display: 'flex', justifyContent: 'space-between', width: '90%' }}>
                    <button style={{
                        background: '#f7fbff',
                        border: 'none',
                        borderRadius: 42,
                        color: '#08306b',
                        padding: 10,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 10
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
                        gap: 10
                    }}>
                        <img src={client} alt="arrow" />
                        <p>REFER A FRIEND</p>
                    </button>
                </div>

                {/* Wrapper for Hero Image + Border */}
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    right: '30%',
                    transform: 'translateY(-50%)',
                    width: '300px',
                    height: '300px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
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
                            width: '300px',
                            height: '300px',
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
