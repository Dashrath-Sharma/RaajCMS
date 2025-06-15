import React from 'react';
import { Hero } from '@component/business-fromation/Hero';
import ServiceCheck from '@component/Service/ServiceCheck';
import NewBussiness from '@component/Service/NewBussiness';
import WhyBeanCounter from '@component/business-fromation/WhyBeanCounter';

const data = [
  {
    title: 'In-person consultation',
    description: 'Schedule an appointment or walk in',
    badge: null,
  },
  {
    title: 'Remote assistance',
    description: 'Collaborate with your tax expert online',
    badge: true,
  },
  {
    title: 'Drop-off service',
    description: 'Submit your documents at an office.',
    badge: null,
  },
];

const BusinessFormation = () => {
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
        data={data}
      />
    </>
  );
};

export default BusinessFormation;
