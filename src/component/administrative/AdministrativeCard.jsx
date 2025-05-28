import React from 'react';
import icon1 from '../../assets/administatrative/admn1.png';
import icon2 from '../../assets/administatrative/admn2.png';
import icon3 from '../../assets/administatrative/admn3.png';
import icon4 from '../../assets/administatrative/admn4.png';
import style from '../../css/administrative/admnCard.module.css';

const data = [
    {
        icon: icon1,
        title: 'Real-Time Visibility',

    },
    {
        icon: icon2,
        title: 'Automated Reconciliation',
    },
    {
        icon: icon3,
        title: 'Enhanced Security',
    },
    {
        icon: icon4,
        title: 'Customizable Dashboards',
    },
];

const AdministrativeCard = () => {
    return (
        <div className={style.AdministrativeCardContainer}>
            {data.map((item, index) => (
                <div className={style.card} key={index}>
                    <img src={item.icon} alt={item.title} className={style.cardIcon} />
                    <h3 className={style.cardTitle}>{item.title}</h3>
                    <p className={style.cardDescription}>{item.description}</p>
                </div>
            ))}
        </div>
    );
};

export default AdministrativeCard;
