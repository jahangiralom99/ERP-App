import React, { useState } from "react";

import { FaBuildingColumns } from "react-icons/fa6";
import { RiArrowDropDownLine, RiArrowDropRightLine } from "react-icons/ri";
import { LuBuilding2 } from "react-icons/lu";
import { IoArrowUpCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import SubHeading from "./SubHeading";
import NewExpenseItem from "./NewExpenseItem";
import UpdateExpenseItem from "./UpdateExpenseItem";
import CompanyField from "./CreateOrder/CompanyField";
import CostCenter from "./CreateOrder/CostCenter";
import Attachment from "./Shared/Attachment";

const ApplyExpense = ({ setOpen2 }) => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  // company state
  const [selectedCompany, setSelectedCompany] = useState("");
  // cost of center state
  const [selectedCostCenter, setSelectedCostCenter] = useState("");

  const handleCalendarClick = () => {
    setOpen((prev) => !prev);
  };
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // Goes back to the previous page
  };

  return (
    <div className=" bg-white pb-60 mt-28 px-4  w-full">
      <SubHeading title="Back" />

      {/* form */}

      <form className=" pt-3 flex flex-col gap-3">
        {/* company */}
        <CompanyField
          selectedCompany={selectedCompany}
          setSelectedCostCenter={setSelectedCostCenter}
          setSelectedCompany={setSelectedCompany}
        />
        {/* const of center  */}
        {/* cost center */}
        <CostCenter
          selectedCompany={selectedCompany}
          selectedCostCenter={selectedCostCenter}
          setSelectedCostCenter={setSelectedCostCenter}
        />
      </form>

      {/* below part of form */}

      <div className="mt-6">
        <div className="flex justify-between px-5 font-bold ">
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
          className="flex justify-between  border rounded-lg p-3 mt-4 shadow-lg"
        >
          <div>
            <p className="font-bold">Calls</p>
            <p className="text-zinc-400">Oct6</p>
          </div>
          <div className="flex gap-2 items-center font-bold">
            233.0 <RiArrowDropRightLine className="text-2xl text-[#FF0000]" />
          </div>
        </div>
        {open4 && <UpdateExpenseItem setOpen4={setOpen4} />}

        <div className="px-5 flex justify-end mt-4 mb-4">
          <p>
            <span className="text-zinc-400 font-bold">Total: </span>{" "}
            <span className="font-bold">233.0</span>
          </p>
        </div>

        {/* Attachment button  */}
        <Attachment />

        <div className="flex gap-3   mt-5 justify-center pb-2">
          <button
            onClick={goBack}
            className="border-[1px] bg-black font-bold text-white p-3 rounded-xl w-full"
          >
            Close
          </button>

          <button className="border-[1px] p-3 bg-gradient-to-r from-black to-[#FF0000] text-white rounded-xl font-bold w-full">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplyExpense;

// Disable button for 
{/* <button
// onClick={handleCreateOrder}
className="border-[1px] p-3 bg-gradient-to-r from-slate-500 to-blue-950 text-white rounded-xl text-medium w-full cursor-not-allowed"
>
Order Create
</button> */}