import React from 'react';
import style from '../../css/service/newBussiness.module.css';
import kevin from '../../assets/service/kevin.png';
import Icon1 from '../../assets/service/sIcon.png';
import Icon2 from '../../assets/service/sIcon2.png';
import Icon3 from '../../assets/service/sIcon3.png';

const NewBussiness = ({title}) => {
  return (
    <div className={style.NewBussinessContainer}>
      <div className={style.NewBussinessHead}>
        <h2 className={style.NewBussinessHeadTitle}>{title}</h2>
      </div>
      <div className={style.NewBussinessContent}>
        <div className={style.NewBussinessImageContainer}>
          <img src={kevin} alt='new business' className={style.kevinImage} />
        </div>
        <div className={style.NewBussinessContentRight}>
          <div className={style.NewBussinessContentCard}>
            <div className={style.paraText}>
              <p>In-person consultation</p>
              <span className={style.NewBussinessContentCardSpan}>
                Schedule an appointment or walk in
              </span>
            </div>
            <img src={Icon1} alt='new business' />
          </div>
          <div className={style.NewBussinessContentCard}>
            <div className={style.paraText}>
              <p>
                Remote assistance{' '}
                <span className='px-4 bg-secondary py-2 rounded-full !text-white'>
                  Get started now
                </span>
              </p>
              <span className={style.NewBussinessContentCardSpan}>
                Book an Introductory Call{' '}
              </span>
            </div>
            <img src={Icon2} alt='new business' />
          </div>
          <div className={style.NewBussinessContentCard}>
            <div className={style.paraText}>
              <p>Drop-off service</p>
              <span className={style.NewBussinessContentCardSpan}>
                Submit your documents at an office.{' '}
              </span>
            </div>
            <img src={Icon3} alt='new business' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewBussiness;
