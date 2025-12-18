// import Image from "next/image";
// import React from "react";
// import { LuDownload, LuEye, LuBookOpen } from "react-icons/lu";

// const getDifficultyColors = (difficulty) => {
//   switch (difficulty) {
//     case "Easy":
//       return { bg: "#ECFDF5", text: "#059669" };
//     case "Medium":
//       return { bg: "#FF6029", text: "#FFFFFF" };
//     case "Hard":
//       return { bg: "#FEE2E2", text: "#EF4444" };
//     default:
//       return { bg: "#E5E7EB", text: "#6B7280" };
//   }
// };

// const Card8 = ({ data, type }) => {
//   if (!data || !type) return null;

//   const {
//     title,
//     paragraph,
//     iconSrc,
//     badgeText,
//     pages,
//     MB,
//     date,
//     downloads,

//     question,
//     paper,
//     topic,
//     words,
//     time,
//     marks,
//     difficulty,
//     status,
//     score,
//     feedback,

//     // PRACTICE
//     totalQuestions,
//     completed,
//     progress,
//   } = data;

//   return (
//     <div className="w-full border border-gray-200 bg-white rounded-lg p-4 flex flex-col sm:flex-row justify-between gap-4">

//       {/* LEFT */}
//       <div className="flex gap-3 w-full">

//         {/* ICON */}
//         <div
//           className={`w-12 h-12 flex items-center justify-center rounded-md shrink-0
//             ${
//               type === "material"
//                 ? "bg-[#EFF6FF] border border-[#BEDBFF]"
//                 : type === "question"
//                 ? "bg-[#FEE2E2] border border-[#FCA5A5]"
//                 : "bg-[#FFF7ED] border border-[#FED7AA]"
//             }`}
//         >
//           {type === "material" && (
//             <Image
//               src={iconSrc || "/img/Material.png"}
//               width={32}
//               height={32}
//               alt="icon"
//             />
//           )}

//           {(type === "question" || type === "practice") && (
//             <LuBookOpen
//               size={22}
//               className="text-[var(--color-accent-orange)]"
//             />
//           )}

//           {type === "material" && badgeText && (
//             <span className="absolute -top-2 -right-2 text-[10px] px-2 py-[2px] bg-[var(--color-accent-orange)] text-white rounded-full">
//               {badgeText}
//             </span>
//           )}
//         </div>

//         {/* CONTENT */}
//         <div className="flex flex-col gap-2 w-full">

//           {/* TITLE */}
//           <h2 className="text-[16px] font-medium text-[#111827]">
//             {type === "question" ? question : title}
//           </h2>

//           {/* ================= PRACTICE ================= */}
//           {type === "practice" && (
//             <>
//               {/* questions • completed • difficulty */}
//               <div className="flex items-center gap-2 text-[13px] text-[#6B7280] flex-wrap">
//                 <span>{totalQuestions} questions</span>
//                 <span>•</span>
//                 <span>{completed} completed</span>

//                 {difficulty && (
//                   <>
//                     <span>•</span>
//                     <span
//                       className="text-[12px] px-2 py-[2px] rounded-full font-medium"
//                       style={{
//                         backgroundColor: getDifficultyColors(difficulty).bg,
//                         color: getDifficultyColors(difficulty).text,
//                       }}
//                     >
//                       {difficulty}
//                     </span>
//                   </>
//                 )}
//               </div>

//               {/* Progress text ABOVE bar */}
//               <div className="flex justify-between text-[13px] text-[#6B7280]">
//                 <span>Progress</span>
//                 <span className="font-medium text-[#111827]">
//                   {progress}%
//                 </span>
//               </div>

//               {/* Progress bar */}
//               <div className="w-full bg-[#FFE5DB] rounded-full h-2 overflow-hidden">
//                 <div
//                   className="bg-[var(--color-accent-orange)] h-full"
//                   style={{ width: `${progress}%` }}
//                 />
//               </div>
//             </>
//           )}

