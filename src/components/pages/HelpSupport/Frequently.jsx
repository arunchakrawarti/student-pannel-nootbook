import React from "react";
import FreqCard from "../../molecules/FreqCard";
import faqdata from "../../../../public/db/faqdata.json";

const Frequently = () => {
  return (
    <div className="p-6 bg-white shadow-lg rounded-xl max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Frequently Asked Questions
      </h2>

      {faqdata.map((faq, index) => (
        <FreqCard
          key={index}
          item={faq.item}
          question={faq.question}
          answer={faq.answer}
        />
      ))}
    </div>
  );
};

export default Frequently;
