import React from "react";
import LocationSelector from "../LocationSelector/LocationSelector";
import CurrentWeather from "../CurrentWeather/CurrentWeather";
import WeatherForecast from "../WeatherForecast/WeatherForecast";

function WeatherConditions() {
  return (
    <div className="w-[100%] sm:w-[40%] md:w-[30%] lg:w-[20%] h-[100%]  sm:mt-0 bg-white bg-opacity-[0.1] rounded-lg md:rounded-r-lg   flex justify-center order-1 sm:order-2 flex-wrap">
      <LocationSelector />
      {/* line */}
     <CurrentWeather />
      {/* line */}
      <WeatherForecast />
    
    </div>
  );
}

export default WeatherConditions;
