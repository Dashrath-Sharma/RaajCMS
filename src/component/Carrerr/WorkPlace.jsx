import React from 'react';
import style from '@css/Carreer/WorkPlace.module.css';
import workplaceImage from '@assets/carrer/workPlace.png';
import checkmark from '@assets/carrer/checkmark.png';

const WorkPlace = () => {
  return (
    <div className={style.workplaceContainer}>
      <div className={style.workplaceLeft}>
        <div className={style.workplaceImage}>
          <img src={workplaceImage} alt="workplace" />
        </div>
      </div>
      <div className={style.workplaceContent}>
        <h2 className={style.workplaceTitle}>
          Workplace
          <br />
          Benefits Await
        </h2>
        <p className={style.workplaceText}>Maximize Your Earnings, Minimize Your Tax</p>
        <p className={style.workplaceText}>– The Smart Way!</p>
        <div className={style.workplaceList}>
          <div className={style.workplaceListLeft}>
            <div>
              <img src={checkmark} alt="workplace" />
              <span className={style.workplaceListText}>Retirement Plans</span>
            </div>
            <div>
              <img src={checkmark} alt="workplace" />
              <span className={style.workplaceListText}>Retirement Plans</span>
            </div>
            <div>
              <img src={checkmark} alt="workplace" />
              <span className={style.workplaceListText}>Retirement Plans</span>
            </div>
          </div>
          <div className={style.workplaceListLeft}>
            <div>
              <img src={checkmark} alt="workplace" />
              <span className={style.workplaceListText}>Retirement Plans</span>
            </div>
            <div>
              <img src={checkmark} alt="workplace" />
              <span className={style.workplaceListText}>Retirement Plans</span>
            </div>
            <div>
              <img src={checkmark} alt="workplace" />
              <span className={style.workplaceListText}>Retirement Plans</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkPlace;
