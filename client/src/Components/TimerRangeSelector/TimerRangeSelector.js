import React from 'react'
import { WiDayCloudy } from "react-icons/wi";
import { WiDegrees } from "react-icons/wi";
import { WiDayCloudyGusts } from "react-icons/wi";
import { WiCloudy } from "react-icons/wi";
import { WiSunrise } from "react-icons/wi";
function TimerRangeSelector(props) {
  console.log(props)
  return (
    <div className="w-[30%] md:w-[6%] h-[30%] md:h-[60%] bg-white  bg-opacity-10 rounded-md flex justify-center flex-wrap hover:bg-opacity-[0.2] hover:bg-neutral-700">
      <div className=" w-[80%] h-[25%] text-slate-50 flex flex-grow justify-center items-center text-[12px]  border-b-[1px] border-stone-500 ">{props.time}</div>
      <div className="w-[45%] h-[40%] text-slate-50 flex flex-grow justify-center items-center text-[25px] ">{props.icon}</div>
      <div className="w-[100%] h-[25%] text-slate-50 flex flex-grow justify-center items-center font-bold">{props.temperature}<WiDegrees /></div>
    </div>
   
  )
}

export default TimerRangeSelector
