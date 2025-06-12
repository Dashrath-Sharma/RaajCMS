import React from 'react'
import style from "../../css/resource/something.module.css"
import ladyImage from "../../assets/resource/ladyDown.png"

const Something = () => {
    return (
        <div className={style.somethingContainer}>
            <div className={style.imageContainer}>
                <img src={ladyImage} alt="Lady" className={style.image} />
            </div>
            <div className={style.inputConatiner}>
                <h2 className={style.title}>Looking for <br />
                    Something Else?</h2>
                <p className={style.description}>
                    If you couldn't locate what you were seeking, please share your thoughts, and we'll strive to provide it as soon as possible
                </p>
                {/* <input type="textarea" className={style.input} placeholder="Add a Comment"  /> */}
                <textarea
                    className={style.input}
                    rows={5}
                    placeholder="Add a Comment"
                    maxLength={1000}
                />
                <button className={style.button}> Send </button>

            </div>
        </div>
    )
}

export default Something