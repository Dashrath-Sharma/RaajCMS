import React from 'react';
import cardLogo1 from '@assets/businessFormation/launch 1.png';
import cardLogo2 from '@assets/businessFormation/polygon.png';
import cardLogo3 from '@assets/businessFormation/margin.png';
const cardData = [
  {
    img: cardLogo1,
    title: 'Launch your business || in record time',
    description: `With Bean Counter, your formation documents are expertly crafted and filed lightning-fast—often same-day—so you’re up and running without delay.`,
  },
  {
    img: cardLogo2,
    title: 'We shape your || perfect business',
    description: `Bean Counter guides you to the right structure and files it flawlessly—fast, precise, and worry-free, with expert confidence assured.`,
  },
  {
    img: cardLogo3,
    title: 'Slash your || tax burden smartly',
    description: ` Bean Counter crafts your ideal LLC or S Corp setup, unlocking big tax savings with expert guidance—clear, fast, and tailored to you.`,
  },
];
const WhyBeanCounter = () => {
  return (
    <section className='bg-[#eaf2fb] py-16 text-center'>
      <h2 className='text-6xl md:text-4xl font-bold text-main mb-12 font-ubuntu'>
        Why Bean Counter for your small Business?
      </h2>

      <div className='max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4'>
        {cardData.map((data) => (
          <Card {...data} key={data.description} />
        ))}
      </div>

      <button className='mt-12 bg-[#026331] text-white px-10 py-3 rounded-full font-semibold text-lg hover:bg-[#014f27] transition'>
        Get Started
      </button>
    </section>
  );
};

export default WhyBeanCounter;

const Card = ({title, img, description}) => {
  const renderTitle = () => {
    if (title.includes('||')) {
      const parts = title.split('||');
      return (
        <>
          {parts[0]}
          <br />
          {parts[1]}
        </>
      );
    }
    return title;
  };
  return (
    <div className='bg-white rounded-[30px] px-8 py-10 shadow-md'>
      <img className='text-green-800 w-20 h-20 mx-auto mb-8' src={img} />
      <h3 className='text-4xl text-main mb-8 font-ubuntu font-bold'>
        {renderTitle()}
      </h3>
      <p className='text-main text-xl font-thin font-inter'>{description}</p>
    </div>
  );
};
