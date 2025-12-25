import Image from "next/image";
import React from "react";
import {
  LuBookOpen,
  LuFile,
  LuClock,
  LuTrophy,
  LuFileText,
} from "react-icons/lu";

const getDifficultyColors = (difficulty) => {
  switch (difficulty) {
    case "Easy": return { bg: "#ECFDF5", text: "#047857" };
    case "Medium": return { bg: "#FF6029", text: "#FFFFFF" };
    case "Hard": return { bg: "#DC2626", text: "#FFFFFF" };
    default: return { bg: "#F3F4F6", text: "#374151" };
  }
};

const AnswerPracticeCard = ({ data }) => {
  if (!data) return null;

  const isPractice = data.type === "practice"; 
  const isQuestion = data.type === "question"; 

  return (
    <div className="w-full bg-white border border-gray-200 rounded-2xl p-5 md:p-6 flex flex-col gap-4">
      <div className="flex justify-between items-start gap-4">
        
       
        <div className="flex gap-4 flex-1">
          <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border ${
            isPractice ? "bg-orange-50 border-orange-100" : "bg-blue-50 border-blue-100"
          }`}>
            {isPractice ? (
              <LuBookOpen size={24} className="text-[var(--color-accent-orange)]" />
            ) : (
              <LuFileText size={22} className="text-blue-600" />
            )}
          </div>

          <div className="flex flex-col gap-1.5 flex-1">
            <h2 className="text-[17px] md:text-[20px] text-[#16344E] leading-snug">
              {isPractice ? data.title : data.question}
            </h2>

            <div className="flex flex-col gap-1.5">
            
              {isPractice && (
                <div className="flex items-center gap-2 text-[14px] text-gray-500">
                  <span>{data.totalQuestions} questions</span>
                  <span>•</span>
                  <span>{data.completed} completed</span>
                  <span>•</span>
                  <span
                    className="px-3 py-0.5 rounded-lg text-[12px]"
                    style={{
                      backgroundColor: getDifficultyColors(data.difficulty).bg,
                      color: getDifficultyColors(data.difficulty).text,
                    }}
                  >
                    {data.difficulty}
                  </span>
                </div>
              )}

              
              {isQuestion && (
                <>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] text-gray-500">
                    <span className="flex items-center gap-1"><LuBookOpen size={14} /> {data.paper} - {data.topic}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><LuFile size={14} /> {data.words} words</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><LuClock size={14} /> {data.time} min</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><LuTrophy size={14} /> {data.marks} marks</span>
                  </div>
                  
                  <div className="flex items-center gap-2 mt-1">
                    <span
                      className="px-2 py-0.5 rounded text-[10px] font-bold uppercase"
                      style={{
                        backgroundColor: getDifficultyColors(data.difficulty).bg,
                        color: getDifficultyColors(data.difficulty).text,
                      }}
                    >
                      {data.difficulty}
                    </span>
                    {data.score && (
                      <span className="bg-[#E6F9F1] text-[#059669] text-[10px] font-bold px-2 py-0.5 rounded border border-[#BFF2DE]">
                        Score: {data.score}
                      </span>
                    )}
                    {data.status === "Under Evaluation" && (
                      <span className="bg-[#FFFBEB] text-[#B45309] px-2 py-0.5 rounded text-[10px] font-bold border border-[#FEF3C7]">
                        UNDER EVALUATION
                      </span>
                    )}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

      
        <div className="flex flex-col items-end gap-2 shrink-0">
         
          {isPractice && (
            <button className="bg-[var(--color-accent-orange)] text-white text-[15px] px-6 py-2.5 rounded-xl transition-all shadow-sm">
              Start Practice
            </button>
          )}

         
          {isQuestion && (
            <>
              {(data.status === "Writing Pending" || !data.status) && !data.feedback && (
                <button className="bg-[var(--color-accent-orange)] text-white text-[14px] font-bold px-6 py-2.5 rounded-xl transition-all shadow-sm">
                  Start Writing
                </button>
              )}
              {data.feedback && (
                <div className="flex flex-col items-end gap-1">
                  <button className="text-gray-500 text-[13px] font-medium px-2 py-1 hover:text-black hover:underline transition-all">
                    View Feedback
                  </button>
                  <button className="bg-[var(--color-accent-orange)] text-white text-[14px] font-bold px-8 py-2 rounded-xl transition-all shadow-sm">
                    Rewrite
                  </button>
                </div>
              )}
              {data.status === "Under Evaluation" && (
                 <span className="text-gray-400 text-[14px] italic py-2 pr-2 font-medium">Evaluating...</span>
              )}
            </>
          )}
        </div>
      </div>

  
      {isPractice && typeof data.progress === "number" && (
        <div className="w-full flex">
       
          <div className="w-16 shrink-0 hidden md:block"></div> 
          
          <div className="flex-1">
            <div className="flex justify-between text-[12px] mb-1.5 font-medium text-gray-500 px-1">
              <span className="text-[16px]">Progress</span>
              <span className="text-[#16344E] text-[16px]">{data.progress}%</span>
            </div>
         
            <div className="h-2 w-full bg-orange-50 rounded-full overflow-hidden border border-orange-100/50">
              <div
                className="h-full bg-[var(--color-accent-orange)] rounded-full transition-all duration-700"
                style={{ width: `${data.progress}%` }}
              />
            </div>
          </div>

        
          <div className="w-[155px] shrink-0 hidden md:block"></div>
        </div>
      )}

   
      {isQuestion && data.feedback && (
        <div className="bg-[#F4F9FF] border border-[#E0E7FF] p-4 rounded-xl mt-1 shadow-sm">
          <p className="text-[13px] md:text-[14px] text-[#1E40AF] leading-relaxed">
            <span className="font-bold">Feedback:</span> {data.feedback}
          </p>
        </div>
      )}
    </div>
  );
};

export default AnswerPracticeCard;