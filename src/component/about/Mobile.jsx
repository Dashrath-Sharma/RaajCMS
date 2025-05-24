import React from 'react';
import mobile from '../../assets/about/mobile.png';
import logo from '../../assets/about/quickBook.png';
import style from '../../css/about/mobile.module.css';

const Mobile = () => {
    return (
        <div className={style.mobile}>
            <div className={style.mobileContainer}>
                <div className={style.phoneFrame}>
                    <img
                        src={mobile}
                        alt="Mobile Frame"
                        className={style.frameImage}
                    />
                    <div className={style.screen}>
                        <div className={style.header}>
                            <p>
                                <strong>Kevin D.</strong><br />
                                President
                            </p>
                            <img src={logo} alt="QuickBooks Logo" className={style.logo} />
                        </div>

                        <h2 className={style.subTitle}>SERVICES</h2>

                        <div className={style.serviceList}>
                            <div className={style.serviceItem}><span className={style.dot}></span> TAXES</div>
                            <div className={style.serviceItem}><span className={style.dot}></span> BOOKKEEPING</div>
                            <div className={style.serviceItem}><span className={style.dot}></span> PAYROLL</div>
                            <div className={style.serviceItem}><span className={style.dot}></span> ACCOUNTING</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={style.content}>
                <h2 className={style.title}>Taking Your Books Off<br />Your Plate</h2>
                <p className={style.description}>
                    Small business owners juggle countless tasks daily, and accounting often steals time from more critical priorities.
                    Our firm steps in to manage the numbers, helping owners focus on their goals with less stress. With 18 years of experience, we’ve served many clients, including over 60 restaurants in Palm Springs.
                </p>
            </div>
        </div>
    );
};

export default Mobile;
