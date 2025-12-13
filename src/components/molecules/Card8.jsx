import Image from "next/image";
import React from "react";
import {
  LuFileChartColumnIncreasing, 
  LuClock4, 
  LuDownload,
  LuEye,  
  LuBookOpen, 
} from "react-icons/lu";

const getDifficultyColors = (difficulty) => {
  switch (difficulty) {
    case 'Easy':
      return { bg: "#ECFDF5", text: "#059669" }; 
    case 'Medium':
      return { bg: "#FF6029", text: "#FFFFFF" }; 
    case 'Hard':
      return { bg: "#FEE2E2", text: "#EF4444" }; 
    default:
      return { bg: "#E5E7EB", text: "#6B7280" }; 
  }
};

const Card8 = ({ data, type }) => {
  if (!data || !type) return null;
  
  const { title, paragraph, iconSrc, badgeText, pages, MB, date, downloads, 
          question, paper, topic, words, time, marks, difficulty, status, score, feedback } = data;

  const getPrimaryIcon = () => {
    if (type === 'material') {
      return (
        <Image
          src={iconSrc || "/img/Material.png"}
          height={32}
          width={32}
          className="object-contain"
          alt="icon"
        />
      );
    } else if (type === 'question') {
      return <LuBookOpen size={24} className="text-[var(--color-accent-orange)]" />; 
    }
    return null;
  };

  const getIconStyle = () => {
    if (type === 'material') {
      return "bg-[#EFF6FF] border border-[#BEDBFF]"; 
    } else if (type === 'question') {
      return "bg-[#FEE2E2] border border-[#FCA5A5] mt-1"; 
    }
    return "bg-gray-100 border border-gray-300";
  };
  
  const renderQuestionActions = () => {
    switch (status) {
      case "Evaluated":
        return (
          <div className="flex flex-col items-end gap-2">
            <button className="text-[14px] font-medium text-[var(--color-accent-orange)] transition duration-150">
              View Feedback
            </button>
            <button className="flex items-center gap-1 bg-[var(--color-accent-orange)] 
                               text-white px-3 py-2 rounded-md text-[14px] font-medium transition duration-150">
              Rewrite
            </button>
          </div>
        );
      case "Writing Pending":
        return (
          <button className="flex items-center gap-1 bg-[var(--color-accent-orange)]
                             text-white px-3 py-2 rounded-md text-[14px] font-medium transition duration-150">
            Start Writing
          </button>
        );
      case "Under Evaluation":
        return (
          <div className="flex flex-col items-center gap-1 pt-2">
            <span className="text-[14px] text-gray-500">Evaluating...</span>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full border border-gray-200 bg-white rounded-lg p-4
                    flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">

      <div className="flex items-start gap-3 w-full sm:w-[80%]">

        <div className={`relative flex items-center justify-center
                        ${getIconStyle()} rounded-md w-12 h-12 p-2 shrink-0`}>
          {getPrimaryIcon()}

          {type === 'material' && badgeText && (
            <span className="absolute -top-2 -right-2
                            text-[10px] px-2 py-[2px]
                            bg-[var(--color-accent-orange)] text-white
                            rounded-full font-medium">
              {badgeText}
            </span>
          )}
        </div>

        <div className="flex flex-col gap-1 w-full">
          <h2 className="text-[16px] font-medium text-[#1F2937]">
            {type === 'material' ? title : question}
          </h2>
          
          {type === 'material' && (
            <p className="text-[14px] text-[#6B7280]">{paragraph}</p>
          )}

          <div className="flex flex-col gap-2 mt-1">
            {type === 'material' && (
              <div className="flex flex-wrap items-center gap-4 text-[#6B7280]">
                <span className="font-medium text-[#111827] text-[13px]">PDF</span>
                <div className="flex items-center gap-1 text-[13px]">
                  <LuFileChartColumnIncreasing size={16} />
                  <span>{pages} pages</span>
                </div>
                {MB && <span className="text-[13px]">{MB}</span>}
                <div className="flex items-center gap-1 text-[13px]">
                  <LuClock4 size={16} />
                  <span>{date}</span>
                </div>
                <div className="flex items-center gap-1 text-[13px]">
                  <LuDownload size={16} />
                  <span>{downloads} downloads</span>
                </div>
              </div>
            )}

            {type === 'question' && (
              <>
                <div className="flex flex-wrap items-center gap-3 text-[#6B7280]">
                  <span className="font-medium text-[13px]">{paper} - {topic}</span>
                  <span className="text-gray-300">•</span>
                  <div className="flex items-center gap-1 text-[13px]">
                    <LuFileChartColumnIncreasing size={14} />
                    <span>{words} words</span>
                  </div>
                  <span className="text-gray-300">•</span>
                  <div className="flex items-center gap-1 text-[13px]">
                    <LuClock4 size={14} />
                    <span>{time} min</span>
                  </div>
                  <span className="text-gray-300">•</span>
                  <span className="text-[13px]">{marks} marks</span>
                </div>

                <div className="flex items-center gap-3 mt-1">
                  {difficulty && (
                    <span
                      className="text-[12px] px-2 py-[2px] rounded-full font-medium"
                      style={{ 
                        backgroundColor: getDifficultyColors(difficulty).bg,
                        color: getDifficultyColors(difficulty).text,
                      }}
                    >
                      {difficulty}
                    </span>
                  )}

                  {status === "Under Evaluation" && (
                    <span className="text-[12px] px-2 py-[2px] rounded-full font-medium bg-yellow-100 text-yellow-800">
                      Under Evaluation
                    </span>
                  )}

                  {score && (
                    <span className="text-[12px] px-2 py-[2px] rounded-full font-medium bg-[#D1FAE5] text-[#065F46]">
                      Score: {score}
                    </span>
                  )}
                </div>

                {feedback && status === "Evaluated" && (
                  <div className="mt-2 p-3 bg-gray-50 border-l-4 border-green-500 rounded-r-md">
                    <span className="text-[14px] font-medium text-gray-700">Feedback:</span>
                    <p className="text-[14px] text-gray-600">{feedback}</p>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      <div className="flex items-center sm:items-start justify-end sm:justify-start pt-1 sm:pt-0 shrink-0">
        {type === 'material' ? (
          <div className="flex items-center gap-3 sm:gap-5">
            <div className="flex items-center gap-1 text-[#6B7280] cursor-pointer">
              <LuEye size={18} />
              <span className="text-[14px] font-medium hidden sm:inline">Preview</span>
            </div>

            <button className="flex items-center gap-1 bg-[var(--color-accent-orange)]
                             text-white px-3 py-2 rounded-md transition duration-150 text-[14px]">
              <LuDownload size={18} />
              <span className="text-[14px] font-medium">Download</span>
            </button>
          </div>
        ) : (
          renderQuestionActions()
        )}
      </div>
    </div>
  );
};

export default Card8;