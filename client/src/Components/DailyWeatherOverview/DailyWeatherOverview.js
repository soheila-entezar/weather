import React from "react";
import SelctedWeathersTimeStatus from "../SelctedWeathersTimeStatus/SelctedWeathersTimeStatus";
function DailyWeatherOverview() {
  return (
    <div className="w-[100%] sm:w-[60%] md:w-[70%] lg:w-[80%] h-[100%] flex flex-wrap justify-center flex-grow overflow-hidden">
      <div className="w-[100%] md:w-[95%] flex justify-end flex-wrap">
        <div className="w-[100%] md:w-4/12 lg:w-3/12 h-[10%] md:h-[40%] lg:h-[55%] flex  pt-4">
          <div className="w-[70%] h-[10%] text-sm text-slate-50 flex flex-grow justify-center items-center bg-slate-800 bg-opacity-20">
            1403 اردیبهشت 1
          </div>
          <div className="w-[40%] h-[10%] text-sm text-slate-50 border-l-[1px] border-stone-500 flex flex-grow justify-center items-center bg-slate-800 bg-opacity-20">
            11:30
          </div>
        </div>

        <div className="w-[100%]  h-[10%] md:h-[20%] border-b-[1px] border-stone-500 flex justify-end items-center">
          <div className="text-slate-50 text-xl md:text-4xl font-bold font-['samim'] flex flex-wrap justify-end items-start">
            بارش باران سنگین
          </div>
        </div>
        <div className="w-[100%] h-[40%] md:h-[25%] flex justify-between items-center flex-wrap ">
          <SelctedWeathersTimeStatus />
          <SelctedWeathersTimeStatus />
          <SelctedWeathersTimeStatus />
          <SelctedWeathersTimeStatus />
          <SelctedWeathersTimeStatus />
          <SelctedWeathersTimeStatus />
          <SelctedWeathersTimeStatus />
          <SelctedWeathersTimeStatus />
          <SelctedWeathersTimeStatus />
          
        </div>
      </div>
    </div>
  );
}

export default DailyWeatherOverview;
