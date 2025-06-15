import React from 'react';
import style from '../../css/about/map.module.css';
import map1 from '../../assets/about/map1.png';
import map2 from '../../assets/about/map2.png';

const cardData = [
  {
    img: map1,
    title: 'Palm Springs WQ',
    description: '353 Sacramento St., Suite 1900 San Francisco CA 94111',
    cta: '/',
  },
  {
    img: map2,
    title: 'Whitter WQ',
    description: '818 18th Ave, Suite 102 South Nashville TN 37203',
    cta: '/',
  },
];
const Map = () => {
  return (
    <div className={style.MapContainer}>
      <div className={style.MapContainer}>
        <p className={style.MapContainerP}> Location</p>
        <h2 className={style.MapContainerH2}>We have offices in both Palm Springs & Whittier</h2>
        <h2 className={style.MapContainerH2Blue}>
          We have offices in both Palm Springs & Whittier
        </h2>
        <div className={style.Map}>
          {cardData.map((data, index) => (
            <MapCard {...data} key={index + data.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Map;

const MapCard = ({ img, title, description, cta }) => {
  return (
    <div className={style.MapDiv}>
      <img src={img} alt="map" className={style.MapImg} />
      <div className={style.MapText}>
        <h3 className={style.MapTextH3}>{title}</h3>
        <p className={style.MapTextP}>{description}</p>
        <a className={style.MapTextA} href={cta}>
          Google Maps →
        </a>
      </div>
    </div>
  );
};
