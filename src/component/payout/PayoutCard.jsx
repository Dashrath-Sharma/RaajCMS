import React from 'react';
import style from '../../css/payout/payout.module.css';
import Icon1 from '../../assets/payout/pIcon1.png';
import Icon2 from '../../assets/payout/pIcon2.png';
import Icon3 from '../../assets/payout/pIcon3.png';

const cardData = [
  {
    img: Icon1,
    head: 'Payroll Made Simple and Stress-Free',
    title:
      'Automate payroll for simplicity and peace of mind, so you can focus on your business.',
  },
  {
    img: Icon2,
    head: 'Payroll Made Simple and Stress-Free',
    title:
      'Automate payroll for simplicity and peace of mind, so you can focus on your business.',
  },
  {
    img: Icon3,
    head: 'Payroll Made Simple and Stress-Free',
    title:
      'Automate payroll for simplicity and peace of mind, so you can focus on your business.',
  },
];

export const Card = ({ img, head, title }) => (
  <div className={style.CardContainer}>
    <img src={img} alt={head} className={style.CardImage} />
    <h2 className={style.CardHead}>{head}</h2>
    <p className={style.CardPara}>{title}</p>
  </div>
);

const PayoutCard = () => (
  <div className={style.payoutCardContainer}>
    {cardData.map((item, index) => (
      <Card key={index} {...item} />
    ))}
  </div>
);


export default PayoutCard;
