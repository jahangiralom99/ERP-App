import React, { useEffect, useState } from "react";
import Card from "./Card";
import { RiArrowDropRightLine } from "react-icons/ri";

const PendingRequest = ({ data }) => {
  // console.log(data);

  return (
    <div className="flex flex-col">
      <Card>
        <div className="flex justify-between items-center">
          <p>Leave Balance(40.0)</p>
          <RiArrowDropRightLine className="text-[#FF0000] text-3xl" />
        </div>
      </Card>

      {/* fetch data Show */}
      {data?.map((item) => (
        <Card key={item?.name}>
          <div className="flex justify-between">
            <button className="border border-[#FF0000] text-[#FF0000] p-2 px-3 rounded-2xl">
              {item?.leave_type}
            </button>
            <button className="bg-gray-400 text-white p-2 px-3 rounded-2xl">
              {item?.status}
            </button>
          </div>
          <div className="flex gap-2 py-3 mx-1">
            <p>{item?.from_date}</p>
            to
            <p>{item?.to_date}</p>
          </div>
          <p className="mx-1 text-zinc-500">{item?.description}</p>
        </Card>
      ))}
    </div>
  );
};

export default PendingRequest;
