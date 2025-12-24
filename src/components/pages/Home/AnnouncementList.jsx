import React from "react";
import Card3 from "../../molecules/InfoListCard";
import infolist from "../../../../public/db/infolist.json";
import { IoBookOutline } from "react-icons/io5";

import Image from "next/image";
import InfoListCard from "../../molecules/InfoListCard";

const AnnouncementList = () => {
  return (
    <div className="p-8 mt-5 bg-white rounded-2xl border border-gray-200">
      <div className="flex items-center gap-3">
        <IoBookOutline size={24} className="text-[var(--color-accent-orange)]" />

        <h2 className="font-inter font-normal text-[20px]">
          Announcements
        </h2>
      </div>

      <div className="p-4">
        {infolist.map((item) => (
          <InfoListCard
            key={item.id}
            color={item.color}
            title={item.title}
            month={item.month}
          />
        ))}
      </div>
    </div>
  );
};

export default AnnouncementList;
