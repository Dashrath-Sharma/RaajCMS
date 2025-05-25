import React from 'react'
import style from '../css/Accounting.module.css'
import arrow from '../assets/Accounting/arrow_forward.png'
import image1 from '../assets/Accounting/Acc1.png'
import image2 from '../assets/Accounting/acc2.png'
import image3 from '../assets/Accounting/acc3.png'

const cardData = [
    {
        image: image1,
        title: 'Bookkeeping',
        discription: 'Our experts are here to assist you not just during tax season, but all year round. Let us handle the details, so you can focus on what you do best.'
    },
    {
        image: image2,
        title: 'Payroll',
        discription: 'We furnish outsourced, part-time bookkeeping with a full-time presence at a fraction of the cost of hiring an internal CFO.'
    },
    {
        image: image3,
        title: 'Business Formation',
        discription: 'Determining the fair economic value of a business or company unit for its sale value, establishing a partnership, taxation, etc.'
    }
]

export const AccountingCard = ({ image, title, discription }) => {
    return (
        <div className={style.AccountingCard}>
            <div className={style.ImageWrapper}>
                <img src={image} alt={title} />
            </div>
            <div className={style.CardHeader}>
                <h2 className={style.CardTitle}>{title}</h2>
                <div className={style.arrowDiv}>
                    <img src={arrow} alt="arrow icon" />
                </div>
            </div>
            <p className={style.CardDescription}>{discription}</p>
            <button className={style.LearnMoreBtn}>Learn More</button>
        </div>
    )
}

const Accounting = () => {
    return (
        <div className={style.AccountingContainer}>
            <div className={style.Accounting}>
                <button className={style.AccountingButton}>Accurate Accounting</button>
                <h2 className={style.AccountingTitle}> We count all the beans accurately</h2>
                <p className={style.AccountingParagraph}>
                    Our experts are here to assist you not just during tax season,
                    but all year round. Let us handle the details, so you can focus on what you do best.
                </p>
            </div>

            <div className={style.AccountingCardContainer}>
                {cardData.map((card, index) => (
                    <AccountingCard
                        key={index}
                        image={card.image}
                        title={card.title}
                        discription={card.discription}
                    />
                ))}
            </div>
        </div>
    )
}

export default Accounting
