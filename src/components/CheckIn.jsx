import React, { useEffect, useState } from "react";
import Time from "../components/Time";
import { BsArrowDownRightCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { getStoredCart } from "../utilities/function";

const CheckIn = () => {
  const [time, setTime] = useState(new Date());
  const { data, url } = getStoredCart("login-info");
  // email decode URL
  const email = decodeURIComponent(data?.full_name);

  // const getGreeting = () => {
  //   const hours = time.getHours();
  //   if (hours < 12) {
  //     return "Good Morning";
  //   } else if (hours < 18) {
  //     return "Good Afternoon";
  //   } else {
  //     return "Good Evening";
  //   }
  // };


  // Update the time every minute
  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setTime(new Date());
  //   }, 60000); // Update every 60 seconds

  //   return () => clearInterval(timer);
  // }, []);

  return (
    <div className=" m-5 p-3 bg-white rounded-xl ">
      {/* avater */}
      <div className="flex justify-between items-center ">
        <p>
          <span className=" font-semibold">Good Morning,</span> <br />
          <span className=" font-bold">{email}</span>
        </p>
        {/* <div className="avatar">
          <div className="w-12 rounded-full">
            <img src={avatar} />
          </div>
        </div> */}
      </div>

      <p className="text-zinc-500 text-sm font-medium mt-1">
        You are not Check-in yet Today
      </p>

      <Time setTime={setTime} time={time} />

      <Link to="/markattendence">
        <button className="border-[1px] w-full font-bold border-black bg-gradient-to-r from-black to-[#FF0000] text-white p-2 rounded-xl flex items-center justify-center gap-2">
          {" "}
          <BsArrowDownRightCircle className=" " /> Check In
        </button>
      </Link>
    </div>
  );
};

export default CheckIn;
