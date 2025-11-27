import React from "react";
import FreqCard from "../../molecules/FreqCard";
import faqdata from "../../../../public/db/faqdata.json";

const Frequently = () => {
  return (
    <div className=" bg-white shadow-lg rounded-xl border border-gray-300 p-4 mt-5 ">
      <h1 class="font-inter font-normal text-[16px] leading-[16px] tracking-[-0.31px]">
 Frequently Asked Questions
</h1>


      <div className="mt-5">
        {faqdata.map((faq, index) => (
        <FreqCard
          key={index}
          item={faq.item}
          question={faq.question}
          answer={faq.answer}
        />
      ))}
      </div>
    </div>
  );
};

export default Frequently;
