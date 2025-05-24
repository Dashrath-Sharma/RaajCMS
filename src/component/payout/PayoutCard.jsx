
import React from 'react'
import style from "../../css/payout/payout.module.css"
import Icon1 from "../../assets/payout/pIcon1.png";
import Icon2 from "../../assets/payout/pIcon2.png";
import Icon3 from "../../assets/payout/pIcon3.png";



export const Card = ({ img, head, title }) => {
    return (
        <div className={style.CardContainer}>
            <img src={img} alt="" className={style.CardImage} />
            <h2 className={style.CradHead}>{head}</h2>
            <p className={style.CradPara}>{title}</p>
        </div>
    )
}
const PayoutCard = () => {
    return (
        <div className={style.payoutCardContainer}>
            <Card img={Icon1} head={"Payroll Made Simple and Stress-Free"} title={"Automate payroll for simplicity and peace of mind, so you can focus on your business."} />
            <Card img={Icon2} head={"Payroll Made Simple and Stress-Free"} title={"Automate payroll for simplicity and peace of mind, so you can focus on your business."} />
            <Card img={Icon3} head={"Payroll Made Simple and Stress-Free"} title={"Automate payroll for simplicity and peace of mind, so you can focus on your business."} />
        </div>
    )
}

export default PayoutCard