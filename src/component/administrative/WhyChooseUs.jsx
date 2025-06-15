import React from 'react';
import tickIcon from '../../assets/administatrative/whyUs1.png';
import supportIcon from '../../assets/administatrative/whyUs2.png';
import timeIcon from '../../assets/administatrative/whyUs3.png';

const cards = [
  {
    icon: tickIcon,
    statValue: '99.9%',
    title: 'Accuracy Rate',
    description:
      'Our attention to detail means fewer errors, cleaner records, and confidence in every transaction, backed by a 99.9% accuracy track record.',
  },
  {
    icon: supportIcon,
    statValue: '24/7',
    title: 'Support',
    description:
      'Whether it’s a quick question or urgent admin help, our team is available around the clock with an average response time under 1 hour.',
  },
  {
    icon: timeIcon,
    statValue: '100%',
    title: 'On-Time Delivery',
    description:
      'From monthly reports to daily tasks, we deliver consistently, meeting deadlines every time, without exceptions.',
  },
];

const WhyChooseUs = () => {
  return (
    <div className="bg-[#e9f2fc] sm:px-[30px] py-[50px] rounded-[16px]">
      <div className="w-full px-4 mx-auto max-w-screen-xl">
        <div className="flex justify-between items-center flex-wrap mb-[40px] max-md:flex-col max-md:gap-[20px] max-md:text-center">
          <h2 className="text-[28px] font-bold text-[#08306b]">Why choose us ?</h2>
          <button className="bg-[#1c8c4c] text-white border-none px-[24px] py-[12px] text-[1.1rem] rounded-[20px] cursor-pointer font-semibold">
            Schedule an expert call
          </button>
        </div>

        <div className="flex justify-between flex-wrap gap-[20px] max-md:flex-col max-md:items-center">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-[#08306b] text-white px-[50px] py-[30px] rounded-[16px] flex flex-col items-center text-center min-h-[380px] flex-1 min-w-[250px] max-w-[320px] xl:min-w-[300px] xl:max-w-[350px]"
            >
              <img src={card.icon} alt="icon" className="w-[60px] h-[60px] mb-[10px]" />
              <h3 className="text-[20px] font-bold mb-[10px] leading-[1.4]">
                <span className="text-5xl font-[Ubuntu]">{card.statValue}</span>
                <br />
                {card.title}
              </h3>
              <p className="mt-2 text-[1rem] leading-[1.6] font-[Inter]">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
