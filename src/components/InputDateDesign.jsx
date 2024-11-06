import { useState } from "react";
import DatePicker from "react-datepicker";
import { SlCalender } from "react-icons/sl";

const InputDateDesign = ({ label, popperPlacement }) => {
  const [open, setOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const handleCalendarClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="text-sm">
      <fieldset className="border-[1px] border-gray-600 rounded-xl">
        <legend className="ml-3 px-[5px] text-xs text-gray-500">{label}</legend>
        <div className="flex  items-center  gap-2  pl-4 pb-2">
          <SlCalender
            onClick={handleCalendarClick}
            className="text-[#E70006] text-lg  "
          />
          <DatePicker
            className="bg-transparent w-full  text-black  outline-none "
            selected={startDate}
            onChange={(date) => {
              setStartDate(date);
              setOpen(false); // Close the date picker after selection
            }}
            onClickOutside={() => setOpen(false)} // Close when clicking outside
            open={open} // Control the open state
            onFocus={handleCalendarClick} // Open on focus
            popperPlacement={popperPlacement} // Change the position to bottom-end
          />
        </div>
      </fieldset>
    </div>
  );
};

export default InputDateDesign;
