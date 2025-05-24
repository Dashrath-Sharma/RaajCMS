
import React from 'react'
import style from '../../css/payout/ListImage.module.css';
import down from "../../assets/payout/down.png";
import check from "../../assets/payout/checkmark.png";
import image from "../../assets/payout/ladyPayout.png";

const ListImage = () => {
    return (
        <div className={style.ListImageConatiner}>
            <div className={style.ListImageLeft}>
                <h2 className={style.ListImageHead}>For every payroll run,
                    we deliver:</h2>
                <div className={style.ListImageLeft}>
                    <div className={style.ListImageCard}>
                        <div className={style.ListImageIconWord}>
                            <img src={check} alt='' className={style.ListImagecheckIcon} />
                            <span className={style.ListImageWord}>100% accuracy</span>
                        </div>
                        <img src={down} alt="down Image" className={style.ListImageDownIcon} />
                    </div>
                    <div className={style.ListImageCard}>
                        <div className={style.ListImageIconWord}>
                            <img src={check} alt='' className={style.ListImagecheckIcon} />
                            <span className={style.ListImageWord}>100% accuracy</span>
                        </div>
                        <img src={down} alt="down Image" className={style.ListImageDownIcon} />
                    </div>
                    <div className={style.ListImageCard}>
                        <div className={style.ListImageIconWord}>
                            <img src={check} alt='' className={style.ListImagecheckIcon} />
                            <span className={style.ListImageWord}>100% accuracy</span>
                        </div>
                        <img src={down} alt="down Image" className={style.ListImageDownIcon} />
                    </div>
                </div>

            </div>
            <div className={style.ListImageRight}>
                <div className={style.ListImageImageWrapper}>
                    <img src={image} alt="image" className={style.ListImageImage} />
                </div>
            </div>


        </div>
    )
}

export default ListImage