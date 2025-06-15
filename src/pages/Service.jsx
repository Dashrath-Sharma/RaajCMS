import React from 'react';
import ServiceHome from '../component/Service/ServiceHome';
import ServiceCheck from '../component/Service/ServiceCheck';
import NoTax from '../component/Service/NoTax';
import Serving from '../component/Service/Serving';
import NewBussiness from '../component/Service/NewBussiness';

const data = [
  {
    title: 'In-person consultation',
    description: 'Schedule an appointment or walk in',
    badge: null,
  },
  {
    title: 'Remote assistance',
    description: 'Book an Introductory Call',
    badge: (
      <span className="px-4 bg-secondary py-2 rounded-full !text-white my-2 sm:my-0 inline-block sm:inline">
        Get started now
      </span>
    ),
  },
  {
    title: 'Drop-off service',
    description: 'Submit your documents at an office.',
    badge: null,
  },
];

const Service = () => {
  return (
    <div>
      <ServiceHome />
      <ServiceCheck />
      <NoTax />
      <Serving />
      <NewBussiness
        title={
          <>
            How would you like to get started
            <br />
            with your tax filing?
          </>
        }
        data={data}
      />
    </div>
  );
};

export default Service;
