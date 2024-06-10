import React, { useState } from 'react'
import { GrLocation } from "react-icons/gr";
import { SlArrowDown } from "react-icons/sl";

function LocationSelector() {
  const [option, setOption] = useState([
    { id: 1, name: 'تبریز' },
    { id: 2, name: 'مرند' },
    { id: 3, name: 'اهر' },
  ]);
  const [selectedOption, setSelectedOption] = useState(option[0].name);

  const handleChange = (event) => {
    const newValue = event.target.value;
    setSelectedOption(newValue);
    alert(`شهر جدید: ${newValue}`);
  };

  return (
    <div className="w-[70%] h-[5%] border-[0.6px] rounded-md border-stone-500 flex mt-2">
      <div className="flex-grow flex items-center justify-center border-r-[1px] border-stone-500 text-slate-50">
        <SlArrowDown />
      </div>
      <div className="w-[70%] flex-grow flex items-center text-slate-50 justify-around">
        <select
          className="w-9/12 appearance-none outline-none pb-1 bg-transparent border-none"
          onChange={handleChange}
          value={selectedOption}
        >
          {option.map((item) => (
            <option
              className="w-9/12 font-['yekan'] option-custom text-end"
              key={item.id}
              value={item.name}
            >
              {item.name}
            </option>
          ))}
        </select>
        <div className="w-2/12 flex flex-grow justify-center">
          <GrLocation />
        </div>
      </div>
    </div>
  );
}

export default LocationSelector;
