import React from 'react'
import style from "../../css/Carreer/OurStrength.module.css";
import image1 from "../../assets/carrer/ourSt1.png";
import image2 from "../../assets/carrer/ourSt2.png";
import image3 from "../../assets/carrer/ourSt3.png";


const OurStrengthCardData = [
    {
        image: image1,
        title: "Jonathan Potthast",
        description: "Accunting Supervisor"
    },
    {
        image: image2,
        title: "Diego Grimaldo",
        description: "Accounting Manager"
    },
    {
        image: image3,
        title: "Brian Cervantes",
        description: "Accounting Supervisors"
    },

]


export const OurStrengthCard = ({ image, title, description }) => {
    return (
        <div className={style.OurStrengthCard}>
            <div className={style.OurStrengthCardImage}>
                <img src={image} alt="" />
            </div>
            <div className={style.OurStrengthFoot}>
                <h3 className={style.OurStrengthCardTitle}>{title}</h3>
                <p className={style.OurStrengthCardDescription}>{description}</p>
            </div>
        </div>
    )
}

const OurStrength = () => {
    return (
        <div className={style.OurStrengthcontainer}>
            <div className={style.OurStrengthTitleWrapper}>
                <h2 className={style.OurStrengthTitle}>Our Strength Lies in Our Team</h2>
                <p className={style.OurStrengthDescription}>Join us and contribute to a culture of
                    collaboration and excellence</p>
            </div>
            <div className={style.OurStrengthCardWrapper}>
                {OurStrengthCardData.map((item, index) => (
                    <OurStrengthCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>

        </div>
    )
}

export default OurStrength