import { useState } from "react";
import Arrow from "./Arrow";
import BlueButton from "./BlueButton";
import CancelButton from "./CancelButton";
import InputDesign from "./InputDesign";
import CommonButtonClose from "./Button/CommonButtonClose";
import CommonBackButton from "./Button/CommonBackButton";
import CommonButtonClear from "./Button/CommonButtonClear";

const BottomFilter = ({
  title,
  onclick1,
  setonclick1,
  onclick2,
  setonclick2,
  onclick3,
  setonclick3,
  setYear,
  setMonth,
  year,
  month,
  handleFilter
}) => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open5, setOpen5] = useState(false);
  // const [year, setYear] = useState("Selected year");
  // const [month, setMonth] = useState("Selected month");

  const handleClearFilter = () => {
    setYear("Selected year");
    setMonth("Selected month");
  }

  return (
    <div className="fixed top-[110px] left-1/2 -translate-x-1/2 w-full  bg-gray-50  rounded-t-xl z-10 flex justify-center items-center text-black font-bold text-sm">
      <div className="relative">
        <div className="flex justify-between w-full pt-3 ">
          <p className="w-10"></p>
          <p className=" ">{title}</p>
          {/* <p
            onClick={() => setonclick1(!onclick1)}
            className="text-blue-600 font-medium"
          >
            {" "}
            close
          </p> */}
          <div onClick={() => setonclick1(!onclick1)}>
            <CommonButtonClose close="Close" />
          </div>
        </div>

        <div className="h-[1px] w-full bg-[#aca7a7] my-3"></div>

        {/* input field */}

        <div className="flex flex-col gap-3">
          {/* year */}

          <InputDesign
            setonclick={setOpen1}
            onclick={open1}
            label={"Year"}
            value={year}
            readOnly={true}
            arrow={<Arrow setonclick={setOpen1} onclick={open1} />}
          />

          {open1 && (
            <div className="fixed w-44 p-3 top-28 left-1/2 -translate-x-1/2   bg-gray-200  rounded-xl z-10">
              <div>
                {[2024, 2023, 2022].map((item, index) => {
                  return (
                    <div key={index}>
                      <p
                        onClick={() => {
                          setYear(item);
                          setOpen1(false);
                        }}
                        className="py-3 font-semibold"
                      >
                        {item}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          {/* month */}

          <InputDesign
            setonclick={setOpen2}
            onclick={open2}
            label={"Month"}
            value={month}
            readOnly={true}
            arrow={<Arrow setonclick={setOpen2} onclick={open2} />}
          />

          {open2 && (
            <div className="fixed w-40 p-5 pb-6 top-44 h-44 left-1/2 -translate-x-1/2   overflow-y-scroll bg-gray-200 rounded-xl z-10">
              <div>
                {[
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December",
                ].map((item, index) => {
                  return (
                    <div key={index}>
                      <p
                        onClick={() => {
                          setMonth(item);
                          setOpen2(false);
                        }}
                        className="py-3 font-semibold"
                      >
                        {item}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        <div className="flex gap-3 px- justify-between py-3">
          <button onClick={handleClearFilter}
            // onClick={() => setonclick1(!onclick1)}
            className="border-[1px] bg-black text-white font-bold p-3 rounded-xl  w-[130px]"
          >
            Clear Filters
          </button>
          {/* <CancelButton path={'/leave'}/> */}

          <button onClick={handleFilter} className="border-[1px]  p-3 bg-gradient-to-r from-black to-[#FF0000] text-white rounded-xl whitespace-nowrap text-bold  w-[130px]">
            Apply Filters
          </button>
          {/* <BlueButton name={'Apply Filters'}/> */}
        </div>
      </div>
    </div>
  );
};

export default BottomFilter;
