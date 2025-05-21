import React from 'react'
import style from './css/home.module.css'
import HomeNav from './component/HomeNav'
import letMeet from './assets/LetMeet.png'
import clientPortal from './assets/clientProtal.png'
import image1 from './assets/homeImage.png'


const HomeBanner = () => {
    return (
        <div className={style.homeBanner}>
            <div className={style.homeLeft}>
                <HomeNav />
                <div className={style.homeBannerContentContainer}>
                    <div className={style.homeBannerContent}>

                        <h2 className={style.homeBannerContentTitle}>
                            Expert
                            <span className={style.homeBannerContentTitleGreen}>
                                Bookkeeping
                            </span>
                            <br />

                            services for Small
                            Businesses & Individuals
                        </h2>
                        <p className={style.homeBannerContentDescription}>
                            We eat, sleep, and breathe finances, providing financial services for small businesses and individuals. We work hard for the hardest-working.
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
                <div className={style.rightNav}>
                    <button className={style.homeButtonWhite}>
                        <img src={letMeet} alt="arrow" />
                        <p>
                            LET’S MEET!
                        </p>
                    </button>
                    <button className={style.homeButtonGreen}>
                        <img src={clientPortal} alt="arrow" />
                        <p>
                            CLIENT PORTAL
                        </p>
                    </button>
                </div>
                <div className={style.homeImageWrapper}>
                    <div className={style.imageCard}>
                        <img src={image1} alt="image" className={style.ladyImage} />
                    </div>
                </div>



            </div>


        </div>
    )
}

export default HomeBanner