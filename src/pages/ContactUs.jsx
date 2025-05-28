import React from 'react'
import style from "../css/contact/contact.module.css"
import image from "../assets/contact/Basemap.png";
import image1 from "../assets/contact/calendrly.png";

const ContactUs = () => {
    return (
        <div className={style.ContactUsCOntainer}>
            <div className={style.ContactUsHeadingContainer}>
                <h1 className={style.ContactUsHeading}>Contact Us</h1>
            </div>
            <div className={style.ContactUsFormContainer}>
                <div className={style.ContactUsFormPara}>
                    <h2 className={style.head}>Don’t Hesitate to Reach Out</h2>
                    <p className={style.para}>
                        Need directions, have a question, or just want to say hello?
                    </p>
                    <p className={style.para}> Reach out to us today; we’re here to assist</p>
                </div>
                <div className={style.ContactUsForm}>
                    <h3 className={style.formHead}>Book your free one-hour session</h3>
                    <form className={style.ContactUsFormInputContainer}>
                        <div className={style.ContactUsFormInput}>
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" required className={style.Input} />
                        </div>
                        <div className={style.ContactUsFormInput}>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" required className={style.Input} />
                        </div>
                        <div className={style.ContactUsFormInput}>
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" rows="4" required></textarea>
                        </div>
                        <div className={style.ContactUsFormInput}>
                            <label>Business Type</label>
                            <div className={style.radioGroup}>
                                <div>
                                    <input type="radio" id="company" name="businessType" value="company" required className={style.Radio} />
                                    <label htmlFor="company">Company</label>
                                </div>
                                <div>
                                    <input type="radio" id="soloTrader" name="businessType" value="soloTrader" required />
                                    <label htmlFor="soloTrader">Solo Trader</label>
                                </div>
                            </div>
                        </div>

                        <button type="submit" className={style.ContactUsFormButton}>Send Message</button>
                    </form>

                </div>

            </div>

            <div className={style.ContactUsFooterMap}>
                <div className={style.MapLeft}>
                    <div>
                        <h3>Palm Springs WQ</h3>
                        <p>353 Sacramento St., Suite 1900 San Francisco CA 94111</p>
                        <img src={image} />
                    </div>
                    <div>
                        <h3>Palm Springs WQ</h3>
                        <p>353 Sacramento St., Suite 1900 San Francisco CA 94111</p>
                        <img src={image} />
                    </div>
                </div>
                <div className={style.MapRight}>
                    <img src={image1} />
                </div>


            </div>

        </div>
    )
}

export default ContactUs