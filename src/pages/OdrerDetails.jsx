import React, { useEffect, useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { TfiPencil } from "react-icons/tfi";
import { Link, useNavigate, useParams } from "react-router-dom";
import UpdateOrder from "./UpdateOrder";
import { fetchURL, getStoredCart, updateData } from "../utilities/function";
import MainLoader from "../components/Shared/MainLoader";
import CommonBackButton from "../components/Button/CommonBackButton";

const OdrerDetails = () => {
  const { name } = useParams();
  const [data, setData] = useState({});
  // use state for update modal
  const [open5, setOpen5] = useState(false);
  // navigate
  const navigate = useNavigate();
  // sales order items  Data
  // all data
  const [AllData1, setAllData] = useState({});
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [loading1, setLoading1] = useState(true)
  const { url } = getStoredCart("login-info");
  // comments
  const [comment, setComment] = useState("");

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${fetchURL}/getall?erp_url=${url}&doctype_name=Sales Order`,
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
        const filter = result?.data?.find((item) => item.name == name);
        // console.log("Filter", filter);
        setData(filter);
        setLoading(false);
      } catch (err) {
        // console.log(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, name]);

  // all data clear
  useEffect(() => {
    const AllData1 = getStoredCart("item-all-data");
    setAllData(AllData1);
  }, []);
  // {fetchURL}/getchildtable?erp_url={url}&doctype_name=Sales Order&child_table=Sales Order Item&name=2024-00207

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${fetchURL}/getchildtable?erp_url=${url}&doctype_name=Sales Order&child_table=Sales Order Item&name=${name}`,
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
        // const filter = result?.data?.find((item) => item.name == name);
        setItems(result?.message);
        // setData(filter);
        // setLoading1(false);
      } catch (err) {
        // console.log(err);
        setError(err.message);
      } finally {
        // setLoading1(false);
      }
    };

    fetchData();
  }, [url, name]);

  const m = getStoredCart("item-all-data");
  const filter = Object.values(m).filter((item) => item["qty"] > 0);

  // console.log(filter);
  if (!filter.length == 0) {
    // setChange("filterData");
    const keyList = Object.keys(AllData1);
    // console.log(keyList);
    for (let i of keyList) {
      AllData1[i]["qty"] = 0;
      updateData(i, AllData1[i]["qty"]);
      // window.location.reload();
    }
  }

  const handleNavigate = () => {
    navigate(-1);
  };

  const totalSum = items.reduce((acc, item) => {
    return acc + item.amount * item.qty;
  }, 0);

  // comments
  const handleComments = () => {
    if (comment == "") {
      alert("Please enter a comment");
    } else {
      console.log("fdgfghterhehythyttyytytyt");
      setComment("");
    }
  };

  // color change for draft or to Delivery and Bill to Delivery
  const getStatusColor = (status) => {
    switch (status) {
      case "Draft":
        return "bg-gray-300 text-white";
      case "Completed":
        return "bg-green-500 text-white"; 
      case "To Bill":
        return "bg-[#FF0000] text-white"; 
      case "To Deliver":
        return "bg-[#fcb32b] text-white";
      case "To Deliver and Bill":
        return "bg-gray-600 text-white"; 
      default:
        return "bg-white"; 
    }
  };

  if (loading) {
    return <MainLoader />;
  }
  // console.log(items);

  return (
    <div className=" bg-gray-200 pb-32 mt-16 text-black relative">
      {/* header */}
      <div>
        <div className="flex justify-between items-center h-14 w-full bg-white px-6 ">
          <div className="flex items-center gap-4">
            <div onClick={handleNavigate} className="cursor-pointer">
              <CommonBackButton value="Back" />
            </div>
            {/* <div className="cursor-pointer" onClick={handleNavigate}>
              <IoMdArrowBack className="text-lg text-blue-600" />
            </div>
            <p className=" font-medium">Order Details</p> */}
          </div>
          <div
            className="cursor-pointer bg-[#FF0000] p-[5px] border border-black rounded"
            onClick={() => setOpen5(!open5)}
          >
            <TfiPencil className="text-lg text-white" />
          </div>
          {open5 && (
            <div className="absolute top-0 left-0 right-0">
              <UpdateOrder
                setOpen5={setOpen5}
                items={items}
                data={data}
                open5={open5}
                name={name}
              />
            </div>
          )}
        </div>
      </div>

      {/* order details */}

      <div className="px-5 pt-5 flex flex-col gap-3 ">
        <div className="bg-white rounded-xl p-3 ">
          <div className=" flex justify-between">
            <div>
              <p className="text-xs text-[#FF0000] font-bold">
                Order No : {data?.naming_series?.slice(0, 8)} {data?.name}
                <p className="text-xs text-zinc-500">
                  Date : {data?.creation?.slice(0, 10)}
                </p>
              </p>
              <p>
                <p className="text-xs text-black font-semibold">
                  Name : {data?.customer_name}
                </p>
                <p className="text-xs text-zinc-500 font-bold">
                  Location : {data?.cost_center}
                </p>
              </p>
            </div>
            <div>
              <button
                className={`${getStatusColor(
                  data?.status
                )} border-[1px] p-1 px-2 rounded-lg font-medium text-[10px] `}
              >
                {data?.status}
              </button>
              {/* <button className="bg-orange-400 text-white border-[1px] rounded-lg font-medium text-[10px] p-1">
                {data?.status}
              </button> */}
            </div>
          </div>

          <div className="pt-3 flex gap-2 justify-between flex-wrap ">
            <p>
              <p className="text-xs text-zinc-500 ">Expected Delivery</p>
              <p className="text-xs  font-bold">{data?.delivery_date}</p>
            </p>
            <p>
              <p className="text-xs text-zinc-500 ">Created</p>
              <p className="text-xs text-center font-bold">
                {data?.modified_by}
              </p>
            </p>
            <p>
              <p className="text-xs text-zinc-500">Company</p>
              <p className="text-xs font-bold">{data?.company}</p>
            </p>
          </div>
        </div>
      </div>

      {/* Accounting */}

      <div className="mx-5 mt-5 flex flex-col gap-3  bg-white rounded-xl p-3">
        {items?.map((item, idx) => {
          return (
            <div key={idx} className="flex justify-between border-b pb-2">
              <div>
                <p className="text-sm font-medium pb-1 text-black">
                  {item?.item_name}
                </p>
                <p className="text-xs text-zinc-500">
                  &#2547; {item?.net_rate} * {item?.qty}
                </p>
              </div>
              <p className="text-sm font-medium">&#2547; {item?.amount}</p>
            </div>
          );
        })}

        <hr />

        <div className="flex justify-between text-sm font-medium">
          Total Balance :
        </div>

        <hr />

        <div>
          {/* <div className="flex justify-between">
            <p className="text-sm font-medium pb-1  text-zinc-500">
              Total Tax:
            </p>
            <p className="text-sm font-medium">&#2547; 0.00</p>
          </div> */}
          <div className="flex justify-between">
            <p className="text-sm font-medium pb-1  text-zinc-500">
              Sub total:
            </p>
            <p className="text-sm font-medium">&#2547; {totalSum}</p>
          </div>
          {/* <div className="flex justify-between">
            <p className="text-sm font-medium pb-1  text-zinc-500">Discount:</p>
            <p className="text-sm font-medium">&#2547; 0.00</p>
          </div> */}
        </div>

        <hr />

        <div>
          <div className="flex justify-between">
            <p className="text-sm font-medium pb-1  text-zinc-500">Total:</p>
            <p className="text-sm text-[#FF0000] font-medium">
              &#2547; {totalSum}
            </p>
          </div>
        </div>
      </div>

      {/* comments */}

      {/* <div className="mx-5 mt-5 flex flex-col gap-3  bg-white rounded-xl p-3">
        <div>
          <p className="text-sm font-medium pb-3">Comments</p>
          <div className="flex items-center border-[1px] border-[#FF0000]  rounded-lg overflow-hidden">
            <input
              type="text"
              className="w-full p-2 border-none focus:outline-none"
              placeholder="Comment here..."
              value={comment || ""}
              onChange={(e) => setComment(e.target.value)}
            />
            <button
              onClick={handleComments}
              className=" text-[#FF0000] font-medium p-2"
            >
              Send
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default OdrerDetails;
