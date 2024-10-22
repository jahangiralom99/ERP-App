import React from "react";
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
import OrderLoader from "./Shared/OrderLoader";

const LikeToDo = () => {

  return (
    <div className="p-5">
      <div className="pb-3  flex justify-between items-center">
        <p className="text-zinc-500 font-medium">What would you like to do?</p>
        <p className="text-[#FF0000]">
          <IoMdSettings />
        </p>

        {/* cards-------------------------- */}
      </div>
      <div className=" grid grid-cols-3 gap-3 font-medium text-xs mb-5">
        <Link to="/orders">
          <div className="bg-white flex justify-center items-center flex-col p-3 rounded-xl">
            <img
              className="w-8 pb-1"
              src={order}
              alt=""
              style={{
                filter:
                  "invert(22%) sepia(94%) saturate(6698%) hue-rotate(356deg) brightness(93%) contrast(104%)",
              }}
            />
            <p className="text-black ">Orders</p>
          </div>
        </Link>

        <div
          className="bg-white flex justify-center items-center flex-col p-3 rounded-xl"
        >
          <img
            className="w-8 pb-1 "
            src={expenses}
            alt=""
            style={{
              filter:
                "invert(22%) sepia(94%) saturate(6698%) hue-rotate(356deg) brightness(93%) contrast(104%)",
            }}
          />
          <p className="text-black ">Expense</p>
        </div>
        <div className="bg-white flex justify-center items-center flex-col p-3 rounded-xl">
          <img
            className="w-8 pb-1 "
            src={leave}
            alt=""
            style={{
              filter:
                "invert(22%) sepia(94%) saturate(6698%) hue-rotate(356deg) brightness(93%) contrast(104%)",
            }}
          />
          <p className="text-black ">Leave</p>
        </div>
        <div className="bg-white flex justify-center items-center flex-col p-3 rounded-xl">
          <img
            className="w-8 pb-1 "
            src={payroll}
            alt=""
            style={{
              filter:
                "invert(22%) sepia(94%) saturate(6698%) hue-rotate(356deg) brightness(93%) contrast(104%)",
            }}
          />
          <p className="text-black ">Payroll</p>
        </div>
        <div className="bg-white flex justify-center items-center flex-col p-3 rounded-xl">
          <img
            className="w-8 pb-1 "
            src={holiday}
            alt=""
            style={{
              filter:
                "invert(22%) sepia(94%) saturate(6698%) hue-rotate(356deg) brightness(93%) contrast(104%)",
            }}
          />
          <p className="text-black ">Holiday</p>
        </div>
        <div className="bg-white flex justify-center items-center flex-col p-3 rounded-xl">
          <img
            className="w-8 pb-1 "
            src={attendence}
            alt=""
            style={{
              filter:
                "invert(22%) sepia(94%) saturate(6698%) hue-rotate(356deg) brightness(93%) contrast(104%)",
            }}
          />
          <p className="text-black ">Attendence</p>
        </div>

        <div className="bg-white flex justify-center items-center flex-col p-2 rounded-xl">
          <img
            className="w-10 pb- "
            src={transiction}
            alt=""
            style={{
              filter:
                "invert(22%) sepia(94%) saturate(6698%) hue-rotate(356deg) brightness(93%) contrast(104%)",
            }}
          />
          <p className="text-black ">Transactions</p>
        </div>

        <div className="bg-white flex justify-center items-center flex-col p-3 rounded-xl">
          <img
            className="w-8 pb-1 "
            src={visit}
            alt=""
            style={{
              filter:
                "invert(22%) sepia(94%) saturate(6698%) hue-rotate(356deg) brightness(93%) contrast(104%)",
            }}
          />
          <p className="text-black ">Visit</p>
        </div>

        <div className="bg-white flex justify-center items-center flex-col p-3 rounded-xl">
          <img
            className="w-8 pb-1 "
            src={payment}
            alt=""
            style={{
              filter:
                "invert(22%) sepia(94%) saturate(6698%) hue-rotate(356deg) brightness(93%) contrast(104%)",
            }}
          />
          <p className="text-black ">Payment</p>
        </div>

        <div className="bg-white flex justify-center items-center flex-col p-3 rounded-xl">
          <img
            className="w-8 pb-1 "
            src={pittyexpeses}
            alt=""
            style={{
              filter:
                "invert(22%) sepia(94%) saturate(6698%) hue-rotate(356deg) brightness(93%) contrast(104%)",
            }}
          />
          <p className="text-black text-[11px] ">Petty Expenses</p>
        </div>

        <div className="bg-white flex justify-center items-center flex-col p-3 rounded-xl">
          <img
            className="w-8 pb-1 "
            src={timesheet}
            alt=""
            style={{
              filter:
                "invert(22%) sepia(94%) saturate(6698%) hue-rotate(356deg) brightness(93%) contrast(104%)",
            }}
          />
          <p className="text-black ">Timesheet</p>
        </div>

        <div className="bg-white flex justify-center items-center flex-col p-3 rounded-xl">
          <img
            className="w-8 pb-1 "
            src={issue}
            alt=""
            style={{
              filter:
                "invert(22%) sepia(94%) saturate(6698%) hue-rotate(356deg) brightness(93%) contrast(104%)",
            }}
          />
          <p className="text-black ">Issue</p>
        </div>

        <div className="bg-white flex justify-center items-center flex-col p-3 rounded-xl">
          <img
            className="w-8 pb-1 "
            src={Quatation}
            alt=""
            style={{
              filter:
                "invert(22%) sepia(94%) saturate(6698%) hue-rotate(356deg) brightness(93%) contrast(104%)",
            }}
          />
          <p className="text-black ">Quatation</p>
        </div>
      </div>

      <button className="border-[1px] w-full font-bold border-black bg-gradient-to-r from-black to-[#FF0000] text-white p-2 rounded-xl flex items-center justify-center gap-2">
        {" "}
        View more
      </button>
    </div>
  );
};

export default LikeToDo;
