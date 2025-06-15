import React from 'react';
import heroImage from '../../assets/administatrative/heroImage.png';
// import styles from '../../css/administatrative/AdministrativeHome.module.css'
import styles from '../../css/administrative/AdministrativeHome.module.css';

const AmountHome = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <div>
          <button className={styles.aboutTag}>Administrative Support</button>

          <h2 className={styles.heading}>
            Administrative Support
            <br />
            That Works as Hard
            <br />
            as You Do
          </h2>

          <p className={styles.description}>
            From scheduling to document management, our reliable administrative services keep your
            operations organized, efficient, and stress-free
          </p>

          <button className={styles.ctaButton}>Book a Consultation</button>
        </div>
      </div>

      <div className={styles.rightSection}>
        <div className={styles.imageWrapper}>
          <img src={heroImage} alt="hero" className={styles.heroImage} />
        </div>
      </div>
    </div>
  );
};

export default AmountHome;
