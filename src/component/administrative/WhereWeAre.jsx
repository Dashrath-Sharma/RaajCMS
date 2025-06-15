import React from 'react';
import image from '../../assets/administatrative/WeAreImage.png';

export const WhereWeAre = () => {
  return (
    <div className="w-full bg-main px-4 sm:px-[50px]">
      <div className="w-full py-12 flex items-center justify-between flex-col md:flex-row gap-12 mx-auto max-w-screen-xl">
        <div className="max-w-[350px] md:w-2/5 md:max-w-[600px] flex justify-center items-center">
          <img src={image} alt="Where We Are" className="w-full h-auto object-contain" />
        </div>
        <div className="md:w-2/5 max-w-[600px] flex flex-col items-center md:items-start gap-5">
          <h2 className="font-ubuntu font-bold text-[40px] leading-[50px] text-white text-left m-0">
            Where we are?
          </h2>
          <p className="font-inter font-normal text-center md:text-start text-base leading-6 text-white m-0">
            Bean Counter is based in California and proudly provides accounting and administrative
            support to businesses across the state and throughout the U.S. Whether you're located in
            Los Angeles, San Diego, San Francisco, or anywhere in between, our team delivers
            reliable, responsive service tailored to your needs.
          </p>
          <div className="flex flex-col gap-2.5 w-fit">
            <button className="w-full min-w-max px-[30px] py-[15px] text-base leading-none rounded-full flex items-center justify-center whitespace-nowrap bg-[#026331] text-white border-none mt-5 hover:brightness-95 hover:shadow-md transition-all duration-300">
              Talk to an Advisor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
