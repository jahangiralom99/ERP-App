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

const UpdateExpenseItem = ({ expense, onUpdate, setOpen4 }) => {
  const [startDate, setStartDate] = useState(new Date(expense?.date || Date.now()));
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [type, setType] = useState(expense?.type || "");
  const [reason, setReason] = useState(expense?.reason || "");
  const [amount, setAmount] = useState(expense?.amount || "");

  const handleCalendarClick = () => {
    setOpen((prev) => !prev);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (type && reason && amount) {
      const updatedExpense = {
        ...expense,
        date: startDate,
        type,
        reason,
        amount,
      };
      onUpdate(updatedExpense); // Call the update function
      setOpen4(false); // Close the modal
    } else {
      alert("Please fill in all required fields.");
    }
  };

  return (
    <div className="text-black text-sm fixed bottom-0 z-50 left-0 right-0 bg-slate-200">
      <div>
        <div className="flex justify-between font-bold p-3">
          <div onClick={() => setOpen4(false)}>
            <CommonButtonClear />
          </div>
          <p>Edit Expense Item</p>
          <div onClick={() => setOpen4(false)}>
            <CommonButtonClose close="Close" />
          </div>
        </div>
        <div className="h-[1px] w-full bg-gray-400 mb-2 my-1"></div>

        <form onSubmit={handleSubmit} className="px-5">
          {/* Date Picker */}
          <fieldset className="relative border-[1px] border-gray-600 rounded-xl">
            <legend className="ml-3 px-[5px] text-xs text-gray-500">Select date</legend>
            <div className="flex gap-4 items-center w-full pl-4 pb-2">
              <SlCalender
                onClick={handleCalendarClick}
                className="text-[#FF0000] text-lg font-bold"
              />
              <DatePicker
                className="bg-transparent text-black font-medium"
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

          {/* Expense Type */}
          <fieldset
            onClick={() => setOpen1(!open1)}
            className="relative border-[1px] border-gray-600 rounded-xl mt-3 pt-1"
          >
            <div className="flex justify-between gap-2 items-center w-full pl-4 pb-2">
              <div className="flex gap-2">
                <RiExchangeDollarFill className="text-[#FF0000] text-xl" />
                <input
                  type="text"
                  className="bg-transparent w-full text-black outline-none"
                  placeholder="Select expense type*"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
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

          {/* Reason */}
          <fieldset className="relative border-[1px] border-gray-600 rounded-xl mt-3 pt-1">
            <div className="flex gap-2 items-center w-full pl-4 pb-2">
              <TbBrandReason className="text-[#FF0000] text-xl" />
              <input
                type="text"
                className="bg-transparent w-full text-black outline-none"
                placeholder="Type reason here...*"
                value={reason}
                onChange={(e) => setReason(e.target.value)}
              />
            </div>
          </fieldset>

          {/* Amount */}
          <fieldset className="relative border-[1px] border-gray-600 rounded-xl mt-3 pt-3">
            <div className="flex gap-2 items-center w-full pl-4 pb-2 outline-none">
              <RiExchangeDollarFill className="text-[#FF0000] text-xl" />
              <input
                type="number"
                className="bg-transparent w-full text-black outline-none"
                placeholder="Type amount*"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
          </fieldset>

          <button
            type="submit"
            className="bg-gradient-to-r from-black to-[#FF0000] text-white p-2 mt-10 rounded-xl mb-3 w-full font-bold"
          >
            Update Expense
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateExpenseItem;
