import React from 'react'
import star from '../assets/star.png'
import experience from '../assets/experience.png'
import handshake from '../assets/handshake.png';
import link from '../assets/link.png';

import style from '../css/starCard.module.css'

// ✅ Card component
const Card = ({ midImage, title }) => {
    return (
        <div className={style.card}>
            <img className={style.star} src={star} alt="star" />
            <img className={style.experience} src={midImage} alt="mid" />
            <p className={style.title}>{title}</p>
        </div>
    )
}

const HomeStarCard = () => {
    const cards = [
        { id: 1, midImage: experience, title: "Driven by You" },
        { id: 2, midImage: handshake, title: "Backed by Expertise" },
        { id: 3, midImage: link, title: "Always Connected" }
    ]

    return (
        <div className={style.cardContainer}>
            {cards.map((card) => (
                <Card key={card.id} midImage={card.midImage} title={card.title} />
            ))}
        </div>
    )
}

export default HomeStarCard
