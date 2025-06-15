import React from 'react';
import style from '../css/resource/resource.module.css';
import image1 from '../assets/resource/R1.png';
import image2 from '../assets/resource/R2.png';
import image3 from '../assets/resource/newspaper.png';
import Download from '../component/resource/Download';
import Questiom from '../component/resource/Questiom';
import Something from '../component/resource/Something';

export const ResourceCard = ({ image, title, description }) => {
  return (
    <div className={style.ResourceCard}>
      <div className={style.ResourceCardImage}>
        <img src={image} alt="" />
      </div>
      <h2 className={style.ResourceCardHead}>{title}</h2>
      <p className={style.ResourceCardPara}>{description}</p>
    </div>
  );
};

const Resource = () => {
  return (
    <div>
      <div className={style.ResourceContainer}>
        <div className={style.blue}>
          <p>Small Business Services</p>
          <p>Tax Preparation</p>
          <p>Payroll</p>
          <p>Start a Business</p>
          <p>Administrative Work</p>
          <p>EIN</p>
          <p>Tax Tips</p>
          <p>News</p>
        </div>
        <div className={style.HomeContainer}>
          <button className={style.Resourcebutton}>Resources </button>
          <h2 className={style.title}>Your Trusted Source for Tax Filing Excellence</h2>
          <p className={style.description}>
            Stay compliant and informed with our up-to-date,
            <br />
            expertly curated tax filing guides and financial resources.
          </p>
        </div>
        <div className={style.ResourceCardContainer}>
          <ResourceCard
            image={image1}
            title="Tax Filing Guides"
            description="Stay compliant and informed with our up-to-date, expertly curated tax filing guides and financial resources."
          />
          <ResourceCard
            image={image2}
            title="Tax Filing Guides"
            description="Stay compliant and informed with our up-to-date, expertly curated tax filing guides and financial resources."
          />
          <div className={style.GreenCardConatainer}>
            <div className={style.GreenCard}>
              <img src={image3} />
              <h2>Don't Overpay: S Corp Tax Deadlines and Strategies for 2024-2025</h2>
            </div>
            <div className={style.GreenCard}>
              <div className={style.GreenCard}>
                <img src={image3} />
                <h2>2025 tax deadlines are closer than you think!...</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Download />
      <Questiom />
      <Something />
    </div>
  );
};

export default Resource;
