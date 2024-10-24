import { useState } from "react";
import DatePicker from "react-datepicker";
import {
  RiArrowDropDownLine,
  RiArrowDropRightLine,
  RiExchangeDollarFill,
} from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { TbBrandReason } from "react-icons/tb";
import CommonButtonClose from "./Button/CommonButtonClose";
import CommonButtonClear from "./Button/CommonButtonClear";

const UpdateExpenseItem = ({ setOpen4 }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const handleCalendarClick = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div className="text-black text-sm fixed bottom-0 left-0 right-0 z-10 bg-slate-200 ">
      <div>
        <div className="flex justify-between  font-bold p-3">
          <div onClick={() => setOpen4(false)}>
            <CommonButtonClear />
          </div>
          {/* <p className="text-[#FF0000]">Clear</p> */}
          <p>Edit Expense Item</p>
          {/* <p  className="text-[#FF0000] ">
            Close
          </p> */}
          <div onClick={() => setOpen4(false)}>
            <CommonButtonClose close="Close" />
          </div>
        </div>
        <div className="h-[1px] w-full bg-gray-400 mb-2 my-1"></div>

        <form className="px-5">
          {/* date */}

          <fieldset className="relative border-[1px] border-gray-600 rounded-xl">
            <legend className="ml-3 px-[5px] text-xs text-gray-500">
              Select date
            </legend>
            <div className="flex  gap-4 items-center w-full pl-4 pb-2">
              <SlCalender
                onClick={handleCalendarClick}
                className="text-[#FF0000] text-lg font-bold"
              />
              <DatePicker
                className="bg-transparent text-black font-medium  "
                selected={startDate}
                onChange={(date) => {
                  setStartDate(date);
                  setOpen(false); // Close the date picker after selection
                }}
                onClickOutside={() => setOpen(false)} // Close when clicking outside
                open={open} // Control the open state
                onFocus={handleCalendarClick} // Open on focus
              />
            </div>
          </fieldset>

          {/* Expense type */}

          <fieldset
            onClick={() => setOpen1(!open1)}
            className="relative border-[1px] border-gray-600 rounded-xl mt-3 pt-1"
          >
            <div className=" flex justify-between gap-2 items-center w-full pl-4 pb-2">
              <div className="flex gap-2">
                <RiExchangeDollarFill className="text-[#FF0000] text-xl" />

                <input
                  type="text"
                  className=" bg-transparent w- text-black outline-none"
                  placeholder="Select expense type*"
                  readOnly
                />
              </div>

              <div onClick={() => setOpen1(!open1)}>
                {open1 ? (
                  <RiArrowDropDownLine className="text-3xl ml-5 text-[#FF0000]" />
                ) : (
                  <RiArrowDropRightLine className="text-3xl ml-5 text-[#FF0000]" />
                )}
              </div>
            </div>
          </fieldset>
          {open1 && (
            <div className=" fixed bottom-14 px-3 left-1/2 -translate-x-1/2 bg-white rounded-box z-[1] w-[300px] p-2 shadow">
              <div>
                <div className="flex justify-center gap-6 item-center">
                  {/* <p className=" text-[12px] text-[#ff3232] font-bold">clear</p> */}
                  <div>
                    <CommonButtonClear />
                  </div>
                  {/* <p className=" text-[12px] text- font-bold">
                    Select Company{" "}
                  </p> */}
                  {/* <p
                    onClick={() => setOpen1(!open1)}
                    className=" text-[12px] text-blue-600 font-bold"
                  >
                    close
                  </p> */}
                  <div onClick={() => setOpen1(!open1)}>
                    <CommonButtonClose close="Close" />
                  </div>
                </div>
              </div>

              {/* search */}

              <label className="input input-bordered h-10 mt-3 flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input type="text" className="grow" placeholder="Search" />
              </label>

              <hr className="my-3" />
              <div className="flex gap-2 text-sm">
                <input
                  type="radio"
                  name="radio-1"
                  className="radio w-5 h-5"
                  defaultChecked
                />
                <p>Nesscale ESS</p>
              </div>
            </div>
          )}

          {/* reason */}

          <fieldset className="relative border-[1px] border-gray-600 rounded-xl mt-3 pt-1">
            <div className=" flex  gap-2 items-center w-full pl-4 pb-2">
              <TbBrandReason className="text-[#FF0000] text-xl" />
              <input
                type="text"
                className=" bg-transparent w-full p-1 mr-2 text-black outline-none"
                placeholder="Type reason here...*"
              />
            </div>
          </fieldset>

          {/*  type  amount */}

          <fieldset className="relative border-[1px] border-gray-600 rounded-xl mt-3 pt-3 ">
            <div className=" flex  gap-2 items-center w-full pl-4 pb-2 outline-none">
              <RiExchangeDollarFill className="text-[#FF0000] text-xl" />

              <input
                type="text"
                className=" bg-transparent w- text-black outline-none"
                placeholder="Type amount*"
              />
            </div>
          </fieldset>

          <button className="bg-gradient-to-r from-black to-[#FF0000] text-white p-2 mt-10 rounded-xl mb-3 w-full font-bold">
            <input type="submit" value={"Update Expense"} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateExpenseItem;
