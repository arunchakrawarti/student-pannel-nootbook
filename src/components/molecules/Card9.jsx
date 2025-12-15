// import Image from "next/image";
// import React from "react";

// const Card9 = ({
//   iconSrc,
//   value,
//   label,
//   colorClass,
//   imagePosition = "left",
//   reverseText = false,
//   isFullColorCard = false,
//   iconHeight = 22,
//   iconWidth = 22,
//   layout = "row",          
//   changeText,              
// }) => {

//   const containerClasses = isFullColorCard
//     ? `rounded-xl px-4 py-5 ${colorClass}`
//     : `rounded-xl bg-white border border-gray-200 shadow-sm px-4 py-5`;

//   const iconWrapperClasses = isFullColorCard
//     ? "h-10 w-10 rounded-md flex items-center justify-center"
//     : `h-10 w-10 rounded-md flex items-center justify-center ${colorClass}`
//   if (layout === "row") {
//     return (
//       <div className={`flex items-center gap-3 ${containerClasses}`}>
//         {imagePosition === "left" && (
//           <div className={iconWrapperClasses}>
//             <Image src={iconSrc} height={iconHeight} width={iconWidth} alt={label} />
//           </div>
//         )}

//         <div className="flex-1">
//           {!reverseText ? (
//             <>
//               <h1 className="text-[20px] font-medium text-gray-900">
//                 {value}
//               </h1>
//               <p className="text-[14px] text-gray-600">{label}</p>
//             </>
//           ) : (
//             <>
//               <p className="text-[14px] text-gray-600">{label}</p>
//               <h1 className="text-[20px] font-medium text-gray-900">
//                 {value}
//               </h1>
//             </>
//           )}
//         </div>

//         {changeText && (
//           <span className="text-sm font-medium text-green-600">
//             {changeText}
//           </span>
//         )}

//         {imagePosition === "right" && (
//           <div className={iconWrapperClasses}>
//             <Image src={iconSrc} height={iconHeight} width={iconWidth} alt={label} />
//           </div>
//         )}
//       </div>
//     );
//   }
//   return (
//     <div className={`${containerClasses}`}>
//       <div className="flex items-start justify-between">
//         <div className={iconWrapperClasses}>
//           <Image src={iconSrc} height={iconHeight} width={iconWidth} alt={label} />
//         </div>

//         {changeText && (
//           <span className="text-sm font-medium text-green-600">
//             {changeText}
//           </span>
//         )}
//       </div>

//       <div className="mt-3">
//         <h1 className="text-[22px] font-medium text-gray-900">
//           {value}
//         </h1>
//         <p className="text-[14px] text-gray-600">{label}</p>
//       </div>
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
  iconHeight = 22,
  iconWidth = 22,
  layout = "row",
  changeText,

  // 🔥 NEW (optional)
  variant = "default",        // default | stat
  centerText = false,
  valueColor = "text-gray-900"
}) => {

  const containerClasses = isFullColorCard
    ? `rounded-xl px-4 py-5 ${colorClass}`
    : `rounded-xl bg-white border border-gray-200 shadow-sm px-4 py-5`;

  const iconWrapperClasses = isFullColorCard
    ? "h-10 w-10 rounded-md flex items-center justify-center"
    : `h-10 w-10 rounded-md flex items-center justify-center ${colorClass}`;

  /* ================= STAT VARIANT ================= */
  if (variant === "stat") {
    return (
      <div className="rounded-xl bg-white border border-gray-200 shadow-sm px-4 py-4 text-center">
        <h1 className={`text-[18px] font-semibold ${valueColor}`}>
          {value}
        </h1>
        <p className="text-[13px] text-gray-500 mt-1">
          {label}
        </p>
      </div>
    );
  }

  /* ================= EXISTING CODE ================= */
  if (layout === "row") {
    return (
      <div className={`flex items-center gap-3 ${containerClasses}`}>
        {iconSrc && imagePosition === "left" && (
          <div className={iconWrapperClasses}>
            <Image src={iconSrc} height={iconHeight} width={iconWidth} alt={label} />
          </div>
        )}

        <div className={`flex-1 ${centerText ? "text-center" : ""}`}>
          {!reverseText ? (
            <>
              <h1 className={`text-[20px] font-medium ${valueColor}`}>
                {value}
              </h1>
              <p className="text-[14px] text-gray-600">{label}</p>
            </>
          ) : (
            <>
              <p className="text-[14px] text-gray-600">{label}</p>
              <h1 className={`text-[20px] font-medium ${valueColor}`}>
                {value}
              </h1>
            </>
          )}
        </div>

        {changeText && (
          <span className="text-sm font-medium text-green-600">
            {changeText}
          </span>
        )}

        {iconSrc && imagePosition === "right" && (
          <div className={iconWrapperClasses}>
            <Image src={iconSrc} height={iconHeight} width={iconWidth} alt={label} />
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={`${containerClasses}`}>
      <div className="flex items-start justify-between">
        {iconSrc && (
          <div className={iconWrapperClasses}>
            <Image src={iconSrc} height={iconHeight} width={iconWidth} alt={label} />
          </div>
        )}

        {changeText && (
          <span className="text-sm font-medium text-green-600">
            {changeText}
          </span>
        )}
      </div>

      <div className="mt-3">
        <h1 className={`text-[22px] font-medium ${valueColor}`}>
          {value}
        </h1>
        <p className="text-[14px] text-gray-600">{label}</p>
      </div>
    </div>
  );
};

export default Card9;
