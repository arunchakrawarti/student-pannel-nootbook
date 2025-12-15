"use client";
import Inputs from "@/components/atom/Inputs";
import input from "../../../../public/db/input.json";

import React from "react";

const ProfilePersonalInfo = () => {
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
     
    </div>
  );
};

export default ProfilePersonalInfo;
