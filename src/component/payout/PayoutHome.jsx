import React from 'react';
import HomeNav from '../HomeNav';
import heroImage from '../../assets/payout/PayoutHero.png';
import styles from '../../css/payoutHome.module.css';

const PayoutHome = () => {
    return (
        <div className={styles.payoutContainer}>
            {/* Left Section */}
            <div className={styles.leftSection}>
                <div className={styles.contentWrapper}>
                    <button className={styles.payrollButton}>
                        Payroll
                    </button>
                    <h2 className={styles.payoutTitle}>
                        Accurate and Compliant
                        <br />
                        Payroll Services
                    </h2>
                    <p className={styles.payoutDescription}>
                        Whether you're a solo entrepreneur or managing a team, our payroll services make paydays easy, keep you compliant, and simplify year-end tax filings
                    </p>
                </div>
            </div>

            {/* Right Section */}
            <div className={styles.rightSection}>
                {/* Hero Image Container with Corner Borders */}
                <div className={styles.imageContainer}>

                    {/* Hero Image */}
                    <img
                        src={heroImage}
                        alt="hero"
                        className={styles.heroImage}
                    />
                </div>
            </div>
        </div>
    );
};

export default PayoutHome;
