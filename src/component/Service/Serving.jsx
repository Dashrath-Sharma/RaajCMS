import React from 'react';
import star from '../../assets/service/Star.png';
import image from '../../assets/service/serviceCard.png';

const Serving = () => {
  return (
    <div className="bg-white px-[50px] py-[100px] flex justify-center flex-col md:flex-row gap-6 md:gap-[50px] w-screen">
      <div className="md:w-[30%] flex items-center justify-center">
        <h2 className="font-ubuntu text-8xl md:text-[45px] font-bold text-main text-center md:text-start mb-8 md:mb-0">
          Serving Elite <br />
          Entrepreneurs Like You
        </h2>
      </div>

      <div className="md:w-[55%] bg-[#e9f2fc] flex p-[30px_40px] rounded-[60px] gap-4 flex-col lg:flex-row lg:gap-16">
        <div className="flex flex-col items-center justify-center gap-2 w-full">
          <img
            src={image}
            alt="profile image"
            className="w-[120px] h-[120px] lg:w-[90px] lg:h-[90px]"
          />
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center gap-[2px]">
              {Array(5)
                .fill()
                .map((_, i) => (
                  <img
                    key={i}
                    src={star}
                    alt="star"
                    className="w-[15px] h-[15px]"
                    style={{
                      filter:
                        'brightness(0) saturate(100%) invert(26%) sepia(99%) saturate(749%) hue-rotate(91deg) brightness(93%) contrast(92%)',
                    }}
                  />
                ))}
            </div>
          </div>
          <p className="font-inter text-xl md:text-base font-medium leading-[30px] text-main text-center">
            -Oscar Flink
          </p>
        </div>

        <div className="flex items-center justify-center">
          <p
            style={{ wordSpacing: 12 }}
            className="font-inter text-2xl sm:text-[20px] font-bold leading-[30px] text-main"
          >
            “Kevin and his team are just incredible, professional, friendly and extremely
            knowledgeable. Kevin has helped us with our LLC and personal taxes for two years and has
            created a new accounting system to simplify our life.”
          </p>
        </div>
      </div>
    </div>
  );
};

export default Serving;
