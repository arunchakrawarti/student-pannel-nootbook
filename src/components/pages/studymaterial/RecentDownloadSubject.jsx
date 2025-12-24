import React from "react";
import file from "../../../../public/db/file.json"
import InfoListCard from "../../molecules/InfoListCard";



const RecentDownloadSubject = () => {
  return (
    <div className="mt-6 bg-white rounded-lg shadow-sm p-4">
      <h1 className="font-inter font-normal text-[18px] tracking-[-0.31px]">
        Recent Downloads
      </h1>

      <div className="w-full mt-3 p-4 ">
        {file.map((item) => (
          <InfoListCard
            key={item.id}
            title={item.title}
            month={item.month}
            img={item.img}
            buttonType={item.buttonType}
          />
        ))}
      </div>
    </div>
  );
};

export default RecentDownloadSubject;