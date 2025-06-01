import React from 'react'
import style from "../../css/service/noTax.module.css"
import icon from "../../assets/service/checkmark.png"

const NoTaxContentLeftItem = ({ title }) => {
    return (
        <div className={style.NoTaxContentLeftItem}>
            <img src={icon} alt='Checkmrak ' className={style.NoTaxContentLeftItemIcon} />
            <span className={style.NoTaxContentLeftItemText}>{title}</span>
        </div>
    )
}

const NoTax = () => {
    return (
        <div className={style.NoTaxContainer}>
            <div className={style.NoTaxHead}>
                <h2 className={style.NoTaxHeadTitle}>No Tax Surprises Us</h2>
                <p className={style.NoTaxHeadDescription}>18 Years of Experience in Tax Complexity for Businesses and Individuals</p>
            </div>
            <div className={style.NoTaxContent}>
                <div className={style.NoTaxContentLeft}>
                    <NoTaxContentLeftItem title="Specialized in Small Business Taxes" />
                    <NoTaxContentLeftItem title="Up-to-Date on US & Californian Tax Laws" />
                    <NoTaxContentLeftItem title="Always Available, Swiftly Responsive" />
                </div>
                <div className={style.NoTaxContentRight}>
                    <NoTaxContentLeftItem title="Trusted and Reputable" />
                    <NoTaxContentLeftItem title="Deadline-Driven for Your Success" />
                    <NoTaxContentLeftItem title="Deadline-Driven for Your Success" />
                </div>
            </div>
            <div className={style.NoTaxButtonContainer}>
                <button className={style.NoTaxButton}>Book an Appointment Today</button>
            </div>

        </div>
    )
}

export default NoTax