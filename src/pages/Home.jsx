import React from 'react';
import HomeBanner from '../HomeBanner';
import HomeStarCard from '@component/HomeStarCard';
import HomeAbout from '@component/HomeAbout';
import { TextCardContainer } from '@component/ImageTextCard';
import LeftRightCardContainer from '@component/LeftRight';
import WhyBussiness from '@component/WhyBussiness';
import Accounting from '@component/Accounting';

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
  );
};

export default Home;
