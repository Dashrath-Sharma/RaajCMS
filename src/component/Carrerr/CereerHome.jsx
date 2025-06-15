import React from 'react';
import heroImage from '@assets/carrer/CarrerProfileImage.png';

const CareerHome = () => {
  return (
    <div className="flex w-screen h-[max-content] lg:h-screen bg-[#f7fbff] relative">
      <div className="w-[90%] mx-auto lg:mx-none lg:w-[70%] flex flex-col justify-center items-center py-[15rem] lg:px-[50px] lg:pt-[100px] lg:pb-[50px]">
        <div className="w-full lg:w-[85%] max-lg:flex max-lg:flex-col max-lg:items-center max-lg:text-center">
          {/* Career Button */}
          <button className="font-[Ubuntu] text-3xl lg:text-[12px] font-bold text-[#08306b] leading-[30px] bg-[#E9F2FC] py-[10px] px-[40px] rounded-[10px] border-none mb-[20px] cursor-pointer">
            Career
          </button>

          <h2 className="font-[Ubuntu] text-8xl lg:text-[40px] font-bold text-[#08306b] leading-[50px]">
            Where Passion Meets Purpose, <br />
            Join a Team That Cares
          </h2>

          <p className="font-[Inter] font-normal text-5xl lg:text-[18px] leading-[30px] text-[#08519C] mt-[10px] w-[60%] mb-[20px]">
            Discover a career where your passion drives purpose and your work makes a difference.
          </p>

          <button className="bg-[#026331] border-none rounded-[50px] text-white py-[15px] px-[45px] mt-[30px] cursor-pointer font-[Palanquin Dark] font-normal text-3xl lg:text-[16px] w-fit">
            Apply Now
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="hidden lg:flex w-[30%] bg-[#08306b] justify-start items-center relative">
        {/* Image Wrapper */}
        <div className="relative left-[-70%] w-[600px] h-[600px] rounded-[40px]">
          {/* Hero Image */}
          <img
            src={heroImage}
            alt="career"
            className="w-[159%] h-[129%] object-contain z-[2] absolute bottom-[-127px] left-[50%] translate-x-[-45%]"
          />
        </div>
      </div>
    </div>
  );
};

export default CareerHome;
