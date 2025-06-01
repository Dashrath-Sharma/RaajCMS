import React from 'react'
import style from "../../css/Carreer/position.module.css";
import icon1 from '../../assets/carrer/icon1.png'


const positionData = [
    {
        image: icon1,
        title: 'Tax Professional'
    },
    {
        image: icon1,
        title: 'Team Leader'
    },
    {
        image: icon1,
        title: 'Receptionist'
    },
    {
        image: icon1,
        title: 'Auditor'
    },
    {
        image: icon1,
        title: 'Accountant'
    },
    {
        image: icon1,
        title: 'Intern'
    },
]


export const PositionCard = ({ image, title }) => {
    return (
        <div className={style.positionCard}>
            <div className={style.positionCardImageWrapper}>
                <img src={image} alt={title} className={style.positionCardImage} />
            </div>
            <h3 className={style.positionCardTitle}>{title}</h3>

        </div>
    )
}


const Position = () => {
    return (
        <div className={style.positionContainer}>
            <h2 className={style.positionTitle}>Limited Positions
                <br />
                Available for Top Talent!</h2>
            <div className={style.positionGrid}>
                {positionData.map((item, index) => (
                    <PositionCard
                        key={index}
                        image={item.image}
                        title={item.title}
                    />
                ))}
            </div>
            <div className={style.positionButtonWrapper}>
                <button className={style.positionButton}>Apply for <span className={style.sub}> Palms Springs, CA </span></button>
                <button className={style.positionButton}>Apply for <span className={style.sub}>Whittier, CA </span></button>
                <button className={style.positionButton}>Apply  <span className={style.sub}> Remotely</span></button>
            </div>
        </div>
    )
}

export default Position