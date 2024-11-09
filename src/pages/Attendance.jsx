import { Circle } from "rc-progress";
import React, { useEffect, useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { MdUploadFile } from "react-icons/md";
import { RiArrowUpSFill } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { Link } from "react-router-dom";
// import DraftAttendance from "../components/DraftAttendance";
import MonthModal from "../components/MonthModal";
import SubHeading from "../components/SubHeading";
import YearModal from "../components/YearModal";
import { fetchURL, getStoredCart } from "../utilities/function";
import MainLoader from "../components/Shared/MainLoader";

const Attendance = () => {
  const [data, setData] = useState([]);
  const [Open1, setOpen1] = useState(false);
  const [Open2, setOpen2] = useState(false);
  const [Open3, setOpen3] = useState(false);
  const [month, setMonth] = useState("Select Month");
  const [year, setYear] = useState("Select Year");
  const { url } = getStoredCart("login-info");
  const [loading, setLoading] = useState(true);

  const handleMonthClick = () => {
    setMonth(month);
    setOpen2(!Open2);
  };

  const handleYearClick = () => {
    setYear(year);
    setOpen1(!Open1);
  };

  // fetch main data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${fetchURL}/getall?erp_url=${url}&doctype_name=Employee Checkin`,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const result = await response.json();
        setData(result?.data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  if (loading) {
    return <MainLoader />;
  }

  console.log(data);

  return (
    <div className=" bg-gray-200 pb-32 mt-28 text-sm  text-black  ">
      <SubHeading title="Back" />

      <div className="mx-5 ">
        {/* select area */}

        <div className="flex justify-center items-center py-3 gap-10">
          <div
            onClick={() => setOpen1(!Open1)}
            className="flex items-center justify-between p-3 border-[1px] border-[#FF0000] rounded-2xl w-36 bg-white"
          >
            {year} <RiArrowUpSFill />
          </div>
          <div
            onClick={() => setOpen2(!Open2)}
            className="flex items-center justify-between p-3 border-[1px] border-[#FF0000] rounded-2xl w-36 bg-white"
          >
            {month} <RiArrowUpSFill />
          </div>
        </div>
        {Open1 && <YearModal setYear={setYear} setOpen1={setOpen1} />}
        {Open2 && <MonthModal setMonth={setMonth} setOpen2={setOpen2} />}

        {/* progress area */}

        <div className="bg-white p-3 px-7 rounded-2xl shadow-lg flex justify-between">
          <div className="w-32 relative">
            <div className="absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center flex-col">
              <p className="font-medium">Total Days</p>
              <p className="font-bold">{data?.length}</p>
            </div>

            <Circle
              percent={data?.length}
              strokeWidth={10}
              trailWidth={10}
              trailColor={"#4AB054"}
              strokeColor="#F34335"
            />
          </div>

          <div className="p-3 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <p className="bg-[#4AB054] h-5 w-5 rounded-full"></p>
              <p className="font-bold">present {data?.length}</p>
            </div>
            <div className="flex items-center gap-2">
              <p className="bg-[#2093ED] h-5 w-5 rounded-full"></p>
              <p className="font-bold">Leave 0</p>
            </div>
            <div className="flex items-center gap-2">
              <p className="bg-[#FFAB3B] h-5 w-5 rounded-full"></p>
              <p className="font-bold">Late 0</p>
            </div>
            <div className="flex items-center gap-2">
              <p className="bg-[#F34336] h-5 w-5 rounded-full"></p>
              <p className="font-bold">Absent 1</p>
            </div>
          </div>
        </div>

        {/* dates */}

        {/* main data for Backend  */}

        {data?.map((item, idx) => (
          <div key={idx} className="bg-white rounded-2xl shadow-lg my-3">
            <div className=" flex justify-between bg-white p-3 px-5 rounded-2xl  my-3">
              <p className="flex items-center gap-2 font-bold">
                <SlCalender className="text-lg text-[#FF0000]" />
                {item?.attendance_date}
              </p>
              <p className="font-bold">{item?.name}</p>
            </div>
            <div className="px-5 flex justify-between pb-3 text-center">
              <div className="border-r-[2px] pr-5">
                <p className="text-zinc-400 font-bold">Check In</p>
                <p className="font-bold">
                  {item?.in_time ? item?.in_time : "00 : 00 : 00"}
                </p>
              </div>
              <div className="border-r-[2px] pr-5">
                <p className="text-zinc-400 font-bold">Check Out</p>
                <p className="font-bold">
                  {item?.out_time ? item?.out_time : "00 : 00 : 00"}
                </p>
              </div>
              <div className="">
                <p className="text-zinc-400 font-bold">Duration</p>
                <p className="font-bold">
                  {item?.working_hours ? item?.working_hours : "00 : 00 : 00"}
                </p>
              </div>
            </div>
          </div>
        ))}

        {/* fixed draft attendence */}
        <Link to="/draftattendance">
          <div>
            <div className="fixed bottom-16 right-5 text-3xl p-3 border-[1px] rounded-full bg-white border-[#FF0000] text-[#FF0000]">
              <MdUploadFile />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Attendance;
