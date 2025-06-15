import React from 'react';
import AboutHome from '../component/about/AboutHome';
import OurValue from '../component/about/OurValue';
import Mobile from '../component/about/Mobile';
import ParaImage from '../component/about/ParaImage';
import ParaImageRing from '../component/about/ParaImageRing';
import Map from '../component/about/Map';
const About = () => {
  return (
    <div>
      <AboutHome />
      <OurValue />
      <Mobile />
      <ParaImage />
      <ParaImageRing />
      <Map />
    </div>
  );
};

export default About;
