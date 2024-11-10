import React, { useEffect, useState } from "react";
import SubHeading from "../components/SubHeading";
import { BsFilterLeft } from "react-icons/bs";
import SubHeadingToggle from "../components/SubHeadingToggle";
import PlusButton from "../components/PlusButton";
import { Link } from "react-router-dom";
import PendingRequest from "../components/PendingRequest";
import LeaveHistory from "../components/LeaveHistory";
import BottomFilter from "../components/BottomFilter";
import { CiCirclePlus } from "react-icons/ci";
import { fetchURL, getStoredCart } from "../utilities/function";
import MainLoader from "../components/Shared/MainLoader";
import { toast } from "react-toastify";

const Leave = () => {
  const [open1, setOpen1] = useState(true);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loading2, setLoading2] = useState(true);
  const [loading3, setLoading3] = useState(false);
  const { url } = getStoredCart("login-info");
  
  // Year and Month
  const [year, setYear] = useState("Selected year");
  const [month, setMonth] = useState("Selected month");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${fetchURL}/getall?erp_url=${url}&doctype_name=Leave Application`,
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
        const filterData = result?.data?.filter(
          (item) => item.status === "Open"
        );

        // Sort data by 'creation' date in descending order (most recent first)
        const sortedData = filterData.sort(
          (a, b) => new Date(b.modified) - new Date(a.modified)
        );

        setData(sortedData);
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${fetchURL}/getall?erp_url=${url}&doctype_name=Leave Application`,
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
        const filterData = result?.data?.filter(
          (item) => item.status !== "Open"
        );

        // Sort data by 'creation' date in descending order (most recent first)
        const sortedData = filterData.sort(
          (a, b) => new Date(b.modified) - new Date(a.modified)
        );

        setData2(sortedData);
        setLoading2(false);
      } catch (err) {
        setLoading2(false);
        console.log(err);
      } finally {
        setLoading2(false);
      }
    };

    fetchData();
  }, [url]);

  // Convert month name to month number
  function getMonthNumber(month) {
    const months = {
      january: 1,
      february: 2,
      march: 3,
      april: 4,
      may: 5,
      june: 6,
      july: 7,
      august: 8,
      september: 9,
      october: 10,
      november: 11,
      december: 12,
    };
    return months[month.toLowerCase()] || null;
  }

  // Main filter function
  function filterByYearAndMonth(records, year, month) {
    const monthNumber =
      typeof month === "string" ? getMonthNumber(month) : month;

    return records.filter((record) => {
      const date = new Date(record?.creation);
      const yearMatches = year ? date.getFullYear() === year : true;
      const monthMatches =
        monthNumber !== null ? date.getMonth() === monthNumber - 1 : true; // Months are 0-indexed
      return yearMatches && monthMatches;
    });
  }

  // data fetch for filtering purposes
  const fetchData = async () => {
    setLoading3(true);
    try {
      const response = await fetch(
        `https://erp-backend-xkze.vercel.app/getall?erp_url=${url}&doctype_name=Leave Application`,
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
      const data6 = filterByYearAndMonth(result?.data, year, month);
      // console.log(data6);
      const filterData = data6?.filter((item) => item.status === "Open");
      const filterData1 = data6?.filter((item) => item.status !== "Open");
      setData(filterData);
      setData2(filterData1);
      setLoading3(false);
      // const filter = result?.data?.filter(
      //   (item) =>
      //     item.customer === selectedCustomer &&
      //     item.transaction_date === formattedDate
      // );
      // console.log("filtered data", filter);
      // setData(filter);
      // setLoader(false);
    } catch (err) {
      console.error(err);
      setLoading3(false);
      // setError(err.message);
    } finally {
      setLoading3(false);
      // setLoader(false);
    }
  };

  // handle Apply for Filter by Customer name and  date
  const handleFilter = () => {
    if (year === "Selected year") {
      toast.warn("Please Select Year", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else if (month === "Selected month") {
      toast.warn("Please Select Month", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      fetchData();
      setTimeout(() => {
        setOpen3(!open3);
        setYear("Selected year");
        setMonth("Selected month");
      }, 1000);
    }
  };

  if (loading || loading2 || loading3) {
    return <MainLoader />;
  }

  // console.log(data);
  return (
    <div className="pt-28 pb-60 bg-gray-200 ">
      <SubHeading
        path={"/"}
        title="Back"
        icon={<BsFilterLeft onClick={() => setOpen3(!open3)} />}
      />
      {open3 && (
        <BottomFilter
          title={"Filter Leave"}
          setonclick1={setOpen3}
          onclick1={open3}
          setYear={setYear}
          setMonth={setMonth}
          month={month}
          year={year}
          handleFilter={handleFilter}
        />
      )}

      {/* pending request and Leave History button */}
      <div className="flex justify-center bg-white">
        <button
          onClick={() => {
            setOpen1(true);
            setOpen2(false);
          }}
          className={`p-3 border ${
            open1 ? "bg-black text-white" : ""
          } rounded-l-2xl mb-2 font-bold  `}
        >
          {/* Pending Expense */}
          Pending request
        </button>
        <button
          onClick={() => {
            setOpen2(true);
            setOpen1(false);
          }}
          className={`p-3 ${
            open2 ? "bg-[#FF0000] text-white" : ""
          } border rounded-r-2xl mb-2 font-bold `}
        >
          Leave History
        </button>
      </div>
      {/* 
      <SubHeadingToggle
        setonclick1={setOpen1}
        setonclick2={setOpen2}
        open1={!open1}
        open6={!open2}
        titile1={"Pending request"}
        titile2={"Leave History"}
      /> */}

      {open1 && <PendingRequest data={data} />}
      {open2 && <LeaveHistory data2={data2} />}

      {/* plus button */}
      {/* <Link to="/newleaverequest">
        <PlusButton />
      </Link> */}
      <Link
        to="/newleaverequest"
        className=" p-4 w-14 h-14 rounded-lg font-medium text-sm  flex justify-center items-center fixed bottom-12 right-5"
        // style={{
        //   background: "radial-gradient(circle, black 30%, black 50%)",
        // }}
      >
        <CiCirclePlus className="absolute bottom-[18px] text-[45px] bg-black text-white rounded-full" />
      </Link>
    </div>
  );
};

export default Leave;
