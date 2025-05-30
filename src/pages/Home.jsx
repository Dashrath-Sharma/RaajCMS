

import HomeBanner from '../HomeBanner';
import React from 'react'
import HomeStarCard from '../component/HomeStarCard'
import HomeAbout from '../component/HomeAbout'
import { TextCardContainer } from '../component/ImageTextCard'
import LeftRightCardContainer from '../component/LeftRight'
import WhyBussiness from '../component/WhyBussiness'
import Accounting from '../component/Accounting'
import HomeNav from '../component/HomeNav'
import Booking from '../component/Booking';

const Home = () => {
    return (
        <div>


            <HomeBanner />
            <HomeStarCard />
            <HomeAbout />
            <TextCardContainer />
            <LeftRightCardContainer />
            <WhyBussiness />
            <Accounting />

        </div>
    )
}

export default Home