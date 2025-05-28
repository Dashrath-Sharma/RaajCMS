import React from 'react';
import style from '../../css/administrative/whyChooseUs.module.css';
import tickIcon from '../../assets/administatrative/whyUs1.png';
import supportIcon from '../../assets/administatrative/whyUs2.png';
import timeIcon from '../../assets/administatrative/whyUs3.png';

const cards = [
    {
        icon: tickIcon,
        title: '99.9% Accuracy Rate',
        description:
            'Our attention to detail means fewer errors, cleaner records, and confidence in every transaction, backed by a 99.9% accuracy track record.',
    },
    {
        icon: supportIcon,
        title: '24/7 Support',
        description:
            'Whether it’s a quick question or urgent admin help, our team is available around the clock with an average response time under 1 hour.',
    },
    {
        icon: timeIcon,
        title: '100% On-Time Delivery',
        description:
            'From monthly reports to daily tasks, we deliver consistently, meeting deadlines every time, without exceptions.',
    },
];

const WhyChooseUs = () => {
    return (
        <div className={style.container}>
            <div className={style.header}>
                <h2>Why choose us ?</h2>
                <button className={style.button}>Schedule an expert call</button>
            </div>

            <div className={style.cards}>
                {cards.map((card, index) => (
                    <div key={index} className={style.card}>
                        <img src={card.icon} alt="icon" className={style.icon} />
                        <h3>{card.title}</h3>
                        <p>{card.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhyChooseUs;
