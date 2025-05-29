import React from 'react';
import heroImage from '../../assets/service/ServiceHome.png';

const ServiceHome = () => {
    return (
        <div style={{ display: 'flex', width: '100vw', height: '100vh', background: '#f7fbff' }}>
            {/* Left Section */}
            <div style={{
                width: '70%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '0 5%',
                background: '#fff'
            }}>
                <div style={{ width: '100%' }}>
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
                        Tax Preparation
                    </button>

                    <h2 style={{
                        fontFamily: 'Ubuntu',
                        fontSize: 40,
                        fontWeight: 700,
                        color: '#08306b',
                        lineHeight: '50px'
                    }}>
                        We handle your finances<br /> confidentially,
                        professionally,<br /> and efficiently.
                    </h2>

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
                height: '100%',
                background: '#08306b',
                display: 'flex',
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                position: 'relative',
                borderRadius: '10px',

            }}>
                {/* Circle Behind Head */}
                <div style={{
                    position: 'absolute',
                    top: '30%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '350px',
                    height: '350px',
                    backgroundColor: '#fff',
                    borderRadius: '50%',
                    zIndex: 10,
                }} />

                {/* Image */}
                <img
                    src={heroImage}
                    alt="service"
                    style={{
                        height: '70%',
                        objectFit: 'contain',
                        zIndex: 10,
                        position: 'relative',
                        left: "20%",
                    }}
                />
            </div>

        </div>
    );
};

export default ServiceHome;
