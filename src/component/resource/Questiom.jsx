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
                    {/* <img src="https://cdn-icons-png.flaticon.com/512/1828/1828859.png" alt="Search Icon" className={style.QuestiomSearchIcon} /> */}

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