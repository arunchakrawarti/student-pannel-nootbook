"use client";

import { Button } from "@/components/comman/Button";
import React from "react";

const SubmitModel = ({ open, setOpen }) => {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/30 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-[90%] max-w-md shadow-xl">
        <h2 className="text-[20px] font-inter font-semibold mb-1">Submit Test?</h2>
        <p className="text-gray-600 text-[14px] mb-4">
          Are you sure you want to submit the test? You cannot change your answers after submission.
        </p>

        <div className="grid grid-cols-3 gap-3 mb-5">
          <div className="bg-[#E7FFF3] p-3 rounded-md text-center">
            <p className="text-[24px] font-bold text-[#00C950]">1</p>
            <p className="text-[12px] text-gray-600">Answered</p>
          </div>

          <div className="bg-[#F4F6FA] p-3 rounded-md text-center">
            <p className="text-[24px] font-bold text-[#444]">4</p>
            <p className="text-[12px] text-gray-600">Not Answered</p>
          </div>

          <div className="bg-[#FFF7E8] p-3 rounded-md text-center">
            <p className="text-[24px] font-bold text-[#F8A700]">0</p>
            <p className="text-[12px] text-gray-600">Flagged</p>
          </div>
        </div>

        <div className="flex justify-end gap-3">
          <button
            onClick={() => setOpen(false)}
            className="px-4 py-2 border rounded-md text-gray-700"
          >
            Cancel
          </button>

          <Button className="px-4 py-2 bg-[#00C950] cursor-pointer text-white rounded-md">
            Submit Test
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SubmitModel;
