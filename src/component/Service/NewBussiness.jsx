import React from 'react';
import style from '../../css/service/newBussiness.module.css';
import kevin from '../../assets/service/kevin.png';
import Icon1 from '../../assets/service/sIcon.png';
import Icon2 from '../../assets/service/sIcon2.png';
import Icon3 from '../../assets/service/sIcon3.png';

const iconList = {
  0: Icon1,
  1: Icon2,
  2: Icon3
}

const NewBussiness = ({ title, data, invert }) => {
  return (
    <div className={`${style.NewBussinessContainer} ${invert ? style.invertedContainer : ''}`}>
      <div className={style.NewBussinessHead}>
        <h2 className={`${style.NewBussinessHeadTitle} ${invert ? style.invertedTitle : ''}`}>
          {title}
        </h2>
      </div>

      <div className={style.NewBussinessContent}>
        <div className={style.NewBussinessImageContainer}>
          <img src={kevin} alt="new business" className={style.kevinImage} />
        </div>

        <div className={style.NewBussinessContentRight}>
          {data?.map((card, index) => (
            <div
              className={`${style.NewBussinessContentCard} ${invert ? style.invertedCard : ''}`}
              key={index}
            >
              <div className={style.paraText}>
                <p className={`${invert ? style.invertedCartText : ''}`}>
                  {card?.title}&nbsp;&nbsp;
                  {card?.badge && (
                    <span
                      className={`px-4 ${invert ? 'bg-[#f7fbff] !text-secondary' : 'bg-secondary !text-white'} py-2 rounded-full my-2 sm:my-0 inline-block sm:inline`}
                    >
                      Get started now
                    </span>
                  )}
                </p>
                <span
                  className={`${style.NewBussinessContentCardSpan} ${invert ? style.invertedCartText : ''}`}
                >
                  {card?.description}
                </span>
              </div>
              <img
                src={iconList[index]}
                alt="new business"
                style={{
                  filter: invert
                    ? 'invert(100%) sepia(0%) saturate(0%) brightness(120%) contrast(100%)'
                    : 'unset',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default NewBussiness;
