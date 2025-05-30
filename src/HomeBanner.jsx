import React, { useState, useEffect } from 'react'
import style from './css/home.module.css'
import image1 from './assets/homeImage.png'



const words = ["Bookkeeping", "Tax", "Payroll", "Accounting", "Bookkeeping"];

const HomeBanner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={style.homeBanner}>
            <div className={style.homeLeft}>
                <div className={style.homeBannerContentContainer}>
                    <div className={style.homeBannerContent}>
                        <h2 className={style.homeBannerContentTitle}>
                            Expert{" "}
                            <span
                                className={`${style.homeBannerContentTitleGreen} ${style.wordSlide}`}
                                key={currentIndex} // Ensures re-render & animation on word change
                            >
                                {words[currentIndex]}
                            </span>

                            <br />
                            services for Small Businesses & Individuals
                        </h2>
                        <p className={style.homeBannerContentDescription}>
                            We eat, sleep, and breathe finances, providing financial services
                            for small businesses and individuals. We work hard for the
                            hardest-working.
                        </p>
                        <button className={style.homeBannerContentButton}>
                            Book an Introductory Tax Consultation
                        </button>
                        <button className={style.homeBannerContentButtonGreen}>
                            Book an Introductory Payroll Strategy Call
                        </button>
                    </div>
                </div>
            </div>

            <div className={style.homeRight}>
                <div className={style.homeImageWrapper}>
                    <div className={style.imageCard}>
                        <img src={image1} alt="image" className={style.ladyImage} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;