import React, { useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { FaBuildingColumns } from "react-icons/fa6";
import { RiArrowDropDownLine, RiArrowDropRightLine } from "react-icons/ri";
import { LuBuilding2 } from "react-icons/lu";
import { IoArrowUpCircleOutline } from "react-icons/io5";
import NewExpenseItem from "./NewExpenseItem";
import UpdateExpenseItem from "./UpdateExpenseItem";
import SubHeading from "./SubHeading";
import { Link } from "react-router-dom";
import Attachment from "./Shared/Attachment";
import CommonButtonClear from "./Button/CommonButtonClear";
import CommonButtonClose from "./Button/CommonButtonClose";
const UpdateExpense = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);

  const handleCalendarClick = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div className=" bg-white pb-12 mt-28 px-4  w-full">
      <SubHeading title="Back" />

      {/* form */}

      <form className=" pt-3 ">
        {/* company */}

        <fieldset
          onClick={() => setOpen1(!open1)}
          className="relative border-[1px] border-gray-600 rounded-xl mb-3 "
        >
          <legend className="ml-3 px-[5px] text-xs text-gray-500">
            Company<sup>*</sup>
          </legend>
          <div className=" flex justify-between gap-2 items-center w-full pl-4 pb-2">
            <LuBuilding2 className="text-[#FF0000] text-4xl" />
            <p className=" text-start w-[100px] whitespace-nowrap font-medium">
              Nesscale ESS
            </p>
            <input
              type="text"
              className=" bg-transparent w-full text-black outline-none"
              placeholder=""
              readOnly
            />

            <div onClick={() => setOpen1(!open1)}>
              {open1 ? (
                <RiArrowDropDownLine className="text-3xl ml-5 text-[#ff3232]" />
              ) : (
                <RiArrowDropRightLine className="text-3xl ml-5 text-[#ff3232]" />
              )}
            </div>
          </div>
        </fieldset>
        {open1 && (
          <div className="fixed border top-[190px] px-3 left-1/2 -translate-x-1/2 bg-white rounded-box z-[1] w-[340px] p-6 shadow">
            <div>
              <div className="flex justify-center gap-6">
                <div>
                  <CommonButtonClear />
                </div>
                {/* <p className=" text-[12px] text-[#ff3232] font-bold">clear</p> */}
                {/* <p className=" text-[12px] text- font-bold">Select Company </p> */}
                <div onClick={() => setOpen1(!open1)}>
                  <CommonButtonClose close="Close" />
                </div>
                {/* <p
                 
                  className=" text-[12px] text-blue-600 font-bold"
                >
                  close
                </p> */}
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
        {/* cost center */}

        <fieldset
          onClick={() => setOpen(!open)}
          className="relative border-[1px] border-gray-600 rounded-xl "
        >
          <legend className="ml-3 px-[5px] text-xs text-gray-500">
            Cost Center
          </legend>
          <div className=" flex justify-between gap-2 items-center w-full pl-4 pb-2">
            <FaBuildingColumns className="text-[#FF0000]" />
            <p className=" text-start w-[100px] whitespace-nowrap font-medium">
              Main-NE
            </p>
            <input
              type="text"
              className=" bg-transparent w-full text-black outline-none"
              placeholder=""
              readOnly
            />

            <div onClick={() => setOpen(!open)}>
              {open ? (
                <RiArrowDropDownLine className="text-3xl ml-5 text-[#ff3232]" />
              ) : (
                <RiArrowDropRightLine className="text-3xl ml-5 text-[#ff3232]" />
              )}
            </div>
          </div>
        </fieldset>
        {open && (
          <div className="fixed border top-[255px]  left-1/2 -translate-x-1/2 px-3  bg-white rounded-box z-[1] w-[300px] p-2 shadow">
            <div>
              <div className="flex justify-center gap-6">
                <div>
                  <CommonButtonClear />
                </div>
                {/* <p className=" text-[12px] text-[#ff3232] font-bold">clear</p> */}
                {/* <p className=" text-[12px] text- font-bold">Select Company </p> */}
                <div onClick={() => setOpen(!open)}>
                  <CommonButtonClose close="Close" />
                </div>
                {/* <p
                 
                  className=" text-[12px] text-blue-600 font-bold"
                >
                  close
                </p> */}
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
              <p>Main-NE</p>
            </div>
          </div>
        )}
      </form>

      {/* below part of form */}

      <div className="">
        <div className="flex justify-between mt-6 font-bold ">
          <p>Expenses</p>
          <button
            onClick={() => setOpen3(!open3)}
            className="text-[#FF0000] border border-[#FF0000] rounded-lg px-3 py-1  font-semibold"
          >
            Add
          </button>
        </div>

        {open3 && <NewExpenseItem setOpen3={setOpen3} />}

        <div
          onClick={() => setOpen4(!open4)}
          className="flex justify-between mt-6 border rounded-lg p-3 shadow-lg"
        >
          <div>
            <p className="font-bold">Calls</p>
            <p className="text-zinc-400">Oct6</p>
          </div>
          <div className="flex gap-2 items-center font-bold">
            233.0 <RiArrowDropRightLine className="text-xl text-blue-600" />
          </div>
        </div>
        {open4 && <UpdateExpenseItem setOpen4={setOpen4} />}

        <div className="px-5 flex justify-end mt-6 mb-5">
          <p>
            <span className="text-zinc-400 font-bold">Total: </span>{" "}
            <span className="font-bold">233.0</span>
          </p>
        </div>

        {/* Attachment */}
        <Attachment />

        <div className="flex gap-3   mt-5 justify-center pb-2">
          <Link
            to="/expenseclaim"
            className="border-[1px] bg-black text-white font-bold p-3 rounded-xl w-full text-center"
          >
            <button>Close</button>
          </Link>

          <button className="border-[1px] p-3 bg-gradient-to-r from-black to-[#FF0000] text-white rounded-xl text-medium w-full font-bold">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateExpense;
