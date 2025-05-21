
import React from 'react'
import style from "../css/starCard.module.css"
import account from '../assets/textCard/accounts.png'
import career from '../assets/textCard/career.png'
import file from '../assets/textCard/file.png'
import folder from "../assets/textCard/folder.png"



const textCardData = [
    { title: "Account", img: account },
    { title: "Career", img: career },
    { title: "File", img: file },
    { title: "Folder", img: folder },
    { title: "File", img: file },
    { title: "Folder", img: folder },
];


export const ImageTextCard = ({ image, title }) => {
    return (
        <div className={style.imageTextCard}>
            <div className={style.imageDiv}>
                <img src={image} alt="" />
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


