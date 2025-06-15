import React from 'react';
import mission from '../../assets/about/mission.png';
import vision from '../../assets/about/binoculars.png';
import checkmark from '../../assets/about/checkmark.png';

const cardData = [
  {
    img: mission,
    title: 'Mission',
    height: 245,
    content: [
      'Deliver full accounting services that help clients flourish.',
      'Keep financial records sharp to ensure businesses run smoothly.',
      'Customize support for each client to help them achieve their goals.',
      'Always go the extra mile to build trust and strong relationships.',
      'Work as a team to provide top-notch service.',
    ],
  },
  {
    img: vision,
    title: 'Vision',
    height: 225,
    content: [
      "Stay ahead with smart solutions that respond to clients' changing needs.",
      'Aim to be the best in providing reliable and comprehensive financial services.',
      'Grow with our clients by adapting our services as their businesses expand.',
      'Guide our clients towards a prosperous future with effective planning and support.',
    ],
  },
];

const OurValueCard = ({ img, title, content, height }) => {
  return (
    <div className="w-[45vw] flex flex-col items-center justify-center transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] will-change-transform z-0 hover:translate-y-[-10px] hover:scale-[1.045] hover:z-[2]">
      <button className="bg-[var(--secondary-color)] border-none outline-none cursor-pointer flex flex-row items-center justify-center gap-[20px] my-[10px] py-[8px] px-[40px] rounded-full">
        <img src={img} alt="" className="w-[20px] h-[20px]" />
        <h3 className="font-ubuntu text-[1.25rem] font-semibold text-white leading-[30px]">
          {title}
        </h3>
      </button>

      <div
        className="bg-main flex flex-col py-[30px] px-[60px] rounded-[20px] gap-[15px] w-full overflow-y-auto scrollbar-hide"
        style={{
          height: `${height}px`,
          overflowY: 'auto',
          msOverflowStyle: 'none', // IE and Edge
          scrollbarWidth: 'none', // Firefox
        }}
      >
        {content.map((text, index) => (
          <span key={text + index}>
            <div className="flex flex-row items-center self-start gap-[10px]">
              <img src={checkmark} alt="" />
              <p className="font-ubuntu text-[1rem] font-normal text-white leading-[20px]">
                {text}
              </p>
            </div>
            {index + 1 < content.length && (
              <div className="ml-[35px] w-[calc(100%-30px)] h-[0.5px] bg-white mt-[15px]" />
            )}
          </span>
        ))}
      </div>
    </div>
  );
};

const OurValue = () => {
  return (
    <div className="bg-[#e9f2fc] w-screen py-[50px] px-[50px] flex items-center justify-center flex-col gap-[30px]">
      <h2 className="font-ubuntu text-8xl mb-8 font-semibold text-main">Our Values</h2>
      {cardData.map((data, index) => (
        <OurValueCard {...data} key={index + data.title} />
      ))}
    </div>
  );
};

export default OurValue;
