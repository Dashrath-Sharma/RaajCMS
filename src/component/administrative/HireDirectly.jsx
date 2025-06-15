import React from 'react';
import star from '../../assets/service/Star.png';
import image from '../../assets/service/serviceCard.png';

export const HireDirectly = () => {
  return (
    <div className="bg-[#e9f2fc] py-[100px] px-4 sm:px-[50px] w-full">
      <div className="w-full mx-auto max-w-screen-xl flex justify-center flex-col md:flex-row gap-6 md:gap-[50px]">
        <div className="flex items-center justify-center md:justify-start flex-1">
          <h2 className="font-ubuntu text-[45px] font-bold text-main text-center md:text-start">
            Hear Directly <br />
            from Our <br />
            Clients
          </h2>
        </div>

        <div className="bg-main flex p-[30px_40px] rounded-[60px] gap-4 flex-col lg:flex-row lg:gap-16 flex-1 lg:flex-2 2xl:flex-1">
          <div className="flex flex-col items-center justify-center gap-2 w-full">
            <img
              src={image}
              alt="profile image"
              className="w-[120px] h-[120px] lg:w-[90px] lg:h-[90px]"
            />
            <div className="flex items-center justify-center">
              <div className="flex items-center justify-center gap-[2px]">
                {Array(5)
                  .fill(null)
                  .map((_, i) => (
                    <img
                      key={i}
                      src={star}
                      alt="star"
                      className="w-[15px] h-[15px]"
                      style={{
                        filter:
                          'brightness(0) saturate(100%) invert(86%) sepia(9%) saturate(1437%) hue-rotate(92deg) brightness(103%) contrast(95%)',
                      }}
                    />
                  ))}
              </div>
            </div>
            <p className="font-inter text-base font-medium leading-[30px] text-white text-center">
              -Oscar Flink
            </p>
          </div>

          <div className="flex items-center justify-center">
            <p
              style={{ wordSpacing: 12 }}
              className="font-inter text-[20px] font-bold leading-[30px] text-white"
            >
              “Kevin and his team are just incredible, professional, friendly and extremely
              knowledgeable. Kevin has helped us with our LLC and personal taxes for two years and
              has created a new accounting system to simplify our life.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
