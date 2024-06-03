import React from 'react'
import { WiDayCloudy } from "react-icons/wi";
import { WiDegrees } from "react-icons/wi";
function SelctedWeathersTimeStatus() {
  return (
    <div className="w-[30%] md:w-[6%] h-[30%] md:h-[60%] bg-white  bg-opacity-10 rounded-md flex justify-center flex-wrap">
      <div className=" w-[100%] h-[25%] text-slate-50 flex flex-grow justify-center items-center text-[12px]">09:11</div>
      <div className="w-[45%] h-[40%] text-slate-50 flex flex-grow justify-center items-center text-[25px] "><WiDayCloudy /></div>
      <div className="w-[100%] h-[25%] text-slate-50 flex flex-grow justify-center items-center font-bold">9<WiDegrees /></div>
    </div>
   
  )
}

export default SelctedWeathersTimeStatus
