import React, { useContext } from 'react'
import { TbTemperatureCelsius } from "react-icons/tb";
import { FaWind } from "react-icons/fa";
import { CityContext } from '../CityContext';
function CurrentWeather() {
  const {temperature}= useContext(CityContext)
  return (
    <div className="w-[70%] h-[20%] border-b-[1px] border-stone-500 flex flex-wrap">
        <div className="w-[100%] h-[60%] text-7xl text-slate-50 flex justify-center">
          {temperature}
          <TbTemperatureCelsius />
        </div>

        <div className="w-[100%] h-[30%] flex flex-grow justify-center items-center">
          <div className="text-sm  text-slate-50 pr-1">
            <FaWind />
          </div>
          <div className="text-sm text-slate-50 p-1">سرعت وزش باد</div>
          <div className="text-sm text-slate-50 p-1">39 km/h</div>
        </div>
      </div>
  )
}

export default CurrentWeather
