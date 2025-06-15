import React, { useEffect, useState } from 'react';
import logo from '@assets/logo.png';
import arrow from '@assets/right.png';
import LetMeet from '@assets/LetMeet.png';
import client from '@assets/clientProtal.png';
import { Link, useLocation } from 'react-router-dom';
import Booking from '../Booking';

const conditionalBlock = ['/faq', '/contact', '/resources'];

const DesktopNav = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const linkClass =
    "relative text-[#08306b] font-medium text-base px-4 py-2 inline-flex items-center gap-2 before:content-[''] before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:w-full before:h-[2px] before:bg-transparent after:content-[''] after:absolute after:bottom-0 after:right-0 after:w-0 after:h-[2px] after:bg-[#08306b] after:transition-all after:duration-300 hover:after:left-0 hover:after:right-auto hover:after:w-full";

  return (
    <>
          {conditionalBlock.includes(currentPath) && <div className="h-[80px] w-full hidden lg:block" />}
      <div
        className={`hidden lg:flex fixed top-0 left-0 w-full justify-between items-center px-8 py-4 z-[1000] transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : ''
        }`}
        >
        <div className="flex items-center flex-1">
          <Link to="/">
            <img className="h-10 w-auto" src={logo} alt="logo" />
          </Link>
          <div className="flex flex-1 justify-center gap-8">
            {/* SERVICES */}
            <div className="relative group">
              <span className="text-[#08306b] font-medium text-base px-4 py-2 cursor-pointer inline-flex items-center gap-2 relative">
                SERVICES
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-3 h-3 transition-transform duration-300 group-hover:rotate-90"
                />
              </span>
              <div className="fixed top-[80px] left-0 right-0 w-full bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[999]">
                <Booking />
              </div>
            </div>

            <Link to="/carrer" className={linkClass}>
              CARRERS
            </Link>
            <Link to="/payout" className={linkClass}>
              PAYOUT
            </Link>

            {/* RESOURCES */}
            <div className="relative group">
              <span className="text-[#08306b] font-medium text-base px-4 py-2 cursor-pointer inline-flex items-center gap-2 relative">
                RESOURCES
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-3 h-3 transition-transform duration-300 group-hover:rotate-90"
                />
              </span>
              <div className="fixed top-[80px] left-0 right-0 w-full bg-white shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[999]">
                <Booking />
              </div>
            </div>

            <Link to="/contact" className={linkClass}>
              CONTACT US
            </Link>
            <Link to="/about" className={linkClass}>
              ABOUT US
            </Link>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 items-center w-[calc(30%-12px)] justify-end max-md:hidden">
          <button className="flex items-center gap-2 px-6 py-3 bg-[#f7fbff] text-[#08306b] text-sm font-medium rounded-[42px] hover:translate-y-[-2px] hover:shadow-md transition-all duration-300">
            <img src={LetMeet} alt="Let's Meet" />
            <p>LET'S MEET!</p>
          </button>
          <button className="flex items-center gap-2 px-6 py-3 bg-[#026331] text-white text-sm font-medium rounded-[42px] hover:translate-y-[-2px] hover:shadow-md transition-all duration-300">
            <img src={client} alt="Client Portal" />
            <p>CLIENT PORTAL</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default DesktopNav;
