import React from 'react';
import down from '@assets/payout/down.png';
import check from '@assets/payout/checkmark.png';
import image from '@assets/payout/ladyPayout.png';

const cardData = ['100% accuracy', 'On-time, every time', 'No Surprises'];

const ListImage = () => {
  return (
    <div className="flex items-center justify-center bg-main text-white px-8 sm:px-[50px] pb-[100px] pt-[150px] gap-[40px] 2xl:gap-[140px] font-ubuntu flex-col-reverse lg:flex-row">
      <div className="flex-1 w-full lg:w-1/2 md:max-w-[450px]">
        <h2 className="font-[Ubuntu] text-5xl text-center md:text-start font-semibold text-white">
          For every payroll run, we deliver:
        </h2>
        <div className="flex flex-col items-center gap-5 w-full mt-4">
          {cardData.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center w-full gap-5 p-[10px] border-b border-white"
            >
              <div className="flex items-center gap-2 flex-1">
                <img src={check} alt="" className="shrink-0" />
                <span className="font-[Inter] text-4xl font-semibold text-white truncate">
                  {item}
                </span>
              </div>
              <img src={down} alt="down Image" className="shrink-0" />
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center lg:w-1/2 md:max-w-[450px] pt-10">
        <div className="flex items-center justify-center">
          <div className="relative">
            <div className="absolute top-[40px] z-[2] text-white font-island-moments leading-[1] flex flex-col items-center right-0 translate-x-1/2 bg-main pb-[10px]">
              <span className="font-island text-13xl">Ana</span>
              <span className="font-bold text-2xl lg:text-5xl font-ubuntu">Ana Bautier</span>
            </div>

            <div className="w-[70vw] h-[65vw] sm:w-[45vw] sm:h-[40vw] md:w-[35vw] md:h-[30vw] lg:w-[30vw] lg:h-[28vw] border-[10px] border-white rounded-[40px]"></div>

            <img
              src={image}
              alt="Ana Bautier"
              className="w-[calc(100%-20px)] absolute bottom-[10px] left-[10px] z-[5] rounded-b-[30px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListImage;
