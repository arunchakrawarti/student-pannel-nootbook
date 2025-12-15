import CardScore from "@/components/molecules/CardScore";
import React from "react";

const ProfileStatsCard = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  mt-10 pb-10  gap-5">
        <CardScore no="4" title="Courses Enrolled" />
        <CardScore no="23" title="Tests Attempted" />
        <CardScore no="42.5" title="Study Hours" />
        <CardScore no="#145" title="Rank" />
      </div>
       <div
      className="
        flex flex-wrap 
        gap-3 sm:gap-5 md:gap-10 
        justify-center md:justify-start
      "
    >
      <p className="font-inter font-medium text-[14px] leading-5 tracking-[-0.15px]">
        Personal Info
      </p>

      <p className="font-inter font-medium text-[14px] leading-5 tracking-[-0.15px]">
        Academic Info
      </p>

      <p className="font-inter font-medium text-[14px] leading-5 tracking-[-0.15px]">
        Security
      </p>

      <p className="font-inter font-medium text-[14px] leading-5 tracking-[-0.15px]">
        Achievements
      </p>
    </div>
    </div>
  );
};

export default ProfileStatsCard;
