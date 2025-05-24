import React from 'react';
import style from "../../css/service/newBussiness.module.css";
import kevin from "../../assets/service/kevin.png"
import Icon from "../../assets/service/sIcon.png"



const NewBussiness = () => {
    return (
        <div className={style.NewBussinessContainer}>
            <div className={style.NewBussinessHead}>
                <h2 className={style.NewBussinessHeadTitle}>Ready to form your new business?</h2>
            </div>
            <div className={style.NewBussinessContent}>
                <div className={style.NewBussinessImageContainer}>
                    <img src={kevin} alt="new business" />

                </div>
                <div className={style.NewBussinessContentRight}>
                    <div className={style.NewBussinessContentCard}>
                        <p>Schedule an appoin tment or walk in</p>
                        <img src={Icon} alt="new business" />
                    </div>
                    <div className={style.NewBussinessContentCard}>
                        <p>Schedule an appoin tment or walk in</p>
                        <img src={Icon} alt="new business" />
                    </div>
                    <div className={style.NewBussinessContentCard}>
                        <p>Schedule an appoin tment or walk in</p>
                        <img src={Icon} alt="new business" />
                    </div>

                </div>
            </div>
        </div >
    )
}

export default NewBussiness