//           {/* ================= MATERIAL ================= */}
//           {type === "material" && (
//             <>
//               <p className="text-[14px] text-[#6B7280]">{paragraph}</p>

//               <div className="flex flex-wrap gap-4 text-[13px] text-[#6B7280]">
//                 <span className="font-medium text-[#111827]">PDF</span>
//                 <span>{pages} pages</span>
//                 {MB && <span>{MB}</span>}
//                 <span>{date}</span>
//                 <span>{downloads} downloads</span>
//               </div>
//             </>
//           )}

//           {/* ================= QUESTION ================= */}
//           {type === "question" && (
//             <>
//               <div className="flex flex-wrap gap-3 text-[13px] text-[#6B7280]">
//                 <span>{paper} - {topic}</span>
//                 <span>{words} words</span>
//                 <span>{time} min</span>
//                 <span>{marks} marks</span>
//               </div>

//               <div className="flex gap-3">
//                 {difficulty && (
//                   <span
//                     className="text-[12px] px-2 py-[2px] rounded-full font-medium"
//                     style={{
//                       backgroundColor: getDifficultyColors(difficulty).bg,
//                       color: getDifficultyColors(difficulty).text,
//                     }}
//                   >
//                     {difficulty}
//                   </span>
//                 )}

//                 {score && (
//                   <span className="text-[12px] px-2 py-[2px] rounded-full bg-green-100 text-green-700">
//                     Score: {score}
//                   </span>
//                 )}
//               </div>

//               {feedback && (
//                 <div className="bg-gray-50 border-l-4 border-green-500 p-3 rounded">
//                   <p className="text-[14px] text-gray-600">{feedback}</p>
//                 </div>
//               )}
//             </>
//           )}
//         </div>
//       </div>

//       {/* RIGHT ACTION */}
//       <div className="flex items-start shrink-0">
//         {type === "material" && (
//           <div className="flex gap-4">
//             <div className="flex items-center gap-1 text-[#6B7280]">
//               <LuEye size={18} /> Preview
//             </div>
//             <button className="bg-[var(--color-accent-orange)] text-white px-3 py-2 rounded-md">
//               <LuDownload size={18} /> Download
//             </button>
//           </div>
//         )}

//         {type === "question" && status === "Writing Pending" && (
//           <button className="bg-[var(--color-accent-orange)] text-white px-4 py-2 rounded-md">
//             Start Writing
//           </button>
//         )}

//         {type === "practice" && (
//           <button className="bg-[var(--color-accent-orange)] text-white px-4 py-2 rounded-md">
//             Start Practice
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Card8;




import Image from "next/image";
import React from "react";
import { LuDownload, LuEye, LuBookOpen, LuCircleCheck } from "react-icons/lu";
import Button from "../comman/Button";

const getDifficultyColors = (difficulty) => {
  switch (difficulty) {
    case "Easy":
      return { bg: "#ECFDF5", text: "#059669" };
    case "Medium":
      return { bg: "#FF6029", text: "#FFFFFF" };
    case "Hard":
      return { bg: "#FEE2E2", text: "#EF4444" };
    default:
      return { bg: "#E5E7EB", text: "#6B7280" };
  }
};

