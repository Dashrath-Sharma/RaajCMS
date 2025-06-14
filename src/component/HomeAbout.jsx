import React from 'react';
import about from '@assets/About.png';
import style from '@css/about.module.css';

const HomeAbout = () => {
  return (
    <div className={style.aboutContainer}>
      <div className={style.aboutImage}>
        <img src={about} alt="About our services" className={style.image} />
      </div>
      <div className={style.aboutContent}>
        <h2 className={style.aboutContentTitle}>Skilled Professionals Ready for Every Challenge</h2>
        <p className={style.aboutContentDescription}>
          We're prepared to handle even the most complex small business taxes, and your return
          always comes with our satisfaction guarantee and a good tax outcome.
        </p>
        <div className={style.aboutContentButtons}>
          <button className={style.aboutContentButton}>File Your Taxes</button>
          <button className={style.aboutContentButtonGreen}>Book a Free Consultation Call</button>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
