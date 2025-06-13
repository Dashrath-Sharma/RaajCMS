import star from '@assets/Star.png'
import experience from '@assets/experience.png';
import handshake from '@assets/handshake.png';
import link from '@assets/link.png';

import style from '@css/starCard.module.css';

const Card = ({ midImage, title,content }) => {
    return (
        <div className={style.cardWrapper}>
            <div className={style.cardOuter}>
                <div className={style.cardInner}>
                    <div className={`${style.card} ${style.cardFront}`}>
                        <img className={style.star} src={star} alt="star" />
                        <img className={style.experience} src={midImage} alt="mid" />
                        <p className={style.title}>{title}</p>
                    </div>
                    <div className={`${style.card} ${style.cardBack}`}>
                        <img className={`${style.star} ${style.inverted}`} src={star} alt="star" />
                        <p className={style.backText}>{content}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};


const HomeStarCard = () => {
    const cards = [
        { id: 1, midImage: experience, title: "Driven by You",content:'Stay connected and supported with our dedicated experts, available anytime'  },
        { id: 2, midImage: handshake, title: "Backed by Expertise",  content:'Grow confidently with our trusted, partner-loved team.'},
        { id: 3, midImage: link, title: "Always Connected" ,content:'Your goals shape our focus. We succeed by helping you grow.' }
    ]

    return (
        <div className={style.cardContainer}>
            {cards.map((card) => (
                <Card key={card.id} midImage={card.midImage} title={card.title} content={card.content} />
            ))}
        </div>
    )
}

export default HomeStarCard
