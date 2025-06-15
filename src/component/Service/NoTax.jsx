import React from 'react';
import style from '../../css/service/noTax.module.css';
import tickIcon from '../../assets/amount/checkmarkList.png';

const coreFunctions = [
  'Specialized in Small Business Taxes',
  'Trusted and Reputable',
  'Up-to-Date on US & Californian Tax Laws',
  'Deadline-Driven for Your Success',
  'Always Available, Swiftly Responsive',
  'Tech-Savvy for Your Business',
];

const NoTax = () => {
  return (
    <div className={style.NoTaxContainer}>
      <div className={style.NoTaxHead}>
        <h2 className={style.NoTaxHeadTitle}>No Tax Surprises Us</h2>
        <p className={style.NoTaxHeadDescription}>
          18 Years of Experience in Tax Complexity for Businesses and Individuals
        </p>
      </div>

      <div className={style.sideList}>
        <ul className={style.sideListContent}>
          {coreFunctions.map((func, idx) => (
            <li key={idx} className={style.coreItems}>
              <img src={tickIcon} alt="tick" className={style.tick} />
              <span>{func}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className={style.NoTaxButtonContainer}>
        <button className={style.NoTaxButton}>Book an Appointment Today</button>
      </div>
    </div>
  );
};

export default NoTax;
