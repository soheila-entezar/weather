import React, { useState } from "react";
import WeatherConditions from "../Components/WeatherConditions/WeatherConditions";
import DailyWeatherOverview from "../Components/DailyWeatherOverview/DailyWeatherOverview";
function Home() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoPath = [
    { src: "/Video/Rain.mp4" },
    { src: "/Video/Snow.mp4" },
    { src: "/Video/Sunny.mp4" },
    { src: "/Video/Wind.mp4" },
  ];
  return (
    <>
      <video
        className=" w-full min-h-screen flex justify-center items-center bg-cover bg-center relative overflow-auto"
        src={videoPath[currentVideoIndex].src}
        autoPlay
        loop
        muted
        
      >
        <div className="w-full h-[100vh] bg-white bg-opacity-[0.1]  flex justify-center items-center overflow-auto">
          <div className="w-[95%] h-[90%] bg-white bg-opacity-45 flex justify-center items-center rounded-lg">
            <div className="w-[97%] md:w-[98%] lg:w-[99%] h-[98%] bg-cover bg-center backImage bg-opacity-100 rounded-md flex  sm:flex-row justify-end flex-wrap">
              <DailyWeatherOverview />
              <WeatherConditions />
            </div>
          </div>
        </div>
      </video>
    </>
  );
}

export default Home;
