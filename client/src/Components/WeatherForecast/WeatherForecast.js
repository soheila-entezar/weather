import React from 'react'
import ForecastTimeRange from '../ForecastTimeRange/ForecastTimeRange'

function WeatherForecast() {
  return (
    <div className="w-[70%] h-[60%] border-b-[1px] border-stone-500 flex flex-wrap">
    <div className="w-[100%] h-[10%] text-slate-50 text-center text-sm font-bold">
      پیش بینی روزهای اینده
    </div>
    <div className=" w-[100%] h-[8%] flex justify-between">
      <button className="w-[30%] h-[80%] border-[1px]  rounded-md  border-none hover:bg-opacity-[0.5] hover:bg-neutral-800 text-slate-50 text-[12px] font-['samimBoldWoff2'] ">
        5 روز
      </button>
      <button className="w-[30%] h-[80%] border-[1px]  border-none  rounded-md hover:bg-opacity-[0.5] hover:bg-neutral-800 text-slate-50 text-[12px] font-['samimBoldWoff2']">
        14 روز
      </button>
      <button className="w-[30%] h-[80%] border-[1px]  border-none  rounded-md hover:bg-opacity-[0.5] hover:bg-neutral-800 text-slate-50 text-[12px] font-['samimBoldWoff2']">
        30 روز
      </button>
    </div>
    <ForecastTimeRange/>
    <ForecastTimeRange />
    <ForecastTimeRange />
    <ForecastTimeRange />
    <ForecastTimeRange />
  </div>
  )
}

export default WeatherForecast
