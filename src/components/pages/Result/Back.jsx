import React from 'react'
import { IoIosArrowRoundBack } from "react-icons/io";

const Back = () => {
  return (
    <div>
     <div className="flex mt-3 gap-2 items-center cursor-pointer">
             <IoIosArrowRoundBack className="text-2xl sm:text-3xl" />
             <h3 className="font-inter font-medium text-[14px] sm:text-[16px] leading-[20px] sm:leading-[24px] tracking-[-0.15px]">
              Back to Tests
             </h3>
           </div> 
    </div>
  )
}

export default Back
