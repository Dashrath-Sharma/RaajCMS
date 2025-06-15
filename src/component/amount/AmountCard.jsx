import React from 'react';
import icon1 from '../../assets/amount/search1.png';
import icon2 from '../../assets/amount/search2.png';
import icon3 from '../../assets/amount/search3.png';
import icon4 from '../../assets/amount/downArrow.png';
import style from '../../css/amount/amountCard.module.css';

const data = [
  {
    icon: icon1,
    title: 'Real-Time Visibility',
    description:
      'With easy-to-understand reports delivered regularly, you’ll have a clear view of payment activity, spending trends, and aging summaries',
  },
  {
    icon: icon2,
    title: 'Automated Reconciliation',
    description:
      'Simplify your reconciliation process with automated matching of payments to invoices, reducing manual effort and errors.',
  },
  {
    icon: icon3,
    title: 'Enhanced Security',
    description:
      'Protect your financial data with advanced security features, including encryption and multi-factor authentication.',
  },
  {
    icon: icon4,
    title: 'Customizable Dashboards',
    description:
      'Tailor your dashboard to focus on the metrics that matter most to your business, providing a personalized view of your financial health.',
  },
];

const AmountCard = () => {
  return (
    <div className={style.amountCardContainer}>
      {data.map((item, index) => (
        <div className={style.card} key={index}>
          <img src={item.icon} alt={item.title} className={style.cardIcon} />
          <h3 className={style.cardTitle}>{item.title}</h3>
          <p className={style.cardDescription}>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default AmountCard;
