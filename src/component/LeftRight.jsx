import React from 'react';
import style from '../css/LeftRightCard.module.css';
import Eighteen from '../assets/textCard/leftRight/Eightteen.png';
import fiveStar from '../assets/textCard/leftRight/five-stars.png';
import Top from '../assets/textCard/leftRight/Top.png';

const data = [
  {
    img: Eighteen,
    head: '18 Years',
    title: 'in Bussiness',
  },
  {
    img: fiveStar,
    head: '5-Star',
    title: 'Average Review',
  },
  {
    img: Top,
    head: 'Top ',
    title: 'Industry Expertise',
  },
];

export const LeftRight = ({ img, head, title }) => {
  return (
    <div className={style.LeftRightCardContainer}>
      <div className={style.LeftRightImageContainer}>
        <img src={img} alt="" />
      </div>
      <div>
        <h3 className={style.LeftRightHead}>{head}</h3>
        <p className={style.LeftRightTitle}>{title}</p>
      </div>
    </div>
  );
};

const LeftRightCardContainer = () => {
  return (
    <div className={style.LeftRightCardWrapper}>
      {data.map((item, index) => (
        <LeftRight key={index} img={item.img} head={item.head} title={item.title} />
      ))}
    </div>
  );
};

export default LeftRightCardContainer;
