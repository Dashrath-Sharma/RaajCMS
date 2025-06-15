import React from 'react';
import AdministrativeHome from '@component/administrative/AdministrativeHome';
import AdministrativeCard from '@component/administrative/AdministrativeCard';
import WhyChooseUs from '@component/administrative/WhyChooseUs';
import { WhereWeAre } from '@component/administrative/WhereWeAre';
import { HireDirectly } from '@component/administrative/HireDirectly';
import StartUs from '@component/payout/StartUs';

// get images for Get Started Section
import image1 from '../assets/payout/timetable.png';
import image2 from '../assets/payout/discuss.png';
import image3 from '../assets/payout/curiosity.png';

const data = [
  {
    img: image1,
    head: 'Schedule your free consultation',
    text: 'Speak with our payroll specialists about your Business & payroll needs and receive a personalized payroll quote during your first call.',
  },
  {
    img: image2,
    head: 'Meet your  Payroll Expert',
    levitate: true,
    text: 'Based on your unique business payroll needs, you ll be matched with a payroll expert who will provide personalized service and support.',
  },
  {
    img: image3,
    head: 'Be in the Know',
    text: 'Need payroll support? Easily connect with your payroll expert by phone, video call, or in person.',
  },
];

const Administrative = () => {
  return (
    <div>
      <AdministrativeHome />
      <AdministrativeCard />
      <WhyChooseUs />
      <WhereWeAre />
      <HireDirectly />
      <StartUs data={data} />
    </div>
  );
};

export default Administrative;
