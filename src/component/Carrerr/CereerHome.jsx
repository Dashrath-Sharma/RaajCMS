import React from 'react';
import heroImage from '../../assets/carrer/CarrerProfileImage.png';

const CareerHome = () => {
    return (
        <div style={{
            display: 'flex',
            width: '100vw',
            height: '100vh',
            background: '#f7fbff',
        }}>
            {/* Left Section */}
            <div style={{
                width: '70%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0 5%'
            }}>
                <div style={{ width: '100%' }}>
                    {/* Career Button */}
                    <button style={{
                        fontFamily: 'Ubuntu',
                        fontSize: 12,
                        fontWeight: 700,
                        color: '#08306b',
                        lineHeight: '30px',
                        background: "#E9F2FC",
                        padding: "10px 40px",
                        borderRadius: '10px',
                        border: 'none',
                        marginBottom: 20,
                        cursor: 'pointer'
                    }}>
                        Career
                    </button>

                    <h2 style={{
                        fontFamily: 'Ubuntu',
                        fontSize: 40,
                        fontWeight: 700,
                        color: '#08306b',
                        lineHeight: '50px'
                    }}>
                        Where Passion Meets Purpose, Join a Team That Cares
                    </h2>

                    <p style={{
                        fontFamily: 'Inter',
                        fontWeight: 500,
                        fontSize: 22,
                        lineHeight: '35px',
                        color: '#08306b',
                        marginTop: '20px'
                    }}>
                        Discover a career where your passion drives purpose and your work makes a difference.
                    </p>

                    <button style={{
                        background: '#026331',
                        border: 'none',
                        borderRadius: 50,
                        color: '#fff',
                        padding: '15px 25px',
                        fontSize: 16,
                        marginTop: 30,
                        width: '60%',
                        cursor: 'pointer'
                    }}>
                        Apply for Internship
                    </button>
                </div>
            </div>

            {/* Right Section */}
            <div style={{
                width: '30%',
                background: '#08306b',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: 'center',
                position: 'relative'
            }}>
                {/* Image Wrapper */}
                <div style={{
                    position: 'relative',
                    left: '10%',
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
                        alt="career"
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

export default CareerHome;
