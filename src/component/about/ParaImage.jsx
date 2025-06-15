import React from 'react';
import styles from '../../css/about/paraImage.module.css';
import image from '../../assets/about/about-story.png';

const ParaImage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textSection}>
        <h2 className={styles.heading}>The Bean Counter’s Story</h2>
        <p className={styles.paragraph}>
          Since 2008, Bean Counter has been dedicated to helping small businesses and HR
          professionals simplify their financial tasks, including tax filing and bookkeeping.
        </p>
        <p className={styles.paragraphAlt}>
          Originally a local service in Palm Springs, we’ve grown to support clients statewide with
          a straightforward approach that saves both time and money. Our top priority is
          you—delivering professional, accurate services to keep your books in order, so you can
          focus on running and expanding your business.
        </p>
      </div>

      <div className={styles.imageSection}>
        <img src={image} alt="About Bean Counter" className={styles.image} />
      </div>
    </div>
  );
};

export default ParaImage;
