import React, { useState } from "react";
import { IoMdSettings } from "react-icons/io";
import expenses from "../assets/expense.png";
import order from "../assets/order.png";
import leave from "../assets/leave.png";
import payroll from "../assets/payroll.png";
import holiday from "../assets/holiday.png";
import attendence from "../assets/attendence.png";
import transiction from "../assets/transiction.png";
import payment from "../assets/payment.png";
import visit from "../assets/visit.png";
import pittyexpeses from "../assets/pittyexpenses.png";
import timesheet from "../assets/timesheet.png";
import issue from "../assets/issue.png";
import Quatation from "../assets/Quatation.png";
import { Link } from "react-router-dom";

const LikeToDo = ({ orderLink }) => {
  // State to control whether all cards are shown or just the first 6
  const [showAll, setShowAll] = useState(false);

  const menuItems = [
    {
      name: "Orders",
      icon: order,
      link: orderLink ? orderLink : "/orders",
    },
    {
      name: "Expense",
      icon: expenses,
      // link: "/expense",
    },
    {
      name: "Leave",
      icon: leave,
    },
    {
      name: "Payroll",
      icon: payroll,
    },
    {
      name: "Holiday",
      icon: holiday,
    },
    {
      name: "Attendance",
      icon: attendence,
    },
    {
      name: "Transactions",
      icon: transiction,
    },
    {
      name: "Visit",
      icon: visit,
    },
    {
      name: "Payment",
      icon: payment,
    },
    {
      name: "Petty Expenses",
      icon: pittyexpeses,
    },
    {
      name: "Timesheet",
      icon: timesheet,
    },
    {
      name: "Issue",
      icon: issue,
    },
    {
      name: "Quatation",
      icon: Quatation,
    },
  ];

  // Show only first 6 items if showAll is false, otherwise show all
  const itemsToShow = showAll ? menuItems : menuItems.slice(0, 6);

  return (
    <div className="p-5">
      <div className="pb-3 flex justify-between items-center">
        <p className="text-zinc-500 font-medium">What would you like to do?</p>
        <p className="text-[#FF0000]">
          <IoMdSettings />
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-3 gap-3 font-medium text-xs mb-5">
        {itemsToShow.map((item, index) => (
          item.link ? (
            <Link to={item.link} key={index}>
              <div className="bg-white flex justify-center items-center flex-col p-3 rounded-xl">
                <img
                  className="w-8 pb-1"
                  src={item.icon}
                  alt={item.name}
                  style={{
                    filter:
                      "invert(22%) sepia(94%) saturate(6698%) hue-rotate(356deg) brightness(93%) contrast(104%)",
                  }}
                />
                <p className="text-black">{item.name}</p>
              </div>
            </Link>
          ) : (
            <div key={index} className="bg-white flex justify-center items-center flex-col p-3 rounded-xl">
              <img
                className="w-8 pb-1"
                src={item.icon}
                alt={item.name}
                style={{
                  filter:
                    "invert(22%) sepia(94%) saturate(6698%) hue-rotate(356deg) brightness(93%) contrast(104%)",
                }}
              />
              <p className="text-black">{item.name}</p>
            </div>
          )
        ))}
      </div>

      {/* View More / View Less Button */}
      <button
        onClick={() => setShowAll(!showAll)}
        className="border-[1px] w-full font-bold border-black bg-gradient-to-r from-black to-[#FF0000] text-white p-2 rounded-xl flex items-center justify-center gap-2"
      >
        {showAll ? "View Less" : "View More"}
      </button>
    </div>
  );
};

export default LikeToDo;
