import React from "react";
import Card from "./Card";
import { RiArrowDropRightLine } from "react-icons/ri";

const LeaveHistory = () => {

  


  return (
    <div className="flex flex-col">
      <Card>
        <div className="flex justify-between items-center">
          <p>Leave Balance(40.0)</p>
          <RiArrowDropRightLine className="text-blue-600 text-3xl" />
        </div>
      </Card>
      <Card>
        <div className="flex justify-between">
          <button className="border border-[#FF0000] text-[#FF0000] p-2 px-3 rounded-2xl">
            Sick Leave
          </button>
          <button className="border border-[#FF0000] text-[#FF0000] p-2 px-3 rounded-2xl">
            Open
          </button>
        </div>
        <div className="flex gap-2 py-3 mx-1">
          <p> 17-10-2024 </p>
          to
          <p> 18-10-2024</p>
        </div>
        <p className="mx-1 text-zinc-500">Tested positive for Dengue</p>
      </Card>
      <Card>
        <div className="flex justify-between">
          <button className="border border-[#FF0000] text-[#FF0000] p-2 px-3 rounded-2xl">
            Sick Leave
          </button>
          <button className="border border-[#FF0000] text-[#FF0000] p-2 px-3 rounded-2xl">
            Open
          </button>
        </div>
        <div className="flex gap-2 py-3 mx-1">
          <p> 17-10-2024 </p>
          to
          <p> 18-10-2024</p>
        </div>
        <p className="mx-1 text-zinc-500">Tested positive for Dengue</p>
      </Card>
      <Card>
        <div className="flex justify-between">
          <button className="border border-[#FF0000] text-[#FF0000] p-2 px-3 rounded-2xl">
            Sick Leave
          </button>
          <button className="border border-[#FF0000] text-[#FF0000] p-2 px-3 rounded-2xl">
            Open
          </button>
        </div>
        <div className="flex gap-2 py-3 mx-1">
          <p> 17-10-2024 </p>
          to
          <p> 18-10-2024</p>
        </div>
        <p className="mx-1 text-zinc-500">Tested positive for Dengue</p>
      </Card>
      <Card>
        <div className="flex justify-between">
          <button className="border border-[#FF0000] text-[#FF0000] p-2 px-3 rounded-2xl">
            Sick Leave
          </button>
          <button className="border border-[#FF0000] text-[#FF0000] p-2 px-3 rounded-2xl">
            Open
          </button>
        </div>
        <div className="flex gap-2 py-3 mx-1">
          <p> 17-10-2024 </p>
          to
          <p> 18-10-2024</p>
        </div>
        <p className="mx-1 text-zinc-500">Tested positive for Dengue</p>
      </Card>
    </div>
  );
};

export default LeaveHistory;
