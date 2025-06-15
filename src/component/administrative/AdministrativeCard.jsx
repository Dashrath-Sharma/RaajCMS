import React from 'react';
import icon1 from '../../assets/administatrative/admn1.png';
import icon2 from '../../assets/administatrative/admn2.png';
import icon3 from '../../assets/administatrative/admn3.png';
import icon4 from '../../assets/administatrative/admn4.png';

const data = [
  {
    icon: icon1,
    title: 'Executive & Virtual<br />Assistance',
  },
  {
    icon: icon2,
    title: 'Office & Operations<br />Management',
  },
  {
    icon: icon3,
    title: 'Financial & Bookkeeping<br />Support',
  },
  {
    icon: icon4,
    title: 'HR & Employee<br />Admin',
  },
];

const parseTitle = title => {
  return title.split('<br />').map((part, index, array) => (
    <React.Fragment key={index}>
      {part}
      {index < array.length - 1 && <br />}
    </React.Fragment>
  ));
};

const AdministrativeCard = () => {
  return (
    <div className="bg-main sm:px-[50px] py-[50px]">
      <div className="w-full px-4 mx-auto max-w-screen-xl flex flex-wrap gap-5">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex-1 min-w-[calc(50%-20px)] max-md:min-w-full bg-[#08519c] rounded-[12px] p-[20px] flex flex-col items-center text-white text-center shadow-md transition-transform duration-300 ease-in-out"
          >
            <img src={item.icon} alt={item.title} className="w-[40px] h-[40px] mb-[16px]" />
            <h3 className="font-[Inter] font-medium text-[1.25rem] leading-[25px] text-white mb-[10px]">
              {parseTitle(item.title)}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdministrativeCard;
