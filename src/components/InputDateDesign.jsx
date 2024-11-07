import { useState } from "react";
import DatePicker from "react-datepicker";
import { SlCalender } from "react-icons/sl";

const InputDateDesign = ({
  label,
  popperPlacement,
  setFormattedDate,
  formattedDate,
}) => {
  const [open, setOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const handleCalendarClick = () => {
    setOpen((prev) => !prev);
  };

  // console.log(formattedDate);

  return (
    <div className="">
      <fieldset className="border-[1px] border-gray-600 rounded-xl">
        <legend className="ml-3 px-[5px] text-xs text-gray-500">
          {label} <span className="text-[#FF0000] text-xl">*</span>
        </legend>
        <div className="flex items-center  gap-2 pl-4 pb-2">
          <SlCalender
            onClick={handleCalendarClick}
            className="text-[#E70006] text-lg  "
          />
          <DatePicker
            className="bg-transparent text-black font-medium border-none outline-none"
            selected={formattedDate}
            onChange={(date) => {
              // Format the date as YYYY-MM-DD
              const formattedDate = `${date.getFullYear()}-${(
                date.getMonth() + 1
              )
                .toString()
                .padStart(2, "0")}-${date
                .getDate()
                .toString()
                .padStart(2, "0")}`;

              setStartDate(date); // Set the Date object
              setFormattedDate(formattedDate); // Set the formatted string
              setOpen(false); // Close the date picker after selection
            }}
            onClickOutside={() => setOpen(false)} // Close on outside click
            open={open} // Control the open state
            onFocus={handleCalendarClick} // Open on focus
          />
        </div>
      </fieldset>
    </div>
  );
};

export default InputDateDesign;
