import React from 'react';
import heroImage from '../../assets/service/ServiceHero1.png';
import styles from '../../css/service/serviceHome.module.css';

const ServiceHome = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <div>
            <button className={styles.aboutTag}>Tax Preparation</button>

            <h2 className={styles.heading}>
              We handle your finances
              <br /> confidentially, professionally,
              <br /> and efficiently.
            </h2>
            <button className={styles.ctaButton}>
              File your&nbsp;<b>Taxes</b>
            </button>
          </div>
        </div>

        <div className={styles.rightSection}>
          <div className={styles.imageWrapper}>
            <img src={heroImage} alt="service" className={styles.heroImage} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceHome;
