import React from 'react';
import style from '../css/booking.module.css';
import image from "../assets/bookingImage.png"; // Adjust the path as necessary
import icon from "../assets/booking1.png"; // Adjust the path as necessary
import icon2 from "../assets/booking2.png"; // Adjust the path as necessary  

const Booking = () => {
    return (
        <div className={style.bookingContainer}>
            <div className={style.sectionsWrapper}>
                {/* Bookkeeping Section */}
                <div className={style.section}>
                    <h3>Bookkeeping</h3>
                    <ul className={style.list}>
                        <li>
                            <span>
                                <img src={icon} alt="icon" className={style.icon} />
                            </span>
                            <div>
                                <p className={style.subText}>Accounting</p >
                                <p className={style.text}>Your Accounting Experts</p>
                            </div>
                        </li>
                        <li>
                            <img src={icon2} alt="icon" className={style.icon} />
                            <div>
                                <p className={style.subText}>Tax Preparation</p >
                                <p className={style.text}> Stress-Free Tax Filing</p>
                            </div>
                        </li>
                        <li>
                            <img src={icon2} alt="icon" className={style.icon} />

                            <div>
                                <p className={style.subText}>Accounts Payable</p>
                                <p className={style.text}>Efficient Payment Management</p>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Business Services Section */}
                <div className={style.section}>
                    <h3>Business Services</h3>
                    <ul className={style.list} >
                        <li>
                            <img src={icon2} alt="icon" className={style.icon} />

                            <div>
                                <p className={style.subText}>Administrative Tasks</p>
                                <p className={style.text} >Reliable Administrative Supports</p>
                            </div>
                        </li>
                        <li>
                            <img src={icon2} alt="icon" className={style.icon} />

                            <div>
                                <p className={style.subText}>Business Formation</p>
                                <p className={style.text}>Start Your Business Right</p>
                            </div>
                        </li>
                        <li>
                            <img src={icon2} alt="icon" className={style.icon} />

                            <div>
                                <p className={style.subText}>Payroll</p>
                                <p className={style.text}>Accurate Payroll Made Easy</p>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Recent News Section */}
                <div className={style.recentNews}>
                    <h3 className={style.title}>Recent News</h3>

                    <div className={style.newsCard}>
                        <div className={style.imageBtn}>
                            <img src={image} alt="news 1" className={style.image} />
                            <button className={style.btn}>File Now</button>
                        </div>
                        <div>
                            <strong className={style.imageHead}>DEADLINE</strong>
                            <p className={style.imagePara}>June 16, 2025</p>
                            <p className={style.text}>Accounting & Data in Modern Family Office</p>

                        </div>
                    </div>

                    <div className={style.newsCard}>
                        <div className={style.imageBtn}>
                            <img src={image} alt="news 1" className={style.image} />
                            <button className={style.btn}>File Now</button>
                        </div>
                        <div>
                            <strong className={style.imageHead}>FREE Download</strong>
                            <p className={style.imagePara}>2024-2025 Tax Estimator</p>
                            <p className={style.text}> estimated refunds & taxes.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;
