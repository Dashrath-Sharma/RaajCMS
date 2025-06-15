import React from 'react';
import heroImage from '../../assets/service/ServiceHero1.png';

export const Hero = () => {
  return (
    <div className="flex w-screen h-screen bg-[#f7fbff]">
      {/* Left Section */}
      <div className="w-[70%] flex flex-col justify-center items-center p-[50px_100px] bg-white">
        <div className="w-full">
          <button className="text-xs font-medium text-[#08306B] leading-[30px] bg-[#E9F2FC] py-[15px] px-[40px] rounded-[10px] mb-5">
            Tax Preparation
          </button>

          <h2 className="text-[40px] font-bold text-[#08306b] leading-[50px]">
            We handle your finances
            <br /> confidentially, professionally,
            <br /> and efficiently.
          </h2>

          <button className="mt-[30px] bg-[#026331] text-white rounded-full px-[60px] py-2 text-[22px] font-[Palanquin]">
            File your <b>Taxes</b>
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="w-[30%] h-full bg-[#08306b] flex justify-end items-end relative rounded-[10px]">
        <img
          src={heroImage}
          alt="service"
          className="h-[80%] object-contain relative left-[10%] z-10"
        />
      </div>
    </div>
  );
};
