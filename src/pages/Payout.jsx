import React from 'react';
import PayoutHome from '../component/payout/PayoutHome';
import PayoutCard from '../component/payout/PayoutCard';
import ListImage from '../component/payout/ListImage';
import { GreenBox } from '../component/payout/GreenBox';
import StartUs from '../component/payout/StartUs';

// get images for Get Started Section
import image1 from '../assets/payout/timetable.png';
import image2 from '../assets/payout/discuss.png';
import image3 from '../assets/payout/curiosity.png';
import NewBussiness from '@component/Service/NewBussiness';

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

const pointers = [
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

const Payout = () => {
  return (
    <div>
      <PayoutHome />
      <PayoutCard />
      <ListImage />
      <GreenBox />
      <StartUs data={data} />
      <NewBussiness
        title={
          <>
            Want to streamline payroll?
            <br />
            Let's get started.
          </>
        }
        data={pointers}
        invert
      />
    </div>
  );
};

export default Payout;
