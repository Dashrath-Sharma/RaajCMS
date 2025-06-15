import React from 'react';
import style from '../css/booking.module.css';
import image from '../assets/bookingImage.png'; // Adjust the path as necessary
import icon from '../assets/booking1.png'; // Adjust the path as necessary
import icon2 from '../assets/booking2.png'; // Adjust the path as necessary

const Booking = () => {
  return (
    // <div className={style.bookingContainer}>
    //     <div className={style.sectionsWrapper}>
    //         {/* Bookkeeping Section */}
    //         <div className={style.section}>
    //             <h3>Bookkeeping</h3>
    //             <ul className={style.list}>
    //                 <li>
    //                     <span>
    //                         <img src={icon} alt="icon" className={style.icon} />
    //                     </span>
    //                     <div>
    //                         <p className={style.subText}>Accounting</p >
    //                         <p className={style.text}>Your Accounting Experts</p>
    //                     </div>
    //                 </li>
    //                 <li>
    //                     <img src={icon2} alt="icon" className={style.icon} />
    //                     <div>
    //                         <p className={style.subText}>Tax Preparation</p >
    //                         <p className={style.text}> Stress-Free Tax Filing</p>
    //                     </div>
    //                 </li>
    //                 <li>
    //                     <img src={icon2} alt="icon" className={style.icon} />

    //                     <div>
    //                         <p className={style.subText}>Accounts Payable</p>
    //                         <p className={style.text}>Efficient Payment Management</p>
    //                     </div>
    //                 </li>
    //             </ul>
    //         </div>

    //         {/* Business Services Section */}
    //         <div className={style.section}>
    //             <h3>Business Services</h3>
    //             <ul className={style.list} >
    //                 <li>
    //                     <img src={icon2} alt="icon" className={style.icon} />

    //                     <div>
    //                         <p className={style.subText}>Administrative Tasks</p>
    //                         <p className={style.text} >Reliable Administrative Supports</p>
    //                     </div>
    //                 </li>
    //                 <li>
    //                     <img src={icon2} alt="icon" className={style.icon} />

    //                     <div>
    //                         <p className={style.subText}>Business Formation</p>
    //                         <p className={style.text}>Start Your Business Right</p>
    //                     </div>
    //                 </li>
    //                 <li>
    //                     <img src={icon2} alt="icon" className={style.icon} />

    //                     <div>
    //                         <p className={style.subText}>Payroll</p>
    //                         <p className={style.text}>Accurate Payroll Made Easy</p>
    //                     </div>
    //                 </li>
    //             </ul>
    //         </div>

    //         {/* Recent News Section */}
    //         <div className={style.recentNews}>
    //             <h3 className={style.title}>Recent News</h3>

    //             <div className={style.newsCard}>
    //                 <div className={style.imageBtn}>
    //                     <img src={image} alt="news 1" className={style.image} />
    //                     <button className={style.btn}>File Now</button>
    //                 </div>
    //                 <div>
    //                     <strong className={style.imageHead}>DEADLINE</strong>
    //                     <p className={style.imagePara}>June 16, 2025</p>
    //                     <p className={style.text}>Accounting & Data in Modern Family Office</p>

    //                 </div>
    //             </div>

    //             <div className={style.newsCard}>
    //                 <div className={style.imageBtn}>
    //                     <img src={image} alt="news 1" className={style.image} />
    //                     <button className={style.btn}>File Now</button>
    //                 </div>
    //                 <div>
    //                     <strong className={style.imageHead}>FREE Download</strong>
    //                     <p className={style.imagePara}>2024-2025 Tax Estimator</p>
    //                     <p className={style.text}> estimated refunds & taxes.</p>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>

    <div className="bg-[#e9f2fc] p-5 md:px-[50px] w-full shadow-md box-border">
      <div className="flex flex-wrap gap-8 max-w-[1200px] mx-auto box-border">
        {/* Bookkeeping Section */}
        <div className="flex-1 min-w-[300px] box-border">
          <h3 className="font-ubuntu font-bold text-2xl capitalize text-main">Bookkeeping</h3>
          <ul className="mt-2 list-none p-0 m-0">
            <li className="flex items-center gap-2 mb-4 p-2.5 rounded-lg transition-colors hover:bg-main cursor-pointer group/li">
              <span>
                <img
                  src={icon}
                  alt="icon"
                  className="w-[25px] h-[25px] mr-[5px] group-hover/li:brightness-0 group-hover/li:invert"
                />
              </span>
              <div>
                <p className="font-ubuntu font-bold text-base capitalize text-main group-hover/li:text-white transition-colors">
                  Accounting
                </p>
                <p className="font-inter font-normal text-xs text-main group-hover/li:text-white mt-2 transition-colors">
                  Your Accounting Experts
                </p>
              </div>
            </li>
            <li className="flex items-center gap-2 mb-4 p-2.5 rounded-lg transition-colors hover:bg-main cursor-pointer group/li">
              <img
                src={icon2}
                alt="icon"
                className="w-[25px] h-[25px] mr-[5px] group-hover/li:brightness-0 group-hover/li:invert"
              />
              <div>
                <p className="font-ubuntu font-bold text-base capitalize text-main group-hover/li:text-white transition-colors">
                  Tax Preparation
                </p>
                <p className="font-inter font-normal text-xs text-main group-hover/li:text-white mt-2 transition-colors">
                  Stress-Free Tax Filing
                </p>
              </div>
            </li>
            <li className="flex items-center gap-2 mb-4 p-2.5 rounded-lg transition-colors hover:bg-main cursor-pointer group/li">
              <img
                src={icon2}
                alt="icon"
                className="w-[25px] h-[25px] mr-[5px] group-hover/li:brightness-0 group-hover/li:invert"
              />
              <div>
                <p className="font-ubuntu font-bold text-base capitalize text-main group-hover/li:text-white transition-colors">
                  Accounts Payable
                </p>
                <p className="font-inter font-normal text-xs text-main group-hover/li:text-white mt-2 transition-colors">
                  Efficient Payment Management
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Business Services Section */}
        <div className="flex-1 min-w-[300px] box-border">
          <h3 className="font-ubuntu font-bold text-2xl capitalize text-main">Business Services</h3>
          <ul className="mt-2 list-none p-0 m-0">
            <li className="flex items-center gap-2 mb-4 p-2.5 rounded-lg transition-colors hover:bg-main cursor-pointer group/li">
              <img
                src={icon2}
                alt="icon"
                className="w-[25px] h-[25px] mr-[5px] group-hover/li:brightness-0 group-hover/li:invert"
              />
              <div>
                <p className="font-ubuntu font-bold text-base capitalize text-main group-hover/li:text-white transition-colors">
                  Administrative Tasks
                </p>
                <p className="font-inter font-normal text-xs text-main group-hover/li:text-white mt-2 transition-colors">
                  Reliable Administrative Supports
                </p>
              </div>
            </li>
            <li className="flex items-center gap-2 mb-4 p-2.5 rounded-lg transition-colors hover:bg-main cursor-pointer group/li">
              <img
                src={icon2}
                alt="icon"
                className="w-[25px] h-[25px] mr-[5px] group-hover/li:brightness-0 group-hover/li:invert"
              />
              <div>
                <p className="font-ubuntu font-bold text-base capitalize text-main group-hover/li:text-white transition-colors">
                  Business Formation
                </p>
                <p className="font-inter font-normal text-xs text-main group-hover/li:text-white mt-2 transition-colors">
                  Start Your Business Right
                </p>
              </div>
            </li>
            <li className="flex items-center gap-2 mb-4 p-2.5 rounded-lg transition-colors hover:bg-main cursor-pointer group/li">
              <img
                src={icon2}
                alt="icon"
                className="w-[25px] h-[25px] mr-[5px] group-hover/li:brightness-0 group-hover/li:invert"
              />
              <div>
                <p className="font-ubuntu font-bold text-base capitalize text-main group-hover/li:text-white transition-colors">
                  Payroll
                </p>
                <p className="font-inter font-normal text-xs text-main group-hover/li:text-white mt-2 transition-colors">
                  Accurate Payroll Made Easy
                </p>
              </div>
            </li>
          </ul>
        </div>

        {/* Recent News Section */}
        <div className="flex-[1.5] min-w-[300px] box-border">
          <h3 className="font-ubuntu font-bold text-2xl capitalize text-main">Recent News</h3>
          <div className="flex border border-[#d1dbe9] rounded-xl mb-4 flex-col md:flex-row p-2">
            <div className="relative flex flex-col items-center gap-2">
              <img
                src={image}
                alt="news 1"
                className="w-full md:w-[200px] h-[150px] md:h-[80px] object-cover rounded-t-xl"
              />
              <button className="bottom-2 right-2 rounded-full px-5 py-1.5 bg-[#026331] text-white text-xs font-palanquin border-none transition-all hover:bg-[#034d25]">
                File Now
              </button>
            </div>
            <div className="px-4 flex-1 box-border flex flex-col">
              <strong className="font-ubuntu font-bold text-2xl capitalize text-main">
                DEADLINE
              </strong>
              <p className="font-ubuntu font-normal text-base text-main">June 16, 2025</p>
              <p className="font-inter font-normal text-sm text-main mt-auto max-w-[85%]">
                Accounting & Data in Modern Family Office
              </p>
            </div>
          </div>

          <div className="flex border border-[#d1dbe9] rounded-xl mb-4 flex-col md:flex-row p-2">
            <div className="relative flex flex-col items-center gap-2">
              <img
                src={image}
                alt="news 1"
                className="w-full md:w-[200px] h-[150px] md:h-[80px] object-cover rounded-t-xl"
              />
              <button className="bottom-2 right-2 rounded-full px-5 py-1.5 bg-[#026331] text-white text-xs font-palanquin border-none transition-all hover:bg-[#034d25]">
                File Now
              </button>
            </div>
            <div className="px-4 flex-1 box-border flex flex-col">
              <strong className="font-ubuntu font-bold text-2xl capitalize text-main">
                FREE Download
              </strong>
              <p className="font-ubuntu font-normal text-base text-main">2024-2025 Tax Estimator</p>
              <p className="font-inter font-normal text-sm text-main mt-auto max-w-[85%]">
                Calculate estimated refunds & taxes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
