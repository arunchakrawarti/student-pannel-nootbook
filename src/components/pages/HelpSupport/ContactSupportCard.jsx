import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { BsChatDots } from "react-icons/bs";
import helpData from "../../../../public/db/helpData.json";

const iconMap = {
  HiOutlineMail: HiOutlineMail,
  FiPhone: FiPhone,
  BsChatDots: BsChatDots,
};

const ContactSupportCard = () => {
  return (
    <div className="mt-5 grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {helpData.map((item, index) => {
        const Icon = iconMap[item.icon];
        return (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 border border-gray-300 rounded-lg hover:shadow-lg transition-shadow duration-300"
          >
            <div className={`p-4 rounded-full mb-4 ${item.bg}`}>
              <Icon className={`text-2xl ${item.color}`} />
            </div>
            <h3 className="font-inter font-normal text-[16px] leading-[24px] tracking-[-0.31px] text-center mt-1">
              {item.title}
            </h3>
            <p className="font-inter font-normal text-[16px] leading-[24px] tracking-[-0.31px] text-center text-red-400 mb-1">
              {item.info}
            </p>
            <p className="font-inter font-normal text-[14px] leading-[20px] tracking-[-0.15px] text-center text-gray-500">
              {item.subInfo}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default ContactSupportCard;
