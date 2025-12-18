import videoList from "../../../../../public/db/videoList.json";
import Card3 from "@/components/molecules/Card3";

const VideoLecture = () => {
  return (
    <div className="p-4 bg-white  rounded-2xl mt-8">
      <h1 className="font-inter font-normal text-[19px] tracking-[-0.31px]">
        Video Lectures
      </h1>

      <div className="flex mt-4 flex-col gap-3">

       {videoList.map((item, index) => (
        <Card3
          key={index}
          title={item.title}
          month={item.month}
          status={item.status}        
          buttonType={item.buttonType} 
        />
      ))}

      </div>
    </div>
  );
};

export default VideoLecture;
