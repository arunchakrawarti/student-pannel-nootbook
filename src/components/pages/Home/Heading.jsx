import React from "react";
import { MdOutlineManageAccounts } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { MdLogout } from "react-icons/md";

const Heading = () => {
  return (
    <div className="mt-2 flex flex-col sm:flex-row justify-between items-start md:items-center gap-4">

      <div className="w-full md:w-auto flex flex-col mt-15">
        <h1 className="font-inter font-medium text-[20px] md:text-[24px] leading-[28px] md:leading-[36px] tracking-[0.07px]">
          Welcome back, Rahul Sharma!
        </h1>

        <p className="font-inter mt-1 font-normal text-[14px] md:text-[16px] leading-[20px] md:leading-[24px] tracking-[-0.31px]">
          UPSC CSE 2025 - Batch A
        </p>
      </div>
      
      <div className="bg-white rounded-md shadow p-3 w-full md:w-auto">
        <div className="flex items-center justify-between md:justify-start gap-5 md:gap-10 py-3 border-b">
          <MdOutlineManageAccounts size={25} className="text-yellow-500" />
          <h1 className="font-inter font-normal text-[16px] md:text-[18px] leading-[24px] tracking-[-0.31px]">
            Lazarus Honhaga
          </h1>
        </div>

        <div className="flex items-center justify-between md:justify-start gap-5 md:gap-10 py-3 border-b">
          <FiPhoneCall size={25} className="text-yellow-500" />
          <h1 className="font-inter font-normal text-[16px] md:text-[18px] leading-[24px] tracking-[-0.31px]">
            7909072785
          </h1>
        </div>

        <div className="flex items-center justify-between md:justify-start gap-5 md:gap-10 py-3">
          <MdLogout size={25} className="text-yellow-500" />
          <h1 className="font-inter font-normal text-[16px] md:text-[18px] leading-[24px] tracking-[-0.31px]">
            Logout
          </h1>
        </div>
      </div>

    </div>
  );
};

export default Heading;
