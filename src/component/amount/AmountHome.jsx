import React from 'react';
import heroImage from '../../assets/Accounting/accountpayble.png';


const AmountHome = () => {
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
                <div style={{width: '85%'}}>
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
                        Accounts Payable
                    </p>
                    <h2 style={{
                        fontFamily: 'Ubuntu',
                        fontSize: 40,
                        fontWeight: 700,
                        color: '#08306b',
                        lineHeight: '50px',
                        marginTop: '20px'
                    }}>
                        Reliable Accounts Payable<br />
                        Services from Trusted Experts
                    </h2>
                    <p style={{
                        fontFamily: "Inter",
                        fontSize: 20,
                        fontWeight: 400,
                        color: '#08519C',
                        marginTop: '20px'
                    }}>
                        Simplify your accounts payable with expert guidance from Bean Counter, ensuring efficient tracking and error detection for smooth financial operations
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
                        Book a Consultation
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
                <div style={{
                }}>

                    {/* Hero Image */}
                    <img
                        src={heroImage}
                        alt="hero"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                            transform: 'translateX(-140px) scale(1.2)',
                            zIndex: 1
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default AmountHome