import React from "react";
import Image from "next/image"; // Agar Next.js use kar rahe ho

const CourseMegaSale = () => {
  return (
    <div className="relative w-full max-w-[1120px] mx-auto p-6 rounded-xl overflow-hidden bg-[linear-gradient(180deg,#FF6029_0%,#16344E_100%)] flex flex-col md:flex-row items-center mt-5 gap-6">

      <div className="flex-1 text-white space-y-4">
        <div className="inline-block bg-yellow-400 text-black text-xs px-2 py-1 rounded-full font-semibold">
          Limited Time Offer
        </div>

        <h2 className="font-inter font-normal text-[19px] leading-[24px] tracking-[-0.31px] text-gray-100">
           🎉 Mega Sale - Up to 50% OFF
        </h2>

        <p className="font-inter font-normal text-[16px] leading-[24px] tracking-[-0.31px] text-gray-100">
          Get access to premium courses, live classes, and test series at unbeatable prices. Offer valid till November 30, 2025.
        </p>

        <div className="flex flex-wrap gap-4 mt-4">
          <div className="bg-gray-100 text-gray-900 px-4 py-2 rounded-lg  text-[14px]  tracking-[-0.15px] font-inter font-normal">
            Save up to <br/><span>₹10,000</span>
          </div>
          <div className="bg-gray-100 text-gray-900 px-4 py-2 rounded-lg  text-[14px]  tracking-[-0.15px] font-inter font-normal">
            Valid for <br/> <span>13 Days</span>
          </div>
        </div>
      </div>
      
      <div className="flex-1">
        <Image
          src="/img/audience.png"
          alt="Audience Image"
          width={400}
          height={300}
          className="rounded-xl object-cover"
        />
      </div>

    </div>
  );
};

export default CourseMegaSale;
