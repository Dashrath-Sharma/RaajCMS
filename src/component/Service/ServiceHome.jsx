import React from 'react';
import heroImage from '../../assets/service/ServiceHome.png';
import styles from '../../css/service/serviceHome.module.css';

const ServiceHome = () => {
    return (
        <div className={styles.serviceContainer}>
            {/* Left Section */}
            <div className={styles.leftSection}>
                <div className={styles.contentWrapper}>
                    <button className={styles.taxButton}>
                        Tax Preparation
                    </button>

                    <h2 className={styles.serviceTitle}>
                        We handle your finances<br /> confidentially,
                        professionally,<br /> and efficiently.
                    </h2>

                    <button className={styles.fileTaxButton}>
                        File your Taxes
                    </button>
                </div>
            </div>

            {/* Right Section */}
            <div className={styles.rightSection}>
                {/* Circle Behind Head */}
                <div className={styles.circleBackground} />

                {/* Image */}
                <img
                    src={heroImage}
                    alt="service"
                    className={styles.heroImage}
                />
            </div>
        </div>
    );
};

export default ServiceHome;
