import React, { useRef } from 'react';
import style from "../../css/resource/download.module.css";
import img1 from '../../assets/resource/resources1.png';
import img2 from '../../assets/resource/resources2.png';
import img3 from '../../assets/resource/resources3.png';
import arr1 from "../../assets/resource/arrow_forward.png";   // ⬅ back arrow
import arr2 from "../../assets/resource/arrow_forward1.png";  // ➡ forward arrow

const imgArr = [img1, img2, img3];

const Download = () => {
    const scrollRef = useRef(null);

    const handleScroll = (direction) => {
        const container = scrollRef.current;
        const scrollAmount = container.offsetWidth / 2;
        container.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth',
        });
    };

    return (
        <div className={style.DownloadConatiner}>
            <h2>Download, Learn, Grow</h2>
            <p>Everything You Need to Make Your Finances Easier</p>

            <div className={style.carouselWrapper}>
                {/* Arrows positioned above the carousel */}
                <div className={style.arrowContainer}>
                    <img src={arr1} alt="back" onClick={() => handleScroll('left')} className={style.arrowBtn} />
                    <img src={arr2} alt="forward" onClick={() => handleScroll('right')} className={style.arrowBtn1} />
                </div>

                {/* Image Scroll Container */}
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
