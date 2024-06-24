import React, { useState } from "react";
import WeatherConditions from "../Components/WeatherConditions/WeatherConditions";
import DailyWeatherOverview from "../Components/DailyWeatherOverview/DailyWeatherOverview";

function Home() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(3);
  const videoPath = [
    { src: "/Video/Rain.mp4" },
    { src: "/Video/Snow.mp4" },
    { src: "/Video/Sunny.mp4" },
    { src: "/Video/Wind.mp4" },
  ];

  return (
    <>
      <div className="w-full h-screen relative overflow-hidden">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
          src={videoPath[currentVideoIndex].src}
          autoPlay
          loop
          muted
        ></video>
        <div className="w-full h-full relative z-[1] bg-white bg-opacity-10 flex justify-center items-center overflow-auto">
          <div className="w-[95%] h-[90%] bg-white bg-opacity-45 flex justify-center items-center rounded-lg">
            <div className="w-[97%] md:w-[98%] lg:w-[99%] h-[98%] bg-cover bg-center bg-opacity-100 rounded-md flex sm:flex-row justify-end flex-wrap">
              <DailyWeatherOverview />
              <WeatherConditions />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
