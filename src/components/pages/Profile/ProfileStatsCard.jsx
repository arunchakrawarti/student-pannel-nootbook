
import Card9 from "@/components/molecules/Card9";
import React from "react";

const ProfileStatsCard = () => {
  const statsData = [
    { value: "4", label: "Courses Enrolled" },
    { value: "23", label: "Tests Attempted" },
    { value: "42.5", label: "Study Hours" },
    { value: "#145", label: "Rank" },
  ];
  return (
    <div>
      <div className="grid grid-cols-1 mt-5 md:grid-cols-4 gap-4">
        {statsData.map((stat, index) => (
          <Card9
            key={index}
            variant="stat"
            value={stat.value}
            label={stat.label}
            valueColor="text-[#1e293b]" 
            colorClass="bg-white border-gray-100"
          />
        ))}
      </div>
       <div
      className="
        flex flex-wrap 
        gap-3 mt-4 sm:gap-5 md:gap-10 
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
