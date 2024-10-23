import { useState } from "react";
import SubHeading from "./SubHeading";

const ExpenseClaimHistory = ({ setOpen }) => {
    const [open5, setOpen5] = useState(false)
  return (
    <div className="fixed top-0 mt-28 w-full bg-gray-200 mb-32 ">
      <SubHeading title={"Explain Claim"} />

      {/* draft */}

      <div className=" flex justify-between items-center bg-white px-5 p-3  mt-3 ">
        <div>
          <p className="font-bold text-blue-600">HR-EXP-2024-00067</p>
          <p className="text-zinc-500 font-bold ">2024-10-03</p>
        </div>

        <button className="border rounded-xl px-3 font-bold p-[5px] text-[#2A6541] ">
          Approved
        </button>
      </div>
      <hr />
      <div className="bg-white px-5 p-3">
        <p className="text-zinc-500 font-bold ">Employee</p>
        <p className="font-bold text-black">jhon</p>
      </div>
      <hr />

      {/* expenses */}

      <div className="overflow-scroll h-96">
        <div className="flex justify-between pl-5  pr-6 p-3 bg-white">
          <p className="font-bold text-zinc-500">Expenses</p>
          <p className="font-bold text-black">12856.0</p>
        </div>

        <div className="bg-white p-5">
          <div className="border border-[#FF0000] rounded-2xl shadow-xl">
            <div className="border border-b-[#FF0000] flex justify-between items-center bg-white px-5 p-3 rounded-2xl  shadow-xl mb-1">
              <div>
                <p className="font-bold ">Others</p>
                <p className="text-zinc-500 font-bold ">oct-3</p>
              </div>

              <p className="font-bold text-black">856.0</p>
            </div>
            <div className="border border-b-[#FF0000] flex justify-between items-center bg-white px-5 p-3 rounded-2xl  shadow-xl mb-1">
              <div>
                <p className="font-bold ">Others</p>
                <p className="text-zinc-500 font-bold ">oct-3</p>
              </div>

              <p className="font-bold text-black">856.0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseClaimHistory;
