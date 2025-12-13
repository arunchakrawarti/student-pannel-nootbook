import { Button } from '@/components/comman/Button';
import React from 'react';
import { CiCircleCheck } from 'react-icons/ci';

const Success = () => {
  return (
    <div className="max-w-lg mx-auto mt-10 bg-white rounded-lg shadow-lg p-4 text-center">
      
      
      <div className="mx-auto h-14 w-14 rounded-full bg-green-200 flex items-center justify-center mb-4">
        <CiCircleCheck size={28} className="text-green-700" />
      </div>

         <h1 className="font-inter font-normal text-[24px] leading-[32px] tracking-[0.07px] text-center mb-2">
        Answer Submitted Successfully!
      </h1>

    
      <p className="font-inter font-normal text-[16px] leading-[24px] tracking-[-0.31px] text-center mb-6">
        Your answer has been submitted for evaluation. You will receive detailed feedback within 24-48 hours.
      </p>

      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4  text-left mb-6">
        <h2 className="font-inter font-semibold text-[16px] mb-2">Submission Summary</h2>
        <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
          <span className="font-medium">Question:</span>
          <span className="list-disc block w-full truncate">
  Discuss the role of technology in improving agricultural productivity in India.
</span>


          <span className="font-medium">Word Count:</span>
          <span>0 words</span>

          <span className="font-medium">Time Taken:</span>
          <span>0 minutes</span>

          <span className="font-medium">Status:</span>
          <span className="px-2 py-1 text-center bg-gray-200 rounded-full text-xs">Under Evaluation</span>
        </div>
      </div>
      <div className="flex justify-center gap-4">
        <Button className='text-white'>
          Back to Questions
        </Button>
        <Button className="bg-white border border-gray-300">
          Practice Another
        </Button>
      </div>

    </div>
  );
};

export default Success;
