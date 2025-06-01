import React from 'react';
import style from "../../css/service/newBussiness.module.css";
import kevin from "../../assets/service/kevin.png"
import Icon from "../../assets/service/sIcon.png"



const NewBussiness = () => {
    return (
        <div className={style.NewBussinessContainer}>
            <div className={style.NewBussinessHead}>
                <h2 className={style.NewBussinessHeadTitle}>How would you like to get started
                    <br />with your tax filing?</h2>
            </div>
            <div className={style.NewBussinessContent}>
                <div className={style.NewBussinessImageContainer}>
                    <img src={kevin} alt="new business" className={style.kevinImage} />

                </div>
                <div className={style.NewBussinessContentRight}>
                    <div className={style.NewBussinessContentCard}>
                        <div className={style.paraText}>
                            <p >In-person consultation</p>
                            <span className={style.NewBussinessContentCardSpan}>Schedule an appointment or walk in</span>
                        </div>
                        <img src={Icon} alt="new business" />
                    </div>
                    <div className={style.NewBussinessContentCard}>
                        <div className={style.paraText}>
                            <p>Remote assistance</p>
                            <span className={style.NewBussinessContentCardSpan}>Book an Introductory Call </span>
                        </div>
                        <img src={Icon} alt="new business" />
                    </div>
                    <div className={style.NewBussinessContentCard}>
                        <div className={style.paraText}>
                            <p>Drop-off service</p>
                            <span className={style.NewBussinessContentCardSpan}>Submit your documents at an office. </span>
                        </div>
                        <img src={Icon} alt="new business" />
                    </div>

                </div>
            </div>
        </div >
    )
}

export default NewBussiness