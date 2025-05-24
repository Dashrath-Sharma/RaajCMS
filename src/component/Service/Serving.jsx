import React from 'react'
import style from "../../css/service/serving.module.css"
import image1 from "../../assets/service/kevin.png"
import star from "../../assets/service/star.png"

const Serving = () => {
    return (
        <div className={style.ServingContainer}>
            <div className={style.ServingContent}>
                <h2 className={style.ServingTitle}>Serving Elite
                    Entrepreneurs<br />
                    Like You</h2>

            </div>
            <div className={style.ServingCardContainer}>
                <div className={style.ServingCard}>
                    <div className={style.ServingCardImage}>
                        <img src={image1} alt="profile image" className={style.ServingCardImage1} />
                        <div className={style.ServingCardStarContainer}>
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                            <img src={star} alt="star" />
                        </div>
                        <p>Kevin</p>
                    </div>

                </div>
                <div className={style.ServingCardContent}>
                    <p>Kevin is a successful entrepreneur who has built a successful business. He is a mentor to many entrepreneurs and has a wealth of experience in the business world.</p>
                </div>

            </div>
        </div>
    )
}

export default Serving