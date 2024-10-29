import expenses from "../assets/expense.png";
import order from "../assets/order.png";
import leave from "../assets/leave.png";
// import payroll from "../assets/payroll.png";
// import holiday from "../assets/holiday.png";
// import attendence from "../assets/attendence.png";
// import transiction from "../assets/transiction.png";
import payment from "../assets/payment.png";
import visit from "../assets/visit.png";
import { Link } from "react-router-dom";
import pittyexpenses from "../assets/pittyexpenses.png";
// import timesheet from "../assets/timesheet.png";
// import issue from "../assets/issue.png";
// import Quatation from "../assets/Quatation.png";
import task from "../assets/task.png";
import { CiCirclePlus } from "react-icons/ci";
import { RxCrossCircled } from "react-icons/rx";

const ButtonFooter = ({ setOpen }) => {
  return (
    <>
      <div className="fixed bottom-0 bg-opacity-70 h-screen w-full bg-black max-w-screen-md "></div>
      <RxCrossCircled
        onClick={() => setOpen(false)}
        className="absolute bottom-[14px] cursor-pointer text-4xl text-white rounded-full"
      />
      <div className="fixed bottom-14 left-0 right-0 flex flex-col items-center gap-2 justify-center">
        <button
          onClick={() => setOpen(false)}
          className="flex justify-start items-center pl-3 gap-2 bg-white border border-[#727272] text-xs rounded-xl py-1 w-32 shadow-md"
        >
          <img
            className="w-[12px] pb-1 "
            src={pittyexpenses}
            alt=""
            style={{
              filter:
                "invert(22%) sepia(94%) saturate(6698%) hue-rotate(356deg) brightness(93%) contrast(104%)",
            }}
          />
          <p className="text-black font-bold  ">Petty Expense</p>
        </button>

        <Link to="/newpaymententry">
          <button
            onClick={() => setOpen(false)}
            className="flex justify-start items-center pl-3 gap-2 bg-white border border-[#727272] text-xs rounded-xl py-1 w-32 shadow-md"
          >
            <img
              className="w-[12px] pb-1 "
              src={payment}
              alt=""
              style={{
                filter:
                  "invert(22%) sepia(94%) saturate(6698%) hue-rotate(356deg) brightness(93%) contrast(104%)",
              }}
            />
            <p className="text-black font-bold  ">Payment Entry</p>
          </button>
        </Link>
        <button
          onClick={() => setOpen(false)}
          className="flex justify-start items-center pl-3 gap-2 bg-white border border-[#727272] text-xs rounded-xl py-1 w-32 shadow-md"
        >
          <img
            className="w-[12px] pb-1 "
            src={task}
            alt=""
            style={{
              filter:
                "invert(22%) sepia(94%) saturate(6698%) hue-rotate(356deg) brightness(93%) contrast(104%)",
            }}
          />
          <p className="text-black font-bold  ">Create Task</p>
        </button>

        <Link to="/createvisit">
          <button
            onClick={() => setOpen(false)}
            className="flex justify-start items-center pl-3 gap-2 bg-white border border-[#727272] text-xs rounded-xl py-1 w-32 shadow-md"
          >
            <img
              className="w-[12px] pb-1 "
              src={visit}
              alt=""
              style={{
                filter:
                  "invert(22%) sepia(94%) saturate(6698%) hue-rotate(356deg) brightness(93%) contrast(104%)",
              }}
            />
            <p className="text-black font-bold  ">Create Visit</p>
          </button>
        </Link>

        <Link to="/createorders">
          <button
            onClick={() => setOpen(false)}
            className="flex justify-start items-center pl-3 gap-2 bg-white border border-[#727272] text-xs rounded-xl py-1 w-32 shadow-md"
          >
            <img
              className="w-[12px] pb-1 "
              src={order}
              alt=""
              style={{
                filter:
                  "invert(22%) sepia(94%) saturate(6698%) hue-rotate(356deg) brightness(93%) contrast(104%)",
              }}
            />
            <p className="text-black font-bold  ">Creat Order</p>
          </button>
        </Link>
        <button
          onClick={() => setOpen(false)}
          className="flex justify-start items-center pl-3 gap-2 bg-white border border-[#727272] text-xs rounded-xl py-1 w-32 shadow-md"
        >
          <img
            className="w-[12px] pb-1 "
            src={leave}
            alt=""
            style={{
              filter:
                "invert(22%) sepia(94%) saturate(6698%) hue-rotate(356deg) brightness(93%) contrast(104%)",
            }}
          />
          <p className="text-black font-bold  ">Apply Leave</p>
        </button>

        <Link to="/applyexpense">
          <button
            onClick={() => setOpen(false)}
            className="flex justify-start items-center pl-3 gap-2 bg-white border border-[#727272] text-xs rounded-xl py-1 w-32 shadow-md"
          >
            <img
              className="w-[12px] pb-1 "
              src={expenses}
              alt=""
              style={{
                filter:
                  "invert(22%) sepia(94%) saturate(6698%) hue-rotate(356deg) brightness(93%) contrast(104%)",
              }}
            />
            <p className="text-black font-bold  ">Apply Expense</p>
          </button>
        </Link>
      </div>
    </>
  );
};

export default ButtonFooter;
