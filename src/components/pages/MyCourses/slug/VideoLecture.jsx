import VideoCard from "../../../molecules/VideoCard";
import videoList from "../../../../../public/db/videoList.json";

const VideoLecture = () => {
  return (
    <div className="flex flex-col gap-3">
      {videoList.map((item, index) => (
        <VideoCard
          key={index}
          img={item.img}
          title={item.title}
          description={item.description}
          button={item.button}
        />
      ))}
    </div>
  );
};

export default VideoLecture;
