import React from 'react';
import heroImage from '../../assets/carrer/CarrerProfileImage.png';
import backImage from '../../assets/carrer/homeBack.png';

const CareerHome = () => {
    return (
        <div style={{
            display: 'flex',
            width: '100vw',
            height: '100vh',
            background: '#f7fbff',

        }}>

            <div style={{
                width: '70%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: ' 100px 50px 50px 50px',
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
                        Where Passion Meets Purpose, <br />
                        Join a Team That Cares
                    </h2>

                    <p style={{
                        fontFamily: 'Inter',
                        fontWeight: 400,
                        fontSize: '18px',
                        lineHeight: '30px',
                        color: '#08519C',
                        marginTop: '10px',
                        width: '60%',
                        marginBottom: '20px',
                    }}>
                        Discover a career where your passion drives purpose and your work makes a difference.
                    </p>

                    <button style={{
                        background: '#026331',
                        border: 'none',
                        borderRadius: 50,
                        color: '#fff',
                        padding: '15px 45px',
                        marginTop: 30,
                        cursor: 'pointer',
                        fontFamily: 'Palanquin Dark',
                        fontWeight: 400,
                        fontSize: '16px',
                        width: "fit-content",
                    }}>
                        Apply Now
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
                    left: '-20%',
                    width: '300px',
                    height: '300px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    {/* Top Left Border */}
                    {/* <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '60px',
                        height: '60px',
                        borderTop: '4px solid #fff',
                        borderLeft: '4px solid #fff',
                        borderTopLeftRadius: '12px'
                    }} /> */}

                    {/* Bottom Right Border */}
                    {/* <div style={{
                        position: 'absolute',
                        bottom: 0,
                        right: 0,
                        width: '60px',
                        height: '60px',
                        borderBottom: '4px solid blue',
                        borderRight: '4px solid white',
                        borderBottomRightRadius: '12px'
                    }} /> */}

                    {/* Background Image */}
                    <img
                        src={backImage}
                        alt="background"
                        style={{
                            position: 'absolute',
                            width: '230px',
                            height: '300px',
                            objectFit: 'cover',
                            zIndex: 0,
                            top: 0,
                            left: 0,
                            borderRadius: '12px'
                        }}
                    />

                    {/* Hero Image */}
                    <img
                        src={heroImage}
                        alt="career"
                        style={{
                            width: '600px',
                            height: '400px',
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
