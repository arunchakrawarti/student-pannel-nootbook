// import Image from "next/image";
// import React from "react";
// import { IoDownload } from "react-icons/io5";

// const Card6 = ({
//   variant = "subject",

//   title,
//   icon = "/img/Recent.png",
//   cardBgColor = "bg-white",
//   iconBgColor = "bg-transparent",

//   accuracyText,
//   accuracyBgColor = "bg-green-100",
//   accuracyTextColor = "text-green-600",

//   questions,
//   attempted,
//   progress,

//   pages,
//   size,
//   uploaded,
//   downloads,

//   dividerColor = "bg-orange-200",
// }) => {
//   const pdfValueColor = "text-red-500";
//   const buttonColor = "bg-orange-500";

//   return (
//     <div className={`p-4 rounded-xl shadow ${cardBgColor}`}>
//       {/* Top Icon + Accuracy */}
//       <div className="flex justify-between px-2 items-start mb-3">
//         <div
//           className={`w-12 h-12 rounded-lg flex items-center justify-center ${
//             variant === "pdf" ? iconBgColor : "bg-transparent"
//           }`}
//         >
//           <Image src={icon} width={24} height={24} alt="icon" />
//         </div>

//         {variant === "subject" && accuracyText && (
//           <span
//             className={`px-2 py-0.5 rounded-full text-[12px] font-medium ${accuracyBgColor} ${accuracyTextColor}`}
//           >
//             {accuracyText}
//           </span>
//         )}
//       </div>

//       {variant === "pdf" && accuracyText && (
//         <span
//           className={`inline-block  mb-2 px-2 py-0.5 rounded text-[10px] font-bold uppercase ${accuracyBgColor} ${accuracyTextColor}`}
//         >
//           {accuracyText}
//         </span>
//       )}
//       <h2 className="font-inter ml-2 mb-2 font-medium text-[16px] text-slate-800">
//         {title}
//       </h2>
//       {variant === "subject" && (
//         <>
//           <div className="space-y-2 px-2 text-[14px] text-slate-600">
//             <div className="flex justify-between items-center gap-2">
//               <span>Questions:</span>
//               <span className="font-medium">{questions}</span>
//             </div>
//             <div className="flex justify-between items-center gap-2">
//               <span>Attempted:</span>
//               <span className="font-medium">{attempted}</span>
//             </div>
//             <div className="flex justify-between items-center gap-2">
//               <span>Progress:</span>
//               <span className="font-medium">{progress}</span>
//             </div>
//           </div>

//           <div className="h-1 mt-3">
//             <div
//               className={`h-1 rounded-full ${buttonColor}`}
//               style={{ width: progress }}
//             />
//           </div>
//         </>
//       )}
//       {variant === "pdf" && (
//         <div className="space-y-2 text-[14px] text-slate-600 mt-2">
//           <div className="flex justify-between w-full">
//             <span>Pages</span>
//             <span className={`font-medium`}>{pages}</span>
//           </div>
//           <div className="flex justify-between w-full">
//             <span>Size</span>
//             <span className={`font-medium`}>{size}</span>
//           </div>
//           <div className="flex justify-between w-full">
//             <span>Uploaded</span>
//             <span className={`font-medium`}>{uploaded}</span>
//           </div>
//           <div className="flex justify-between w-full">
//             <span>Downloads</span>
//             <span className={`font-medium`}>{downloads}</span>
//           </div>
//         </div>
//       )}
//       <button
//         className={`w-full py-3 rounded-lg ${buttonColor} text-white text-[14px] font-medium flex items-center justify-center gap-2 mt-4`}
//       >
//         {variant === "pdf" && <IoDownload />}
//         {variant === "pdf" ? "Download PDF" : "Start Practice"}
//       </button>
//     </div>
//   );
// };

// export default Card6;



"use client"
import Image from "next/image";
import React from "react";
import { IoDownload } from "react-icons/io5";
import { useRouter } from "next/navigation";   
import Button from "../comman/Button";
const DocumentCard = ({
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
}) => {
  const router = useRouter();                  
  const buttonColor = "bg-orange-500";

 
  const handleButtonClick = () => {
    if (variant === "pdf") {
      router.push("/study-material/subjectslug/download");  
    } else {
      router.push("/practice/status");      
    }
  };

  return (
    <div className={`p-4 rounded-xl shadow ${cardBgColor}`}>
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
          className={`inline-block mb-2 px-2 py-0.5 rounded text-[10px] font-bold uppercase ${accuracyBgColor} ${accuracyTextColor}`}
        >
          {accuracyText}
        </span>
      )}

      <h2 className="ml-2 mb-2 font-medium text-[16px] text-slate-800">
        {title}
      </h2>

      {variant === "subject" && (
        <>
          <div className="space-y-2 px-2 text-[14px] text-slate-600">
            <div className="flex justify-between">
              <span>Questions:</span>
              <span className="font-medium">{questions}</span>
            </div>
            <div className="flex justify-between">
              <span>Attempted:</span>
              <span className="font-medium">{attempted}</span>
            </div>
            <div className="flex justify-between">
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

      {variant === "pdf" && (
        <div className="space-y-2 text-[14px] text-slate-600 mt-2">
          <div className="flex justify-between">
            <span>Pages</span>
            <span className="font-medium">{pages}</span>
          </div>
          <div className="flex justify-between">
            <span>Size</span>
            <span className="font-medium">{size}</span>
          </div>
          <div className="flex justify-between">
            <span>Uploaded</span>
            <span className="font-medium">{uploaded}</span>
          </div>
          <div className="flex justify-between">
            <span>Downloads</span>
            <span className="font-medium">{downloads}</span>
          </div>
        </div>
      )}

     
      <Button
        onClick={handleButtonClick}
        className={`w-full py-3 rounded-lg ${buttonColor}  gap-2 mt-4`}
      >
        {variant === "pdf" && <IoDownload />}
        {variant === "pdf" ? "Download PDF" : "Start Practice"}
      </Button>
    </div>
  );
};

export default DocumentCard;
