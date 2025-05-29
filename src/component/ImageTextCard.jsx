
import React from 'react'
import style from "../css/starCard.module.css"
import account from '../assets/textCard/accounts.png'
import career from '../assets/textCard/career.png'
import file from '../assets/textCard/file.png'
import folder from "../assets/textCard/folder.png"



const textCardData = [
    { title: "Tax Preparation", img: account },
    { title: "Accounting", img: career },
    { title: "Payroll", img: file },
    { title: "Administrative Tasks", img: folder },
    { title: "Business Formation", img: file },
    { title: "Accounts Payable", img: folder },
];


export const ImageTextCard = ({ image, title }) => {
    return (
        <div className={style.imageTextCard}>
            <div className={style.imageDiv}>
                <img src={image} alt="" className={style.image} />
            </div>
            <h3 className={style.imageTextCardTitle}>{title}</h3>

        </div >
    )
}
export const TextCardContainer = () => {
    return (
        <div className={style.textCardContainer}>
            {textCardData.map((card, index) => (
                <ImageTextCard key={index} image={card.img} title={card.title} />
            ))}
        </div>
    );
};


