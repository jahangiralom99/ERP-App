import React, { useEffect, useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { TfiPencil } from "react-icons/tfi";
import { Link, useParams } from "react-router-dom";
import UpdateOrder from "./UpdateOrder";
import { fetchURL, getStoredCart } from "../utilities/function";
import MainLoader from "../components/Shared/MainLoader";

const OdrerDetails = () => {
  const { name } = useParams();
  const [data, setData] = useState({});
  // sales order items  Data
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [loading1, setLoading1] = useState(true);

  const { url } = getStoredCart("login-info");

  useEffect(() => {
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
        console.log(filter);
        setData(filter);
        // setLoading(false);
      } catch (err) {
        console.log(err);
        setError(err.message);
      } finally {
        // setLoading(false);
      }
    };

    fetchData();
  }, [url, name]);

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

  const totalSum = items.reduce((acc, item) => {
    return acc + item.amount * item.qty;
  }, 0);

  
  // if (loading) {
  //   return <MainLoader />;
  // }
  console.log(items);
  
  const [open5, setOpen5] = useState(false);
  return (
    <div className=" bg-gray-200 pb-32  text-black relative">
      {/* header */}
      <div>
        <div className="flex justify-between items-center h-14 w-full bg-white px-6 ">
          <div className="flex items-center gap-4">
            <Link to="/orders">
              <IoMdArrowBack className="text-lg text-blue-600" />
            </Link>
            <p className=" font-medium">Order Details</p>
          </div>
          <div onClick={() => setOpen5(!open5)}>
            <TfiPencil className="text-lg text-blue-600" />
          </div>
          {open5 && (
            <div className="absolute top-0 left-0 right-0">
              <UpdateOrder setOpen5={setOpen5} />
            </div>
          )}
        </div>
      </div>

      {/* order details */}

      <div className="px-5 pt-5 flex flex-col gap-3 ">
        <div className="bg-white rounded-xl p-3 ">
          <div className=" flex justify-between">
            <div>
              <p className="text-xs text-blue-600">
                {data?.naming_series?.slice(0, 8)} {data?.name}
              </p>
              <p className="text-xs text-zinc-500">
                {data?.creation?.slice(0, 10)}
              </p>
            </div>
            <div>
              <button className="bg-[#e1ebf8] border-[1px] border-[#7579ff] p-[5px] rounded-lg font-medium text-sm text-[#7579ff] ">
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
            <p className="text-sm text-blue-600 font-medium">
              &#2547; {totalSum}
            </p>
          </div>
        </div>
      </div>

      {/* comments */}

      <div className="mx-5 mt-5 flex flex-col gap-3  bg-white rounded-xl p-3">
        <div>
          <p className="text-sm font-medium pb-3">Comments</p>
          <div className="flex items-center border-[1px] border-blue-600  rounded-lg overflow-hidden">
            <input
              type="text"
              className="w-full p-2 border-none focus:outline-none"
              placeholder="Comment here..."
            />
            <button className=" text-blue-600 font-medium p-2">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OdrerDetails;
