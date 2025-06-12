import React from 'react';
import heroImage from '../../assets/about/aboutHome.png';
import styles from '../../css/about/aboutHome.module.css';

const PayoutHome = () => {
  return (
    <>
      <div className={styles.container}>

        <div className={styles.leftSection}>
          <div>
            <button className={styles.aboutTag}>About Us</button>

            <h2 className={styles.heading}>
              We're passionate about<br />
              small business success<br />
              because we live it every day.
            </h2>

            <p className={styles.description}>
              We treat your business like our own, delivering personalized service that ensures your financials are always accurate and up-to-date. You're not just a client—you're a partner in success.
            </p>

            <button className={styles.ctaButton}>
              Book an introductory call
            </button>
          </div>
        </div>


        <div className={styles.rightSection}>
          <div className={styles.imageWrapper}>
            {/* <div className={styles.borderTopLeft} />
            <div className={styles.borderBottomRight} /> */}
            <img src={heroImage} alt="hero" className={styles.heroImage} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PayoutHome;
