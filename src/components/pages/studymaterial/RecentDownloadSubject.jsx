import React from "react";
import Card3 from "../../molecules/Card3";
import file from "../../../../public/db/file.json"



const RecentDownloadSubject = () => {
  return (
    <div className="mt-6">
      <h1 className="font-inter font-normal text-[16px] leading-[16px] tracking-[-0.31px]">
        Recent Downloads
      </h1>

      <div className="w-full mt-3 p-4 bg-white rounded-lg shadow-sm">
        {file.map((item) => (
          <Card3
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