const Card8 = ({ data, type, showImageProgress }) => {
  if (!data || !type) return null;

  const {
    title,
    paragraph,
    iconSrc,
    badgeText,
    pages,
    MB,
    date,
    downloads,
    question,
    paper,
    topic,
    words,
    time,
    marks,
    difficulty,
    status,
    score,
    feedback,
    totalQuestions,
    completed,
    progress,
  } = data;

  return (
    <div className="w-full border border-gray-200 bg-white rounded-lg p-4 flex flex-col sm:flex-row justify-between gap-4">
      <div className="flex gap-3 w-full">
      
        {!showImageProgress && (
          <div
            className={`w-12 h-12 flex items-center justify-center rounded-md shrink-0 relative
            ${
              type === "material"
                ? "bg-[#EFF6FF] border border-[#BEDBFF]"
                : type === "question"
                ? "bg-[#FEE2E2] border border-[#FCA5A5]"
                : "bg-[#FFF7ED] border border-[#FED7AA]"
            }`}
          >
            {type === "material" && (
              <Image src={iconSrc || "/img/Material.png"} width={32} height={32} alt="icon" />
            )}
            {(type === "question" || type === "practice") && (
              <LuBookOpen size={22} className="text-[#FF6029]" />
            )}
            {type === "material" && badgeText && (
              <span className="absolute -top-2 -right-2 text-[10px] px-2 py-[2px] bg-[#FF6029] text-white rounded-full">
                {badgeText}
              </span>
            )}
          </div>
        )}
        <div className="flex flex-col gap-2 w-full">
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-2">

              {showImageProgress && (
                <LuCircleCheck 
                  size={22} 
                  className={progress >= 75 ? "text-[#10B981]" : "text-[#9CA3AF]"} 
                />
              )}
              <h2 className="text-[16px] font-medium text-[#111827]">
                {type === "question" ? question : title}
              </h2>
            </div>
            {showImageProgress && (
              <span className="text-[14px] text-[#6B7280] font-medium">
                {completed}/{totalQuestions}
              </span>
            )}
          </div>
          {type === "practice" && (
            <>
              {!showImageProgress && (
                <div className="flex items-center gap-2 text-[13px] text-[#6B7280] flex-wrap">
                  <span>{totalQuestions} questions</span>
                  <span>•</span>
                  <span>{completed} completed</span>
                  {difficulty && (
                    <>
                      <span>•</span>
                      <span className="px-2 py-[1px] rounded-full text-[12px]" 
                            style={{ backgroundColor: getDifficultyColors(difficulty).bg, color: getDifficultyColors(difficulty).text }}>
                        {difficulty}
                      </span>
                    </>
                  )}
                </div>
              )}
              <div className="w-full bg-[#FFE5DB] rounded-full h-[8px] mt-1 overflow-hidden">
                <div 
                  className="bg-[#FF6029] h-full transition-all duration-500" 
                  style={{ width: `${progress}%` }} 
                />
              </div>
            </>
          )}

          {type === "material" && (
            <>
              <p className="text-[14px] text-[#6B7280]">{paragraph}</p>
              <div className="flex flex-wrap gap-4 text-[13px] text-[#6B7280]">
                <span className="font-medium text-[#111827]">PDF</span>
                <span>{pages} pages</span>
                {MB && <span>{MB}</span>}
                <span>{date}</span>
                <span>{downloads} downloads</span>
              </div>
            </>
          )}
          {type === "question" && (
            <>
              <div className="flex flex-wrap gap-3 text-[13px] text-[#6B7280]">
                <span>{paper} - {topic}</span>
                <span>{words} words</span>
                <span>{time} min</span>
                <span>{marks} marks</span>
              </div>
              {feedback && (
                <div className="bg-gray-50 border-l-4 border-green-500 p-3 rounded mt-2">
                  <p className="text-[14px] text-gray-600">{feedback}</p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
      {!showImageProgress && (
        <div className="flex items-start shrink-0">
          {type === "material" && (
            <div className="flex gap-4">
              <div className="flex items-center gap-1 text-[#6B7280] cursor-pointer text-[14px]">
                <LuEye size={18} /> Preview
              </div>
              <Button className="bg-[#FF6029] text-white px-3 py-2 rounded-md flex items-center gap-1 text-[14px]">
                <LuDownload size={18} /> Download
              </Button>
            </div>
          )}
          {(type === "practice" || type === "question") && (
            <Button className="bg-[#FF6029] text-white px-4 py-2 rounded-md text-[14px]">
              {type === "practice" ? "Start Practice" : "Start Writing"}
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default Card8;