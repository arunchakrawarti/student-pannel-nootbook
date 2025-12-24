import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import { LuFilter } from "react-icons/lu";
import Link from "next/link";
import browser from "../../../../public/db/browser.json";
import BaseCard from "@/components/molecules/BaseCard";

const StudyMaterial = () => {
  return (
    <div className="mt-2">
      <h1 className="font-inter font-medium text-[30px]">
        Study Materials
      </h1>
      <p className="font-inter text-gray-600 mt-2 text-[19px]">
        Access notes, PDFs and study resources
      </p>
      <div className="flex flex-col sm:flex-row gap-3 mt-7 justify-between">
        <div className="flex items-center gap-2 px-3 py-2 bg-[#F3F3F5] rounded-md w-full">
          <IoSearchOutline size={24} className="text-gray-500" />
          <input
            className="w-full bg-transparent text-[18px]"
            placeholder="Search study materials..."
          />
        </div>

        <div className="flex items-center gap-2 px-5 py-2 bg-white rounded-md">
          <LuFilter size={20} />
          <span className="font-medium text-[17px]">Filter</span>
        </div>
      </div>
      <div className="mt-7">
        <h2 className="text-[20px] text-[var(--color-accent-blue)]">
          Browse by Subject
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-3 items-stretch">
          {browser.map((item, index) => (
            <Link
              key={index}
              href="study-material/subjectslug"
            >
              <BaseCard
                variant="folder"
                label={item.label}
                value={item.value}
                colorClass={item.colorClass}
                iconColor={item.iconColor}
                boxSize={item.boxSize}
                iconSize={item.iconSize}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudyMaterial;
