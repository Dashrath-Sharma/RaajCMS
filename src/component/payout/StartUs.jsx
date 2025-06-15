import React from 'react';

const StartUsCard = ({ img, head, text, levitate }) => {
  return (
    <div
      className={`max-w-[300px] md:max-w-none md:w-[30.33%] min-h-[400px] flex flex-col items-center justify-center gap-[20px] bg-[#f7fbff] rounded-[50px] p-[30px] box-border ${levitate ? 'md:-translate-y-10' : ''}`}
    >
      <div className="h-[20%]">
        <img src={img} alt="image" className="w-full h-full object-cover" />
      </div>
      <h3 className="font-[Ubuntu] text-5xl md:text-2xl font-semibold text-main text-center">{head}</h3>
      <p className="font-[Inter] text-main text-3xl md:text-xl font-normal text-center">{text}</p>
    </div>
  );
};

const StartUs = ({ data }) => {
  return (
    <div className="bg-main px-8 sm:px-[50px] py-[50px]">
      <div className="w-full px-4 mx-auto max-w-screen-xl flex flex-col items-center justify-between gap-[20px]">
        <h2 className="font-[Ubuntu] text-base sm:text-4xl font-semibold text-white mb-24">
          Get Started
        </h2>
        <div className="flex gap-[20px] justify-center flex-wrap flex-col md:flex-row">
          {data.map((item, index) => (
            <StartUsCard
              key={index}
              img={item.img}
              head={item.head}
              text={item.text}
              levitate={item.levitate}
            />
          ))}
        </div>
        <div className="flex mt-8">
          <button className="bg-[#026331] text-white px-[35px] py-[13px] rounded-[32px] font-[Ubuntu] font-semibold">
            Book a Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartUs;
