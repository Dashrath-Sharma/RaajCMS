import React, { useRef, useState } from 'react';
import style from '../../css/resource/download.module.css';
import img1 from '../../assets/resource/resources1.png';
import img2 from '../../assets/resource/resources2.png';
import img3 from '../../assets/resource/resources3.png';

const imgArr = [img1, img2, img3];

const Download = () => {
  const scrollRef = useRef(null);
  const [active, setActive] = useState(false);

  const handleScroll = direction => {
    const container = scrollRef.current;
    const scrollAmount = container.offsetWidth / 2;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
    setActive(true);
    setTimeout(() => setActive(false), 300); // Reset active state after animation
  };

  return (
    <div className={style.DownloadConatiner}>
      <h2>Download, Learn, Grow</h2>
      <p>Everything You Need to Make Your Finances Easier</p>

      <div className={style.carouselWrapper}>
        <div className={style.arrowContainer}>
          <div
            className={`${style.circleIcon} ${active === 'left' ? style.active : ''}`}
            onClick={() => handleScroll('left')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={style.icon}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </div>
          <div
            className={`${style.circleIcon} ${style.rightArrow} ${active === 'right' ? style.active : ''}`}
            onClick={() => handleScroll('right')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={style.icon}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </div>
        </div>

        <div className={style.carousel} ref={scrollRef}>
          {imgArr.map((img, index) => (
            <img key={index} src={img} alt={`resource-${index}`} className={style.card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Download;
