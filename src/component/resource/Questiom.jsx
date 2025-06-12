import React from 'react'
import style from "../../css/resource/question.module.css"
import { ResourceCard } from "../../pages/Resource";
import image1 from "../../assets/resource/down1.png";
import image2 from "../../assets/resource/down2.png";
import image3 from "../../assets/resource/down4.png";

const Questiom = () => {
    return (
        <div className={style.QuestiomContainer}>
            <div className={style.QuestiomHeader}>
                <h2 className={style.QuestiomTittle}>Ask a question for a topic</h2>
                <div className={style.QuestiomInputContainer}>
                    <input type="text" className={style.QuestiomInput} placeholder="Search.." />
                    <div className={style.circleIcon}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={style.searchIcon}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </div>

                </div>
            </div>
            <div className={style.QuestiomCardConatiner}>
                <h2 className={style.QuestiomHead}>Most Trending articles</h2>
                <p className={style.Para}>Running a business isn’t something you’re born knowing—it takes time and experience. In the meantime, these small business resources can help you get started.</p>
                <div className={style.QuestiomCard}>
                    <ResourceCard image={image1} title={"How Bookkeeping Errors are Draining your Small Business Profits "} description="Are you worried about bookkeeping errors draining your business profits? Check out this informative post to find effective ways to address these costly errors.
" />
                    <ResourceCard image={image2} title={"LLC Tax Strategies: What Every Business Owne Should Know (2025)"} description="Discover key LLC tax strategies for 2025, including tax classifications, deductions, and smart ways to minimize liabilities while maximizing savings.
s" />
                    <ResourceCard image={image3} title="How To Become a 
Tax Preparer: A Complete 
2025 Guide" description="Are you planning to become a proficient tax preparer with all the skills needed to provide the best tax filing and preparation services? If so, this article is for you!" />

                </div>
            </div>


        </div>
    )
}

export default Questiom