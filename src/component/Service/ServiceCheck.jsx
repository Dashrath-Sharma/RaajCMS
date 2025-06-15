import React from 'react';
import style from '../../css/service/service.module.css';
import tax from '../../assets/service/tax.png';

const ServiceCheck = () => {
  return (
    <div className={style.ServiceCheckContainer}>
      <div className={style.ServiceCheckContent}>
        <div className={style.ServiceCheckImage}>
          <img src={tax} alt="Tex image" />
        </div>
        <p className={style.ServiceCheckTitle}>
          Use Our Checklist
          <br />
          to Get Tax-Ready
        </p>
      </div>
      <div className={style.ServiceCheckRight}>
        <p className={style.ServiceCheckRightTitle}>
          Avoid tax-time stress. Our detailed checklist tells you exactly what forms and documents
          to gather, so you’re ready for any tax scenario.
        </p>
        <button className={style.ServiceCheckRightButton}>
          <p>
            Make your <b>Checklist</b>
          </p>
        </button>
      </div>
    </div>
  );
};

export default ServiceCheck;
