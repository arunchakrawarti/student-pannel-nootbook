import Image from 'next/image';
import React from 'react';
import { CgProfile } from "react-icons/cg";

const MarketCard = ({ 
  imgSrc,       
  title, 
  heading, 
  proname, 
  price = "Rs24.92", 
  originalPrice = "Rs32.90"  
}) => {
  return (
    <div className="w-full  bg-white  rounded-lg shadow-md overflow-hidden relative font-inter">
      <div className="relative">
        <Image
  src={imgSrc}
  alt={title}
  width={350}
  height={161}
  className="w-full h-auto object-cover"
/>

        <div className="absolute top-2 left-2 flex gap-2">
          <span className="bg-[#00C897] text-white text-[8px] font-bold px-3 py-1 rounded-full">Best Seller</span>
          <span className="bg-[#8B5CF6] text-white text-[8px] font-bold px-3 py-1 rounded-full">20% OFF</span>
        </div>
        {/* <h1 className="absolute bottom-2 left-2 text-black font-bold text-[14px] leading-[20px]">{heading}</h1> */}
      </div>
      <div className="p-3 flex flex-col gap-2">
        <h2 className="font-bold text-[16px] leading-[21px]">{title}</h2>
        <div className="flex items-center gap-2 text-[14px] leading-[18px] text-gray-700">
          <CgProfile size={16} />
          <span className='text-[#3DCbb1]'>{proname}</span>
        </div>
        <div className="flex items-center gap-2">
          <p className="font-bold text-[20px] leading-[26px]">{price}</p>
          <p className="font-normal text-[16px] leading-[24px] line-through text-gray-400">{originalPrice}</p>
        </div>
      </div>
    </div>
  );
};

export default MarketCard;