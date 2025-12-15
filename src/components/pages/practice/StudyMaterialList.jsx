import Card8 from "@/components/molecules/Card8";
import practicedata from "../../../../public/db/practicedata.json";
import { MdOutlineArrowBack } from "react-icons/md";
import Image from "next/image";

const StudyMaterialList = () => {
  return (
    <div>
      <div className="flex items-center gap-3 mt-2 mb-5">
        <MdOutlineArrowBack className="text-[22px]" />
        <h2 className="font-inter font-medium text-[15px] md:text-[18px]">
          Back to Courses
        </h2>
      </div>
      <div className="flex items-center gap-3">
        <div>
          <Image
            src="/img/Practice/salect.png"
            height={40}
            width={36}
            alt="select.png"
          />
        </div>
        <div>
          <h2 className="font-inter font-normal text-[30px] leading-[36px] tracking-[0.4px]">
            History
          </h2>
          <p className="font-inter font-normal text-[16px] leading-[24px] tracking-[-0.31px]">
            Select a topic to start practicing
          </p>

        </div>
      </div>
      <div className="flex flex-col mt-4 gap-4">
        {practicedata.map((item, index) => (
          <Card8
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
