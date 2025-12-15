// import Image from 'next/image'
// import React from 'react'
// import { IoDownload } from 'react-icons/io5'


// const Card6 = ({ 
//   title, 
//   subjectTag, 
//   pages, 
//   size, 
//   uploaded, 
//   downloads, 
//   cardBgColor, 
//   iconBgColor, 
//   tagBgColor, 
//   tagTextColor 
// }) => {
//   return (
    
//     <div className={`p-8 rounded-xl shadow-lg border border-gray-200 ${cardBgColor}`}>
      
     
//       <div className='flex gap-8 items-start mb-4'>
        
//         <div className={`w-12 h-12 flex items-center justify-center rounded-lg ${iconBgColor}`}>
//           <Image
//             src='/img/Recent.png' 
//             height={24}
//             width={24}
//             alt='Document Icon'
//           />
//         </div>
        
        
//         <div>
         
//           <button className={`font-inter text-[12px] font-medium px-2 py-0.5 rounded-full mb-1 ${tagBgColor} ${tagTextColor}`}>
//             {subjectTag}
//           </button>
          
//           <p className="font-inter font-medium text-[18px] leading-[24px] text-[#1E293B]">
//             {title}
//           </p>
//         </div>
//       </div>
      
     
//       <div className='space-y-3 mb-6'>
        
//         <div className='flex justify-between'>
//           <p className="font-inter font-normal text-[14px] leading-[20px] text-[#64748B]">Pages:</p>
//           <h2 className="font-inter font-medium text-[14px] leading-[20px] text-[#1E293B]">{pages}</h2>
//         </div>
        
       
//         <div className='flex justify-between'>
//           <p className="font-inter font-normal text-[14px] leading-[20px] text-[#64748B]">Size:</p>
//           <h2 className="font-inter font-medium text-[14px] leading-[20px] text-[#1E293B]">{size}</h2>
//         </div>
        
       
//         <div className='flex justify-between'>
//           <p className="font-inter font-normal text-[14px] leading-[20px] text-[#64748B]">Uploaded:</p>
//           <h2 className="font-inter font-medium text-[14px] leading-[20px] text-[#1E293B]">{uploaded}</h2>
//         </div>
        
       
//         <div className='flex justify-between'>
//           <p className="font-inter font-normal text-[14px] leading-[20px] text-[#64748B]">Downloads:</p>
//           <h2 className="font-inter font-medium text-[14px] leading-[20px] text-[#1E293B]">{downloads}</h2>
//         </div>
//       </div>

      
//       <button className='w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-[var(--color-accent-orange)] text-white font-medium text-[16px] hover:bg-orange-600 transition-colors'>
//         <IoDownload className='text-[18px]'/>
//         Download PDF
//       </button>
//     </div>
//   )
// }

// export default Card6




import Image from "next/image";
import React from "react";
import { IoDownload } from "react-icons/io5";

const Card6 = ({
  variant = "subject",

  title,
  icon = "/img/Recent.png",
  cardBgColor = "bg-white",
  iconBgColor = "bg-transparent",

  accuracyText,
  accuracyBgColor = "bg-green-100",
  accuracyTextColor = "text-green-600",

  questions,
  attempted,
  progress,

  pages,
  size,
  uploaded,
  downloads,

  dividerColor = "bg-orange-200",
}) => {
  const pdfValueColor = "text-red-500";
  const buttonColor = "bg-orange-500";

  return (
    <div className={`p-4 rounded-xl shadow ${cardBgColor}`}>
      {/* Top Icon + Accuracy */}
      <div className="flex justify-between px-2 items-start mb-3">
        <div
          className={`w-12 h-12 rounded-lg flex items-center justify-center ${
            variant === "pdf" ? iconBgColor : "bg-transparent"
          }`}
        >
          <Image src={icon} width={24} height={24} alt="icon" />
        </div>

        {variant === "subject" && accuracyText && (
          <span
            className={`px-2 py-0.5 rounded-full text-[12px] font-medium ${accuracyBgColor} ${accuracyTextColor}`}
          >
            {accuracyText}
          </span>
        )}
      </div>

      {variant === "pdf" && accuracyText && (
        <span
          className={`inline-block  mb-2 px-2 py-0.5 rounded text-[10px] font-bold uppercase ${accuracyBgColor} ${accuracyTextColor}`}
        >
          {accuracyText}
        </span>
      )}

      {/* Title */}
      <h2 className="font-inter ml-2 mb-2 font-medium text-[16px] text-slate-800">
        {title}
      </h2>

      {/* Subject Variant Details */}
      {variant === "subject" && (
        <>
          <div className="space-y-2 px-2 text-[14px] text-slate-600">
            <div className="flex justify-between items-center gap-2">
              <span>Questions:</span>
              <span className="font-medium">{questions}</span>
            </div>
            <div className="flex justify-between items-center gap-2">
              <span>Attempted:</span>
              <span className="font-medium">{attempted}</span>
            </div>
            <div className="flex justify-between items-center gap-2">
              <span>Progress:</span>
              <span className="font-medium">{progress}</span>
            </div>
          </div>

          <div className="h-1 mt-3">
            <div
              className={`h-1 rounded-full ${buttonColor}`}
              style={{ width: progress }}
            />
          </div>
        </>
      )}

      {/* PDF Variant Details */}
      {variant === "pdf" && (
        <div className="space-y-2 text-[14px] text-slate-600 mt-2">
          <div className="flex justify-between w-full">
            <span>Pages</span>
            <span className={`font-medium`}>{pages}</span>
          </div>
          <div className="flex justify-between w-full">
            <span>Size</span>
            <span className={`font-medium`}>{size}</span>
          </div>
          <div className="flex justify-between w-full">
            <span>Uploaded</span>
            <span className={`font-medium`}>{uploaded}</span>
          </div>
          <div className="flex justify-between w-full">
            <span>Downloads</span>
            <span className={`font-medium`}>{downloads}</span>
          </div>
        </div>
      )}

      {/* Button */}
      <button
        className={`w-full py-3 rounded-lg ${buttonColor} text-white text-[14px] font-medium flex items-center justify-center gap-2 mt-4`}
      >
        {variant === "pdf" && <IoDownload />}
        {variant === "pdf" ? "Download PDF" : "Start Practice"}
      </button>
    </div>
  );
};

export default Card6;
