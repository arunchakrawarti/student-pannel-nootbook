import AnswerPracticeCard from "@/components/molecules/AnswerPracticeCard";
import practicedata from "../../../../public/db/practicedata.json";
import { MdOutlineArrowBack } from "react-icons/md";
import Image from "next/image";

const StudyMaterialList = () => {
  return (
    <div className="md:px-10 px-6">
      <div className="flex items-center gap-3 mt-2 mb-5 ">
        <MdOutlineArrowBack className="text-[22px]" />
        <h2 className="font-inter font-medium text-[15px] md:text-[18px]">
          Back to Courses
        </h2>
      </div>
      <div className="flex items-center gap-3">
        <div>
          <Image
            src="/img/Practice/salect.png"
            height={42}
            width={36}
            alt="select.png"
          />
        </div>
        <div>
          <h2 className="font-inter text-[var(--color-accent-blue)] font-normal text-[30px] tracking-[0.4px]">
            History
          </h2>
          <p className="font-inter text-gray-600 font-normal text-[17px] tracking-[-0.31px]">
            Select a topic to start practicing
          </p>

        </div>
      </div>
      <div className="flex flex-col mt-4 gap-4">
        {practicedata.map((item, index) => (
          <AnswerPracticeCard
            key={index}
            data={item}
            type={item.type}
          />
        ))}
      </div>
    </div>
  );
};

export default StudyMaterialList;
