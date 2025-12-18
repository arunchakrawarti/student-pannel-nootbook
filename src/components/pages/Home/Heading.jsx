import React from "react";
import { MdOutlineManageAccounts } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { MdLogout } from "react-icons/md";

const Heading = () => {
  return (
    <div className="mt-2 flex flex-col sm:flex-row justify-between items-start md:items-center gap-4">

      <div className="w-full md:w-auto flex flex-col mt-15">
        <h1 className="font-inter font-medium text-[30px]">
          Welcome back, Rahul Sharma!
        </h1>

        <p className="font-inter mt-1 font-normal text-[20px] text-gray-600">
          UPSC CSE 2025 - Batch A
        </p>
      </div>
      
    

    </div>
  );
};

export default Heading;
