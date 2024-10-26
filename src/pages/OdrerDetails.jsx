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
        console.log("Filter", filter);
        setData(filter);
        setLoading(false);
      } catch (err) {
        console.log(err);
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

  if (loading) {
    return <MainLoader />;
  }
  console.log(items);

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
          <div className="cursor-pointer bg-[#FF0000] p-[5px] border border-black rounded" onClick={() => setOpen5(!open5)}>
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
              <p className="text-xs text-[#FF0000]">
                {data?.naming_series?.slice(0, 8)} {data?.name}
              </p>
              <p className="text-xs text-zinc-500">
                {data?.creation?.slice(0, 10)}
              </p>
            </div>
            <div>
              <button className="bg-orange-400 text-white border-[1px]  p-[5px] rounded-lg font-medium text-sm ">
                {data?.status}
              </button>
            </div>
          </div>

          <div className="pt-3 flex gap-2 justify-between flex-wrap ">
            <p>
              <p className="text-xs text-zinc-500 text-center">
                Expected Delivery
              </p>
              <p className="text-xs text-center">{data?.delivery_date}</p>
            </p>
            <p>
              <p className="text-xs text-zinc-500 text-center">Created By</p>
              <p className="text-xs text-center">John</p>
            </p>
            <p>
              <p className="text-xs text-zinc-500 text-center">Customer Name</p>
              <p className="text-xs text-center">{data?.customer_name}</p>
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
          Tax & Discount
        </div>

        <hr />

        <div>
          <div className="flex justify-between">
            <p className="text-sm font-medium pb-1  text-zinc-500">
              Total Tax:
            </p>
            <p className="text-sm font-medium">&#2547; 0.00</p>
          </div>
          <div className="flex justify-between">
            <p className="text-sm font-medium pb-1  text-zinc-500">
              Sub total:
            </p>
            <p className="text-sm font-medium">&#2547; {totalSum}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-sm font-medium pb-1  text-zinc-500">Discount:</p>
            <p className="text-sm font-medium">&#2547; 0.00</p>
          </div>
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

      <div className="mx-5 mt-5 flex flex-col gap-3  bg-white rounded-xl p-3">
        <div>
          <p className="text-sm font-medium pb-3">Comments</p>
          <div className="flex items-center border-[1px] border-[#FF0000]  rounded-lg overflow-hidden">
            <input
              type="text"
              className="w-full p-2 border-none focus:outline-none"
              placeholder="Comment here..."
            />
            <button className=" text-[#FF0000] font-medium p-2">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OdrerDetails;
