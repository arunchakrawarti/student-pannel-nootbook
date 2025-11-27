import React from "react";
import Card4 from "../../molecules/Card4";
import browser from "../../../../public/db/browser.json";
import Link from "next/link";

const Browser = () => {
  return (
    <div className=" mt-5">
      <h1 className="font-inter font-normal text-[16px] leading-[24px] tracking-[-0.31px]">
        Browse by Subject
      </h1>

      <div className="grid mt-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-6 gap-4 ">
        {browser.map((item) => (
          <Link href="/browser-by-subject">
            <Card4
              key={item.id}
              title={item.title}
              file={item.file}
              iconBgColor={item.iconBgColor}
              iconColor={item.iconColor}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Browser;
