import React from 'react'
import style from '../../css/payout/startUs.module.css'
import image1 from '../../assets/payout/timetable.png'
import image2 from '../../assets/payout/discuss.png'
import image3 from '../../assets/payout/curiosity.png'



const data = [
    {
        img: image1,
        head: 'Schedule your free consultation',
        text: 'Speak with our payroll specialists about your Business & payroll needs and receive a personalized payroll quote during your first call.'
    },
    {
        img: image2,
        head: 'Meet your  Payroll Expert',
        text: 'Based on your unique business payroll needs, you ll be matched with a payroll expert who will provide personalized service and support.'
    },
    {
        img: image3,
        head: 'Be in the Know',
        text: 'Need payroll support? Easily connect with your payroll expert by phone, video call, or in person.'

    }
]


const StartUsCard = ({ img, head, text }) => {
    return (
        <div className={style.StartUsCard}>
            <div className={style.StartUsCardImage}>
                <img src={img} alt="image" />
            </div>
            <h3 className={style.StartUsCardHead}>{head}</h3>
            <p className={style.StartUsCardText}>{text}</p>
        </div>
    )
}


const StartUs = () => {
    return (
        <div className={style.StartUsContainer}>
            <h2 className={style.StartUsHead}>Start us today</h2>
            <div className={style.StartUsCradContainer}>
                {data.map((item, index) => (
                    <StartUsCard key={index} img={item.img} head={item.head} text={item.text} />
                ))}

            </div>
        </div>
    )
}

export default StartUs