import React, { useState } from "react";
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

const NewExpenseItem = ({ setOpen3, addExpense }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [formattedDate, setFormattedDate] = useState("");
  const [expenseData, setExpenseData] = useState({
    date: "",
    type: "",
    reason: "",
    amount: ""
  });
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);

  const handleCalendarClick = () => setOpen(!open);

  const handleDateChange = (date) => {
    const formatted = `${date.getFullYear()}-${(date.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}`;
    setStartDate(date);
    setFormattedDate(formatted);
    setExpenseData((prevData) => ({ ...prevData, date: formatted }));
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setExpenseData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleAddExpense = (e) => {
    e.preventDefault();
    if (expenseData.date && expenseData.type && expenseData.reason && expenseData.amount) {
      addExpense(expenseData);
      setOpen3(false); // Close modal
    } else {
      alert("Please fill in all required fields.");
    }
  };

  return (
    <div className="text-black text-sm fixed bottom-0 left-0 right-0 z-50 bg-slate-200">
      <div>
        <div className="flex justify-between gap-5 font-bold p-3">
          <div onClick={() => setOpen3(false)}>
            <CommonButtonClear />
          </div>
          <p>New Expense Item</p>
          <div onClick={() => setOpen3(false)}>
            <CommonButtonClose close="Close" />
          </div>
        </div>
        <div className="h-[1px] w-full bg-gray-400 mb-2 my-1"></div>

        <form className="px-5" onSubmit={handleAddExpense}>
          <fieldset className="relative border-[1px] border-gray-600 rounded-xl">
            <legend className="ml-3 px-[5px] text-xs text-gray-500">
              Select date
            </legend>
            <div className="flex gap-4 items-center w-full pl-4 pb-2">
              <SlCalender
                onClick={handleCalendarClick}
                className="text-[#FF0000] text-lg font-bold"
              />
              <DatePicker
                className="bg-transparent text-black font-medium border-none outline-none"
                selected={startDate}
                onChange={handleDateChange}
                open={open}
                onClickOutside={() => setOpen(false)}
                onFocus={handleCalendarClick}
              />
            </div>
          </fieldset>

          <fieldset className="relative border-[1px] border-gray-600 rounded-xl mt-3 pt-1">
            <div className="flex justify-between gap-2 items-center w-full pl-4 pb-2">
              <div className="flex gap-2">
                <RiExchangeDollarFill className="text-[#FF0000] text-xl" />
                <input
                  name="type"
                  type="text"
                  className="bg-transparent w-full text-black outline-none"
                  placeholder="Select expense type*"
                  value={expenseData.type}
                  onChange={handleChange}
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

          <fieldset className="relative border-[1px] border-gray-600 rounded-xl mt-3 pt-1">
            <div className="flex gap-2 items-center w-full pl-4 pb-2">
              <TbBrandReason className="text-[#FF0000] text-xl" />
              <input
                name="reason"
                type="text"
                className="bg-transparent w-full p-1 mr-2 text-black outline-none"
                placeholder="Type reason here...*"
                value={expenseData.reason}
                onChange={handleChange}
              />
            </div>
          </fieldset>

          <fieldset className="relative border-[1px] border-gray-600 rounded-xl mt-3 pt-1">
            <div className="flex gap-2 items-center w-full pl-4 pb-2">
              <RiExchangeDollarFill className="text-[#FF0000] text-xl" />
              <input
                name="amount"
                type="number"
                className="bg-transparent w-full text-black outline-none"
                placeholder="Type amount*"
                value={expenseData.amount}
                onChange={handleChange}
              />
            </div>
          </fieldset>

          <button
            type="submit"
            className="bg-gradient-to-r from-black to-[#FF0000] text-white p-2 mt-10 rounded-xl mb-3 w-full font-bold"
          >
            Add Expense
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewExpenseItem;
