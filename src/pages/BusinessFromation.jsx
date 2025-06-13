import React from 'react';
import {Hero} from '@component/business-fromation/Hero';
import ServiceCheck from '@component/Service/ServiceCheck';
import NewBussiness from '@component/Service/NewBussiness';
import WhyBeanCounter from '@component/business-fromation/WhyBeanCounter';

const BusinessFromation = () => {
  return (
    <>
      <Hero />
      <ServiceCheck />
      <WhyBeanCounter />
      <NewBussiness
        title={
          <>
            Ready to form your
            <br /> new business?
          </>
        }
      />
    </>
  );
};

export default BusinessFromation;
