"use client";
import React, { useState } from "react";
import { LuClock } from "react-icons/lu";
import SubmitModel from "./SubmitModel";

const QuestionCard = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="mt-4 bg-white p-5 rounded-xl shadow-md">
      <div className="flex justify-between">
        <div>
          <h1 className="font-inter text-gray-700 text-[19px] tracking-[-0.31px]">Prelims Mock Test 15</h1>
          <p className="font-inter text-gray-500  text-[18px]">Question 1 of 5</p>
        </div>

        <div className="flex gap-5 items-center flex-col sm:flex-col md:flex-row">
          <div className="flex items-center gap-3 bg-[#FFF7ED] px-7 py-2 rounded-lg text-[#F54900]">
            <LuClock size={20} />
            <p className="font-inter text-[20px]">0:59:45</p>
          </div>

          <button
            onClick={() => setOpenModal(true)}
            className="font-inter font-medium text-[14px] border cursor-pointer px-3 rounded-lg py-2 border-gray-200"
          >
            Submit Test
          </button>
        </div>
      </div>

      <div className="mt-5">
        <div className="h-2.5 w-full rounded-2xl bg-[linear-gradient(to_right,#FF6029_20%,#FF602933_20%)]"></div>
      </div>

      <SubmitModel open={openModal} setOpen={setOpenModal} />
    </div>
  );
};

export default QuestionCard;
