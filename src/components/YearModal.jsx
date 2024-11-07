import React from "react";
import { TfiLineDouble } from "react-icons/tfi";

const YearModal = ({ setYear, setOpen1 }) => {
  const year = [2024, 2023, 2022, 2021, 2020];

  return (
    <div className="fixed bottom-0 left-0 right-0  top-72 rounded-t-2xl bg-slate-100">
      <div className="flex justify-between pl-10 font-bold  p-3 text">
        <div></div>
        <TfiLineDouble /> <p onClick={() => setYear("Select Year")}>Reset</p>
      </div>

      <div className="h-full bg-white p-3 max-h-[300px]">
        {year.map((item, index) => {
          return (
            <div>
              <p
                onClick={() => {
                  setYear(item);
                  setOpen1(false);
                }}
                className="py-3 font-semibold"
              >
                {item}
              </p>
              <hr />
            </div>
          );
        })}

        {/* <p className='py-3 font-semibold'>2023</p>
                <hr />
                <p className='py-3 font-semibold'>2022</p>
                <hr />
                <p className='py-3 font-semibold'>2021</p>
                <hr />
                <p className='py-3 font-semibold'>2020</p>
                <hr /> */}
      </div>
    </div>
  );
};

export default YearModal;
