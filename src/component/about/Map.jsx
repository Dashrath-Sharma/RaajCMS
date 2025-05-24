import React from 'react'
import style from '../../css/about/map.module.css'
import map1 from '../../assets/about/map1.png'
import map2 from '../../assets/about/map2.png'


const Map = () => {
    return (
        <div>
            <div className={style.MapContainer}>
                <p className={style.MapContainerP}> Location</p>
                <h2 className={style.MapContainerH2}>We have offices in both Palm Springs & Whittier</h2>
                <h2 className={style.MapContainerH2Blue}>We have offices in both Palm Springs & Whittier</h2>
            </div>
            <div className={style.Map}>
                <div className={style.MapDiv} >
                    <img src={map1} alt="map" className={style.MapImg} />
                    <div className={style.MapText}>
                        <p className={style.MapTextP}>Bean Counter</p>
                    </div>
                </div>
                <div className={style.MapDiv}>
                    <img src={map2} alt="map" className={style.MapImg} />
                    <div className={style.MapText}>
                        <p className={style.MapTextP}>Bean Counter</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Map