
import React from 'react'
import style from '../css/resource/resource.module.css';
import image1 from '../assets/resource/R1.png';
import image2 from '../assets/resource/R2.png';
import image3 from '../assets/resource/newspaper.png';
;

const ResourceCard = ({ image, title, description }) => {
    return (
        <div className={style.ResourceCard}>
            <div className={style.ResourceCardImage}>
                <img src={image} alt="" />
            </div>
            <h2>
                {title}
            </h2>
            <p>
                {description}
            </p>
        </div>
    )
}
const Resource = () => {
    return (
        <div className={style.ResourceContainer}>
            <div className={style.blue}>
                <p>Small Business Services</p>
                <p>Tax Preparation</p>
                <p>Payroll</p>
                <p>Start a Business</p>
                <p>Administrative Work</p>
                <p>EIN</p>
                <p>Tax Tips</p>
                <p>News</p>
            </div>
            <div className={style.HomeContainer}>
                <button className={style.Resourcebutton}>Resources </button>
                <h2 className={style.title}>Your Trusted Source for Tax Filing Excellence</h2>
                <p className={style.description}>Stay compliant and informed with our up-to-date,<br />
                    expertly curated tax filing guides and financial resources.</p>
            </div>
            <div className={style.ResourceCardContainer}>
                <ResourceCard image={image1} title="Tax Filing Guides" description="Stay compliant and informed with our up-to-date, expertly curated tax filing guides and financial resources." />
                <ResourceCard image={image2} title="Tax Filing Guides" description="Stay compliant and informed with our up-to-date, expertly curated tax filing guides and financial resources." />


            </div>

        </div>
    )
}

export default Resource