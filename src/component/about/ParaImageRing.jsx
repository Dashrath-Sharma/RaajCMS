import React from 'react';
import kevin from '../../assets/about/kevin.png'; // Update path if needed

const ParaImageRing = () => {
  return (
    <div className="flex items-center bg-main text-white sm:px-[50px] py-[50px] gap-[40px] font-ubuntu flex-col lg:flex-row">
      <div className="flex items-center justify-center lg:w-1/2 pt-10">
        <div className="flex items-center justify-center">
          <div className="relative">
            <div className="absolute top-[40px] z-[2] text-white font-island-moments leading-[1] flex flex-col items-center -translate-x-1/2 bg-main pb-[10px]">
              <span className="font-island text-13xl">Kevin</span>
              <span className="font-bold text-2xl lg:text-5xl font-ubuntu">Kevin Bautier</span>
            </div>

            <div className="w-[70vw] h-[65vw] sm:w-[45vw] sm:h-[40vw] md:w-[35vw] md:h-[30vw] lg:w-[30vw] lg:h-[28vw] border-[10px] border-white rounded-[40px]"></div>

            <img
              src={kevin}
              alt="Kevin Bautier"
              className="w-[calc(100%-20px)] absolute bottom-0 sm:left-[-8px] z-[5] rounded-b-[90px] rounded-bl-[80px]"
            />
          </div>
        </div>
      </div>

      <div className="flex-1 lg:w-1/2">
        <div className="text-[3.25rem] font-bold mb-[15px] text-center lg:text-start leading-[50px]">
          President
        </div>
        <div className="font-inter text-[1.5rem] leading-[1.8] font-light mx-auto lg:mx-0 w-[80%] text-center lg:text-start ">
          Mr. Kevin Bautier is the President of Bean Counter and CEO of Bridgelinto, leading these
          firms with a fresh vision for accounting and business services. A University of California
          alum, Kevin brings a solid background in business management to his roles.
        </div>
      </div>
    </div>
  );
};

export default ParaImageRing;
