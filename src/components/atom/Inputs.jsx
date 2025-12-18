// import React from "react";

// const Inputs = ({ label, type, placeholder }) => {
//   return (
//     <div className="flex flex-col w-full mb-6">
      
//       <label className="font-inter font-medium text-[15px] leading-[14px] tracking-[-0.15px] text-gray-800 mb-2">
//         {label}
//       </label>

//       <input
//         type={type}
//         placeholder={placeholder}
//         className="
//           w-full
//           pl-6
//           py-2 px-2
//           bg-white
//           rounded-md border border-gray-400
//           font-inter font-normal text-[14px] leading-5 tracking-[-0.15px]
//           placeholder:text-gray-500
//           flex items-center
//         "
//       />
//     </div>
//   );
// };

// export default Inputs;

import React from "react";

const Inputs = ({ label, type = "text", placeholder, className, hideLabel }) => {
  return (
    <div className="flex flex-col w-full">
      {!hideLabel && label && (
        <label className="font-inter font-medium text-[15px] text-gray-800 mb-2">
          {label}
        </label>
      )}
      <input
        type={type}
        placeholder={placeholder}

        className={`
          w-full 
          h-full
          bg-[#F2F4F7] 
          rounded-lg 
          focus:outline-none 
          font-inter text-[14px] py-3 pl-2
          placeholder:text-gray-500
          text-[#101828]
          ${className}
        `}
      />
    </div>
  );
};

export default Inputs;