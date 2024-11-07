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

const Leave = () => {
  const [open1, setOpen1] = useState(true);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { url } = getStoredCart("login-info");

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

        // Sort data by 'creation' date in descending order (most recent first)
        const sortedData = result?.data?.sort(
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

  if (loading) {
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
        />
      )}

      <SubHeadingToggle
        setonclick1={setOpen1}
        setonclick2={setOpen2}
        open1={!open1}
        open6={!open2}
        titile1={"Pending request"}
        titile2={"Leave History"}
      />

      {open1 && <PendingRequest data={data} />}
      {open2 && <LeaveHistory />}

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
