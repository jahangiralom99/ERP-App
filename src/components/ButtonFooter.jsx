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
import { RxCrossCircled } from "react-icons/rx";

const ButtonFooter = ({ setOpen }) => {
  return (
    <>
      <div
        onClick={() => setOpen(false)}
        className="fixed  top-0 bg-opacity-70 h-[800px] w-full bg-black max-w-screen-md "
      ></div>
      <RxCrossCircled
        onClick={() => setOpen(false)}
        className="absolute bottom-[14px] cursor-pointer text-4xl bg-[#FF0000] text-white rounded-full"
      />
      <div onClick={() => setOpen(false)} className="fixed bottom-14 left-0 right-0 flex flex-col items-center gap-2 justify-center">
        <button
          onClick={() => setOpen(false)}
          className="flex justify-start items-center pl-3 gap-2 bg-white border border-[#727272] text-xs rounded-xl py-1 w-36 shadow-md"
        >
          <img
            className="w-[20px] pb-2 "
            src={pittyexpenses}
            alt=""
            style={{
              filter:
                "invert(22%) sepia(94%) saturate(6698%) hue-rotate(356deg) brightness(93%) contrast(104%)",
            }}
          />
          <p className="text-black font-bold ">Petty Expense</p>
        </button>

        <Link>
          <button
            onClick={() => setOpen(false)}
            className="flex justify-start items-center pl-3 gap-2 bg-white border border-[#727272] text-xs rounded-xl py-1 w-36 shadow-md"
          >
            <img
              className="w-[20px] pb-2 "
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
          className="flex justify-start items-center pl-3 gap-2 bg-white border border-[#727272] text-xs rounded-xl py-1 w-36 shadow-md"
        >
          <img
            className="w-[20px] pb-2 "
            src={task}
            alt=""
            style={{
              filter:
                "invert(22%) sepia(94%) saturate(6698%) hue-rotate(356deg) brightness(93%) contrast(104%)",
            }}
          />
          <p className="text-black font-bold  ">Create Task</p>
        </button>

        <Link>
          <button
            onClick={() => setOpen(false)}
            className="flex justify-start items-center pl-3 gap-2 bg-white border border-[#727272] text-xs rounded-xl py-1 w-36 shadow-md"
          >
            <img
              className="w-[20px] pb-2"
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
            className="flex justify-start items-center pl-3 gap-2 bg-white border border-[#727272] text-xs rounded-xl py-1 w-36 shadow-md"
          >
            <img
              className="w-[20px] pb-2"
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
          className="flex justify-start items-center pl-3 gap-2 bg-white border border-[#727272] text-xs rounded-xl py-1 w-36 shadow-md"
        >
          <img
            className="w-[20px] pb-2"
            src={leave}
            alt=""
            style={{
              filter:
                "invert(22%) sepia(94%) saturate(6698%) hue-rotate(356deg) brightness(93%) contrast(104%)",
            }}
          />
          <p className="text-black font-bold  ">Apply Leave</p>
        </button>

        <div>
          <button
            onClick={() => setOpen(false)}
            className="flex justify-start items-center pl-3 gap-2 bg-white border border-[#727272] text-xs rounded-xl py-1 w-36 shadow-md"
          >
            <img
              className="w-[20px] pb-2"
              src={expenses}
              alt=""
              style={{
                filter:
                  "invert(22%) sepia(94%) saturate(6698%) hue-rotate(356deg) brightness(93%) contrast(104%)",
              }}
            />
            <p className="text-black font-bold  ">Apply Expense</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default ButtonFooter;
