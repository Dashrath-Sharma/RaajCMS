import React from 'react';
import style from '../../css/amount/listIcon.module.css';
import tickIcon from '../../assets/amount/checkmarkList.png';
import bannerImage from '../../assets/amount/listImage.png';

const points = [
    "Carefully review and validate your invoices for accuracy and authenticity.",
    "Build customized workflows to manage and control your payment process:",
    "Deliver real-time accounts payable aging reports for better visibility and cash flow",
    "Monitor compliance with vendor terms to keep your payments aligned and on track"
];

const coreFunctions = [
    "Corporate credit card reconciliations (monthly)",
    "Bill payments and checks via BridgeItonic",
    "AP aging reports with bill reviews",
    "Vendor payment documentation",
    "Balance sheet account reconciliations",
    "Monthly AP reconciliations and journal entries",
    "Accurate payroll & timesheet recording",
    "Loan reviews and expense classifications"
];

const ListIcon = () => {
    return (
        <div>
            <div className={style.container}>
                <h2 className={style.title}>
                    Improved accuracy and efficiency <br />
                    in managing outgoing payments
                </h2>
                <p className={style.subtitle}>
                    Streamline your accounts payable process with improved oversight, faster approvals, and fewer errors.
                </p>

                <div className={style.content}>
                    <div className={style.styledContainer}>
                    <h2 className={`${style.title} ${style.listTitle}`}>
                    How We Work for You
                </h2>
                    <ul className={style.points}>
                        {points.map((point, idx) => (
                            <li key={idx} className={style.border}>
                                <img src={tickIcon} alt="tick" className={style.tick} />
                                <span className={style.list}>{point}</span>
                            </li>
                        ))}
                    </ul>
                    </div>
                    <div className={style.imageWrapper}>
                        <img src={bannerImage} alt="Team working" className={style.image} />
                    </div>
                </div>

                <div className={`${style.content} ${style.contentReverse}`}>
                    <div className={style.styledContainer}>
                    <h2 className={`${style.title} ${style.listTitle}`}>
                    What You Get in Return
                </h2>
                    <ul className={style.points}>
                        {points.map((point, idx) => (
                            <li key={idx} className={style.border}>
                                <img src={tickIcon} alt="tick" className={style.tick} />
                                <span className={style.list}>{point}</span>
                            </li>
                        ))}
                    </ul>
                    </div>
                    <div className={style.imageWrapper}>
                        <img src={bannerImage} alt="Team working" className={style.image} />
                    </div>
                </div>
            </div>

            {/* Side List Section */}
            <div className={style.sideList}>
                <h3 className={style.sideTitle}>Core Accounts Payable Functions We Handle</h3>
                <ul className={style.sideListContent}>
                    {coreFunctions.map((func, idx) => (
                        <li key={idx}>
                            <img src={tickIcon} alt="tick" className={style.tick} />
                            <span>{func}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Footer Section */}
            <div className={style.footer}>
                <div className={style.footerText}>
                    <h4>Built on Top Accounting Softwares</h4>
                </div>
                <div className={style.footerLogo}>
                    <div className={style.logoBox}>Logos</div>
                </div>
            </div>
        </div>
    );
};

export default ListIcon;
