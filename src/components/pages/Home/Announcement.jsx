import React from "react";
import Card3 from "../../molecules/Card3";
import announ from "../../../../public/db/announ.json";
import Image from "next/image";


const Announcement = () => {
  return (
    <div className="p-4 mt-5 bg-white rounded-lg border border-gray-200">
        <div className="flex gap-3">
            <Image
        src='/img/Icona.png'
        height={20}
        width={20}
        alt="icona.png"
        />
        <h2 className="font-inter font-normal text-[16px] leading-[16px] tracking-[-0.31px]">
 Announcements
</h2>
        </div>

        <div className="p-2">
      {announ.map((item) => (
        <Card3
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

export default Announcement;
