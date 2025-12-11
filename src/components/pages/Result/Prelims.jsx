import CardScore from "@/components/molecules/CardScore";
import Image from "next/image";
import React from "react";

const Prelims = () => {
  return (
    <div
      className=" mt-5"
      style={{
        background:
          "linear-gradient(90deg, rgba(255, 96, 41, 0.1) 0%, rgba(22, 52, 78, 0.1) 100%)",
      }}
    >
      <div className=" pt-5 w-full flex justify-center">
        <div className="h-[80px] w-[80px] bg-[var(--color-accent-orange)] flex rounded-full justify-center items-center">
          <Image
            src="/img/result.png"
            height={40}
            width={40}
            alt="result.png"
          />
        </div>
      </div>
      <div>
        <h1 class="font-inter font-normal mt-5 text-[16px] leading-[24px] tracking-[-0.31px] text-center">
          Prelims Mock Test 15
        </h1>
        <p class="font-inter mt-3  font-normal text-base leading-6 tracking-[-0.31px] text-center">
          GS Paper 1
        </p>
      </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  mt-10 pb-10 mx-8 gap-10">
  <CardScore no="142" title="Score" color="text-orange-500" />
  <CardScore no="200" title="Total" color="text-gray-900" />
  <CardScore no="89%" title="Percentile" color="text-green-600" />
  <CardScore no="71%" title="Accuracy" color="text-blue-600" />
</div>

    </div>
  );
};

export default Prelims;
