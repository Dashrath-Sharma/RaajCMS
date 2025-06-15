import React from 'react';
import heroImage from '../../assets/Accounting/accountpayble.png';

const AmountHome = () => {
  return (
    <div className="w-screen h-[max-content] max-lg:py-[15rem] lg:h-screen bg-[#f7fbff] flex flex-row">
      {/* Left Section - 70% */}
      <div className="w-[90%] lg:w-[70%] flex flex-col justify-center max-lg:mx-auto lg:px-[5%]">
        <div className="w-full lg:w-[85%] max-lg:flex max-lg:flex-col max-lg:items-center max-lg:text-center">
          <p className="font-[Ubuntu] text-3xl lg:text-[12px] font-bold text-[#08306b] leading-[30px] w-fit bg-[#E9F2FC] py-[10px] px-[40px] rounded-[10px]">
            Accounts Payable
          </p>
          <h2 className="font-[Ubuntu] text-8xl lg:text-[40px] font-bold text-[#08306b] leading-[50px] mt-[20px]">
            Reliable Accounts Payable
            <br />
            Services from Trusted Experts
          </h2>
          <p className="font-[Inter] text-5xl lg:text-[20px] font-normal text-[#08519C] mt-[20px]">
            Simplify your accounts payable with expert guidance from Bean Counter, ensuring
            efficient tracking and error detection for smooth financial operations
          </p>
          <button className="bg-[#026331] text-white py-[10px] px-[40px] rounded-[50px] mt-[30px] border-none font-bold text-3xl lg:text-[16px] cursor-pointer">
            Book a Consultation
          </button>
        </div>
      </div>

      {/* Right Section - 30% */}
      <div className="w-[30%] h-full bg-[#08306B] hidden lg:flex justify-center items-center relative">
        <div>
          {/* Hero Image */}
          <img
            src={heroImage}
            alt="hero"
            className="w-full h-full object-contain transform translate-x-[-140px] scale-[1.2] z-[1]"
          />
        </div>
      </div>
    </div>
  );
};

export default AmountHome;
