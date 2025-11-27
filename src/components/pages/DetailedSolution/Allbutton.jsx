import React from 'react';

const Allbutton = () => {
  return (
    <div className="w-full max-w-md  px-3 sm:px-5 mt-5 py-1 flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-0 bg-gray-300 rounded-md sm:rounded-full md:rounded-full lg:rounded-full ">
      <button className="bg-white py-2 rounded-full px-3 sm:px-5 w-full sm:w-auto text-center">All Question</button>
      <button className=" py-2 rounded-full px-3 sm:px-5 w-full sm:w-auto text-center">Incorrect Only</button>
      <button className=" py-2 rounded-full px-3 sm:px-5 w-full sm:w-auto text-center">Not Attempt</button>
    </div>
  );
}

export default Allbutton;
