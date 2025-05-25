import React from 'react'
import style from '../css/WhyBussiness.module.css'
import profile1 from '../assets/whyBussiness/profile1.png';
import profile2 from '../assets/whyBussiness/profile2.png';
import profile3 from '../assets/whyBussiness/profile3.png';
import starLine from '../assets/whyBussiness/starLine.png';
import arrowIcon from '../assets/whyBussiness/yelp.png'; // Make sure you use the correct image path

const BussinessCardData = [
    {
        img: profile1,
        name: "Sakchai L.",
        title: "CEO",
        description: "I am very happy with the service. Kevin is personable and professional. He got everything done so quickly and thoroughly within days. I highly recommend this firm.",
        seeYou: "See you",
        arrow: arrowIcon
    },
    {
        img: profile2,
        name: "Sarah S.",
        title: "LLC",
        description: "Working with Kevin has been great! He helped me file my back taxes and get me back on track! Helped me with my EIN number for my new LLC, which was a headache for me.",
        seeYou: "See you",
        arrow: arrowIcon
    },
    {
        img: profile3,
        name: "Jonathan C.",
        title: "Founder",
        description: "Kevin Bautier at Bean Counter is a knowledgeable professional. He has suggested solutions to miscellaneous concerns and has been excellent to work with over the years.",
        seeYou: "See you",
        arrow: arrowIcon
    }
]

export const WhyBussinessCard = ({ img, name, title, description, seeYou, arrow }) => {
    return (
        <div className={style.WhyBussinessCard}>

            <div className={style.WhyBussinessCardImage}>
                <div className={style.WhyBussinessCardImageContainer}>
                    <img src={img} alt="Profile" />
                </div>
                <div className={style.WhyBussinessCardImageText}>
                    <p>{name}</p>
                    <span>{title}</span>
                </div>
            </div>
            <div className={style.WhyBussinessCardImage}>
                <img src={starLine} alt="star line" />
            </div>
            <div className={style.WhyBussinessCardImageDis}>
                <p>{description}</p>
            </div>
            <div className={style.WhyBussinessCardFooter}>
                <span>{seeYou}</span>
                <img src={arrow} alt="arrow" />
            </div>
        </div>
    )
}

const WhyBussiness = () => {
    return (
        <div className={style.WhyBussinessContainer}>
            <div className={style.WhyBussinessContent}>
                <h2 className={style.WhyBussinessTitle}>
                    See Why Business Owners Count on Bean Counter
                </h2>
            </div>

            <div className={style.WhyBussinessCardContainer}>
                {BussinessCardData.map((item, index) => (
                    <WhyBussinessCard
                        key={index}
                        img={item.img}
                        name={item.name}
                        title={item.title}
                        description={item.description}
                        seeYou={item.seeYou}
                        arrow={item.arrow}
                    />
                ))}
            </div>
        </div>
    )
}

export default WhyBussiness
