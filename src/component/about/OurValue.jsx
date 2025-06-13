import React from "react";
import style from "../../css/about/about.module.css";
import mission from "../../assets/about/mission.png";
import vision from "../../assets/about/binoculars.png";
import checkmark from "../../assets/about/checkmark.png";

const cardData = [
  {
    img: mission,
    title: "Mission",
    height: 245,
    content: [
      "Deliver full accounting services that help clients flourish.",
      "Keep financial records sharp to ensure businesses run smoothly.",
      "Customize support for each client to help them achieve their goals.",
      "Always go the extra mile to build trust and strong relationships.",
      "Work as a team to provide top-notch service.",
    ],
  },
  {
    img: vision,
    title: "Vission",
    height: 225,
    content: [
      "Stay ahead with smart solutions that respond to clients' changing needs.",
      "Aim to be the best in providing reliable and comprehensive financial services.",
      "Grow with our clients by adapting our services as their businesses expand.",
      "Guide our clients towards a prosperous future with effective planning and support.",
    ],
  },
];

const OurValue = () => {
  return (
    <div className={style.OurValue}>
      <h2 className={style.OurValueTitle}>Our Values</h2>
      {cardData.map((data, index) => (
        <OurValueCard {...data} key={index+data.title}/>
      ))}
    </div>
  );
};

export default OurValue;

const OurValueCard = ({ img, title, content, height }) => {
  return (
    <div className={style.OurValueCard}>
      <button className={style.OurValueCardButton}>
        <img src={img} alt="" />
        <h3 className={style.OurValueCardTitle}>{title}</h3>
      </button>
        <div className={style.OurValueCardContent} style={{height: `${height}px`}}>
        {content.map((text, index) => (
        <spna key={text + index}>
          <div className={style.OurValueCardContentItem}>
            <img src={checkmark} alt="" />
            <p className={style.OurValueCardContentItemText}>{text}</p>
          </div>
            {index+1 < content.length && <div className={style.seperator}></div>}
        </spna>
      ))}
        </div>
    </div>
  );
};
