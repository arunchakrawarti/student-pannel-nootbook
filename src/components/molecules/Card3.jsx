// import Image from "next/image";
// import React from "react";
// import { MdOutlineFileDownload } from "react-icons/md";

// const Card3 = ({
//   color,
//   img,
//   title,
//   month,
//   buttonType = "view",     // view | download | watch | rewatch
//   status                  // completed | pending | null
// }) => {

//   // Auto-select icons based on lecture status
//   const getStatusIcon = () => {
//     if (status === "completed") {
//       return {
//         bg: "bg-[#E8FDF3]",
//         icon: "/img/pathicon.png",
//       };
//     }
//     if (status === "pending") {
//       return {
//         bg: "bg-[#FFF3EB]",
//         icon: "/img/youtube.png",
//       };
//     }
//     return null;
//   };

//   const statusIcon = getStatusIcon();

//   return (
//     <div className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0">

//       {/* LEFT ICON + TEXT */}
//       <div className="flex gap-3 items-center">

//         {/* PRIORITY 1: Custom Image */}
//         {img && (
//           <div className="h-10 w-10 flex items-center justify-center rounded-md bg-[#FFEDE5]">
//             <Image src={img} height={22} width={22} alt="custom-icon" />
//           </div>
//         )}

//         {/* PRIORITY 2: Lecture Status Icons */}
//         {!img && statusIcon && (
//           <div className={`h-10 w-10 rounded-full flex items-center justify-center ${statusIcon.bg}`}>
//             <Image src={statusIcon.icon} height={22} width={22} alt="status-icon" />
//           </div>
//         )}

//         {/* PRIORITY 3: Simple Small Dot */}
//         {!img && !statusIcon && (
//           <span className={`block w-2 h-2 rounded-full ${color}`}></span>
//         )}

//         {/* TEXT */}
//         <div>
//           <h2 className="font-inter font-normal text-[16px] leading-[24px] tracking-[-0.31px]">
//             {title}
//           </h2>
//           <p className="font-inter font-normal text-[12px] text-[#94A3B8] leading-[16px] mt-0.5">
//             {month}
//           </p>
//         </div>
//       </div>

//       {/* RIGHT BUTTONS */}
//       <div>

//         {/* VIEW BUTTON */}
//         {buttonType === "view" && (
//           <button className="text-[12px] font-medium text-[#1E293B]">
//             View
//           </button>
//         )}

//         {/* DOWNLOAD BUTTON */}
//         {buttonType === "download" && (
//           <button className="text-[12px] font-medium text-[#1E293B] flex items-center gap-1">
//             <MdOutlineFileDownload className="text-[18px]" />
//           </button>
//         )}

//         {/* REWATCH BUTTON */}
//         {buttonType === "rewatch" && (
//           <button className="text-white bg-[var(--color-accent-orange)] text-xs font-medium px-4 py-1.5 rounded-md">
//             Rewatch
//           </button>
//         )}

//         {/* WATCH BUTTON */}
//         {buttonType === "watch" && (
//           <button className="text-white bg-[var(--color-accent-orange)]  text-xs font-medium px-4 py-1.5 rounded-md">
//             Watch
//           </button>
//         )}

//       </div>
//     </div>
//   );
// };

// export default Card3;



import Image from "next/image";
import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";
import { SlCalender, SlClock } from "react-icons/sl";
import { BsCameraVideo } from "react-icons/bs";

