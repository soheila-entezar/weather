import React from 'react'
import { WiRainWind } from "react-icons/wi";
import { WiDegrees } from "react-icons/wi";

function ForecastTimeRange() {
  return (
    <div className="w-[100%]  ">
    <div className="flex justify-around">
      <div className="w-[20%] rounded-md text-slate-50 bg-opacity-5 bg-white text-2xl flex flex-grow items-center justify-center">
        <WiRainWind />
      </div>
      <div className="w-[55%] flex flex-grow items-center justify-startr flex-wrap pl-2">
        <div className="text-[10px] text-slate-50">جمعه, 1اردیبهشت</div>
        <div className="text-[10px] text-slate-300">بارش باران</div>
      </div>
      <div className="w-[20%] border-l-[1px] border-stone-700  ">
        <div className="w-[100%] text-[14px] text-slate-200 flex justify-center  flex-grow items-center">9 <WiDegrees />
          
        </div>
        <div className=" w-[100%] text-[14px] text-slate-200 flex justify-center flex-grow items-center">16 <WiDegrees />
          
        </div>
      </div>
    </div>
  </div>
  )
}

export default ForecastTimeRange
