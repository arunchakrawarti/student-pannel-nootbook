// import Image from "next/image";
// import React from "react";

// const Card9 = ({ 
//   iconSrc, 
//   value, 
//   label, 
//   colorClass, 
//   imagePosition = "left",
//   reverseText = false,
//   isFullColorCard = false 
// }) => {
//   const containerClasses = isFullColorCard 
//     ? `flex rounded-md gap-3 px-4 py-6 items-center ${colorClass}` 
//     : `flex bg-white border border-gray-200 shadow-sm rounded-md gap-3 px-4 py-6 items-center`; 
//   const iconWrapperClasses = isFullColorCard 
//     ? 'h-10 w-10 rounded-md flex items-center justify-center' 
//     : `h-10 w-10 rounded-md flex items-center justify-center ${colorClass}`; 

//   return (
//     <div className={containerClasses}> 

      
//       {imagePosition === "left" && (
//         <div className={iconWrapperClasses}>
//           <Image
//             src={iconSrc}
//             height={22}
//             width={22}
//             alt={label || "metric icon"}
//             className="object-contain"
//           />
//         </div>
//       )}

     
//       <div className="flex-1">
        
        
//         {!value ? (
         
//           <h1 className="font-inter font-medium text-[16px] leading-[20px] text-gray-900">
//             {label}
//           </h1>
//         ) : (
          
//           !reverseText ? (
//             <>
//               <h1 className="font-inter font-medium text-[20px] leading-[24px] text-gray-900">
//                 {value}
//               </h1>
//               <p className="font-inter text-[14px] text-gray-600 leading-[18px]">
//                 {label}
//               </p>
//             </>
//           ) : (
//             <>
//               <p className="font-inter text-[14px] text-gray-600 leading-[18px]">
//                 {label}
//               </p>
//               <h1 className="font-inter font-medium text-[20px] leading-[24px] text-gray-900">
//                 {value}
//               </h1>
//             </>
//           )
//         )}
//       </div>

      
//       {imagePosition === "right" && (
//         <div className={iconWrapperClasses}>
//           <Image
//             src={iconSrc}
//             height={22}
//             width={22}
//             alt={label || "metric icon"}
//             className="object-contain"
//           />
//         </div>
//       )}

//     </div>
//   );
// };

// export default Card9;



import Image from "next/image";
import React from "react";

const Card9 = ({ 
  iconSrc, 
  value, 
  label, 
  colorClass, 
  imagePosition = "left",
  reverseText = false,
  isFullColorCard = false,
  // NEW PROPS FOR IMAGE SIZE
  iconHeight = 22, 
  iconWidth = 22 
}) => {
  const containerClasses = isFullColorCard 
    ? `flex rounded-md gap-3 px-4 py-6 items-center ${colorClass}` 
    : `flex bg-white border border-gray-200 shadow-sm rounded-md gap-3 px-4 py-6 items-center`; 
  
  const iconWrapperClasses = isFullColorCard 
    ? 'h-10 w-10 rounded-md flex items-center justify-center' 
    : `h-10 w-10 rounded-md flex items-center justify-center ${colorClass}`; 

  return (
    <div className={containerClasses}> 

      {/* IMAGE LEFT */}
      {imagePosition === "left" && (
        <div className={iconWrapperClasses}>
          <Image
            src={iconSrc}
            // USING NEW CUSTOM PROPS
            height={iconHeight} 
            width={iconWidth}
            alt={label || "metric icon"}
            className="object-contain"
          />
        </div>
      )}

      {/* TEXT */}
      <div className="flex-1">
        
        {/* TEXT LOGIC (Unchanged) */}
        {!value ? (
          // Logic for Exam Card (Only Label)
          <h1 className="font-inter font-medium text-[16px] leading-[20px] text-gray-900">
            {label}
          </h1>
        ) : (
          // Logic for Metric Card (Value & Label)
          !reverseText ? (
            <>
              <h1 className="font-inter font-medium text-[20px] leading-[24px] text-gray-900">
                {value}
              </h1>
              <p className="font-inter text-[14px] text-gray-600 leading-[18px]">
                {label}
              </p>
            </>
          ) : (
            <>
              <p className="font-inter text-[14px] text-gray-600 leading-[18px]">
                {label}
              </p>
              <h1 className="font-inter font-medium text-[20px] leading-[24px] text-gray-900">
                {value}
              </h1>
            </>
          )
        )}
      </div>

      {/* IMAGE RIGHT */}
      {imagePosition === "right" && (
        <div className={iconWrapperClasses}>
          <Image
            src={iconSrc}
            // USING NEW CUSTOM PROPS
            height={iconHeight}
            width={iconWidth}
            alt={label || "metric icon"}
            className="object-contain"
          />
        </div>
      )}

    </div>
  );
};

export default Card9;