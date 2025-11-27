import SubjectCard from "@/components/molecules/SubjectCard";
import subjectdata from "../../../../public/db/subjectdata.json"; 

const Subject = () => {
  return (
    <div className="space-y-4 mt-5 border border-gray-300 rounded-md p-4">
        <h1 class="font-inter font-medium text-[16px] leading-[16px] tracking-[-0.31px]">
 Subject-wise Performance
</h1>

      {subjectdata.map((item, index) => (
        <SubjectCard
          key={index}
          subject={item.subject}
          correct={item.correct}
          wrong={item.wrong}
          small={item.small}
          progress={item.progress}
        />
      ))}

     <div className="flex pt-5 justify-end">
  <button
    className="
      font-inter font-medium text-[14px] leading-[20px] tracking-[-0.15px]
      bg-[#FF6029] text-white rounded-md 
      py-2 
      px-5 sm:px-20 md:px-8 lg:px-30
      w-full sm:w-auto
    "
  >
    View Solutions
  </button>
</div>

    </div>
  );
};

export default Subject;
