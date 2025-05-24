import React from 'react';
import style from '../../css/about/ParaImageRing.module.css';
import kevin from '../../assets/about/kevin.png'; // Update path if needed

const ParaImageRing = () => {
    return (
        <div className={style.ParaImageRingContainer}>
            <div className={style.ParaImageRing}>
                <div className={style.imageWrapper}>
                    <div className={style.signature}>Kevin<br /><span>Bautier</span></div>
                    <div className={style.ring}>
                        <img src={kevin} alt="Kevin Bautier" className={style.profileImg} />
                    </div>
                </div>
            </div>
            <div className={style.info}>
                <div className={style.title}>President</div>
                <div className={style.description}>
                    Mr. Kevin Bautier is the President of Bean Counter and CEO of Bridgelinto, leading these firms with a fresh vision for accounting and business services.
                    A University of California alum, Kevin brings a solid background in business management to his roles.
                </div>
            </div>
        </div>
    );
};

export default ParaImageRing;
