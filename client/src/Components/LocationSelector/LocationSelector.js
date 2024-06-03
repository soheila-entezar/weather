import React from 'react'
import { GrLocation } from "react-icons/gr";
import { SlArrowDown } from "react-icons/sl";
function LocationSelector() {
  return (
    <div className="w-[70%] h-[5%] border-[0.6px] rounded-md border-stone-500 flex mt-2">
        <div className="w-[80%] flex-grow flex items-center text-slate-50 justify-around ">
          <div className="w-2/12">
            <GrLocation />
          </div>
          <div className="w-9/12 font-['yekan']">تبریز</div>
        </div>

        <div className=" flex-grow flex items-center justify-center border-l-[1px] border-stone-500 text-slate-50">
          <SlArrowDown />
        </div>
      </div>
  )
}

export default LocationSelector
