"use client";
import Inputs from "@/components/atom/Inputs";
import input from "../../../../public/db/input.json";
import React from "react";
import { RiSave3Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

const Information = () => {
  return (
    <div className="mt-10 border border-gray-300 rounded-md p-4">
      <h1 className="font-inter font-normal mt-3 text-[16px] leading-4 tracking-[-0.31px]">
        Personal Information
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-6">
        {input.map((item, index) => (
          <Inputs
            key={index}
            label={item.label}
            type={item.type}
            placeholder={item.placeholder}
          />
        ))}
      </div>
      <div className="flex flex-col sm:flex-row text-center lg:flex-row  mb-5 gap-5">
        <div className="flex gap-2 px-4 py-2 justify-center rounded-md text-white  items-center bg-[#FF6029]">
          <RiSave3Line />
          <button>Save Changes</button>
        </div>
        <div className="flex gap-2 bg-white border justify-center border-gray-300 px-4 py-2 items-center rounded-md">
          <RxCross2 />
          <button>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Information;