const Card3 = ({
  color,
  img,
  title,
  month, 
  buttonType = "view", 
  status, 
  type = "default", 
  sessionTitle,
  sessionBy,
  sessionDate,
  sessionTime,
  sessionDuration,
}) => {

  const getStatusIcon = () => {
    if (status === "completed") {
      return {
        bg: "bg-[#E8FDF3]",
        icon: "/img/pathicon.png",
      };
    }
    if (status === "pending") {
      return {
        bg: "bg-[#FFF3EB]",
        icon: "/img/youtube.png",
      };
    }
    return null;
  };

  const statusIcon = getStatusIcon();

  if (type === "session") {
    return (
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-4 px-3 border-b border-gray-100 last:border-0 bg-white w-full">
       
        <div className="flex flex-col sm:flex-1 gap-1.5 w-full sm:w-auto">
          <h2 className="font-inter font-medium text-base sm:text-[16px] leading-6 sm:leading-6 text-[#1E293B]">
            {sessionTitle || "Polity - Constitutional Amendments"}
          </h2>
          <p className="font-inter text-sm sm:text-[12px] text-[#475569] leading-4">
            by {sessionBy || "Dr. Vikas Singh"}
          </p>
          
          <div className="flex flex-wrap gap-3 mt-2 text-sm text-[#475569]">
            <span className="flex items-center gap-1">
              <SlCalender className="text-[12px]" />
              {sessionDate || "16 Nov 2025"}
            </span>
            <span className="flex items-center gap-1">
              <SlClock className="text-[12px]" />
              {sessionTime || "6:00 PM"}
            </span>
            <span className="flex items-center gap-1">
              <BsCameraVideo className="text-[12px]" />
              {sessionDuration || "90 min"}
            </span>
          </div>
        </div>

        <div className="mt-3 sm:mt-0 sm:ml-4 w-full sm:w-auto">
          <button 
            className="w-full sm:w-auto text-white bg-[#1E293B] text-sm sm:text-xs font-medium px-4 py-2 rounded-md transition duration-200 hover:bg-[#0f172a]"
            onClick={() => console.log("Reminder Set")}
          >
            Set Reminder
          </button>
        </div>
      </div>
    );
  }

  // --- DEFAULT TYPE ---
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-3 px-3 border-b border-gray-100 last:border-0 bg-white w-full">
      
      {/* LEFT ICON + TEXT */}
      <div className="flex flex-1 flex-wrap sm:flex-nowrap gap-3 items-start sm:items-center w-full sm:w-auto">
        {img && (
          <div className="h-10 w-10 flex items-center justify-center rounded-md bg-[#FFEDE5]">
            <Image src={img} height={22} width={22} alt="custom-icon" />
          </div>
        )}

        {!img && statusIcon && (
          <div className={`h-10 w-10 rounded-full flex items-center justify-center ${statusIcon.bg}`}>
            <Image src={statusIcon.icon} height={22} width={22} alt="status-icon" />
          </div>
        )}

        {!img && !statusIcon && <span className={`block w-2 h-2 rounded-full ${color}`}></span>}

        <div className="flex-1 min-w-0">
          <h2 className="font-inter font-medium text-base sm:text-[16px] leading-6 truncate">
            {title}
          </h2>
          <p className="font-inter text-sm sm:text-[12px] text-[#94A3B8] leading-4 mt-0.5 truncate">
            {month}
          </p>
        </div>
      </div>

      {/* RIGHT BUTTONS */}
      <div className="mt-3 sm:mt-0 sm:ml-4 w-full sm:w-auto flex flex-wrap gap-2">
        {buttonType === "view" && (
          <button className="text-sm font-medium text-[#1E293B]">View</button>
        )}
        {buttonType === "download" && (
          <button className="text-sm font-medium text-[#1E293B] flex items-center gap-1">
            <MdOutlineFileDownload className="text-[18px]" />
          </button>
        )}
        {buttonType === "rewatch" && (
          <button className="text-white bg-[var(--color-accent-orange)] text-xs font-medium px-4 py-1.5 rounded-md">
            Rewatch
          </button>
        )}
        {buttonType === "watch" && (
          <button className="text-white bg-[var(--color-accent-orange)] text-xs font-medium px-4 py-1.5 rounded-md">
            Watch
          </button>
        )}
        {buttonType === "reminder" && (
          <button className="text-white bg-[var(--color-accent-blue)] text-xs font-medium px-4 py-1.5 rounded-md">
            Set Reminder
          </button>
        )}
      </div>
    </div>
  );
};

export default Card3;
