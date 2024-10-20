import React from "react";
import { useEffect, useState } from "react";
import { CiUser } from "react-icons/ci";
import { FaRegUser, FaUser } from "react-icons/fa";
import {
  FaBangladeshiTakaSign,
  FaBuildingColumns,
  FaCirclePlus,
  FaPlus,
} from "react-icons/fa6";
import { IoMdArrowBack, IoMdCloseCircleOutline } from "react-icons/io";
import { LuBuilding2 } from "react-icons/lu";
import {
  RiArrowDropDownLine,
  RiArrowDropRightLine,
  RiQrScan2Line,
} from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { Link } from "react-router-dom";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { IoArrowUpCircleOutline, IoClose } from "react-icons/io5";
import { FiMinus } from "react-icons/fi";
import { Scanner } from "@yudiel/react-qr-scanner";
import CommonButtonClear from "../components/Button/CommonButtonClear";
import CommonButtonClose from "../components/Button/CommonButtonClose";
import { fetchURL, formatDate, getStoredCart } from "../utilities/function";
import { toast } from "react-toastify";
import MainLoader from "../components/Shared/MainLoader";

const UpdateOrder = ({ setOpen5, data, items, open5, name }) => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  // quantity ++ State
  const [quantity, setQuantity] = useState(items);
  // Delivery Date
  const [formattedDate, setFormattedDate] = useState("");
  // today date
  const date = formatDate();
  // loader for Update
  const [update, SetUpdate] = useState(false);

  const [open4, setOpen4] = useState(false);
  // image
  const [image, setImage] = useState(null);

  const { url } = getStoredCart("login-info");

  const handleCalendarClick = () => {
    setOpen((prev) => !prev);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      setImage(file);
    }
  };

  const removeImage = () => {
    setImage(null);
  };

  // Increment quantity for a specific item
  const incrementQty = (id) => {
    setQuantity(
      quantity.map((item) =>
        item.item_code === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  // Decrement quantity for a specific item (not below 0)
  const decrementQty = (id) => {
    setQuantity(
      quantity.map((item) =>
        item.item_code === id && item.qty > 0
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );
  };

  //   {
  //     "item_code": "Item Code",
  //     "item_name": "Item Name",
  //     "delivery_date": "2024-09-05",
  //     "qty": Quantity,
  //     "rate": 1 Pes Rate,
  //     "amount": Total Amount,
  //     "uom": "Item UOM"
  // }

  //   map for update products
  const items2 = quantity?.map((item) => {
    // console.log(item.qty);
    const order = {
      item_code: item?.item_code,
      item_name: item?.item_name,
      delivery_date: formattedDate,
      qty: item?.qty,
    };
    return order;
  });

  // handle update
  const handleUpdateOrder = () => {
    SetUpdate(true);
    console.log(name);
    // body for update sales orders
    const bodyInfo = {
      erp_url: `${url}`,
      doctype_name: "Sales Order",
      document_name: `${encodeURIComponent(name)}`,
      customer: data?.customer,
      transaction_date: date,
      custom_delivery_type: "",
      data: {
        items: items2,
      },
    };

    // console.log("bofy info", bodyInfo);

    // update sales order api
    fetch(`${fetchURL}/put_data`, {
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bodyInfo),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((result) => {
        if (result) {
          toast.success("Update Order", {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          SetUpdate(false);
        }
      })
      .catch((error) => {
        toast.error("Order Not Updated", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        console.error("Error:", error);
      })
      .finally(() => SetUpdate(false));
      };
    

    // const handleUpdateOrder = () => {
    //     console.log("update ");
    // }

  //   console.log(formattedDate);
  if (update) {
    return <MainLoader />;
  }

  return (
    <div className="bg-gray-200 pb-20  text-black">
      {/* heading */}
      <div className="flex justify-between items-center h-14 w-full bg-white px-6 ">
        <div className="flex items-center gap-4">
          <Link onClick={() => setOpen5(false)}>
            <IoMdArrowBack className="text-lg text-blue-600" />
          </Link>
          <p className=" font-medium">Update Order</p>
        </div>
        <div onClick={() => setOpen4(!open4)} className="">
          <RiQrScan2Line className="text-xl text-blue-600" />
        </div>
      </div>

      {/* form */}

      <div className="p-5 flex flex-col gap-2">
        {/* company */}
        <fieldset className="relative border-[1px] border-gray-600 rounded-xl ">
          <legend className="ml-3 px-[5px] text-xs text-gray-500">
            Company<sup>*</sup>
          </legend>
          <div
            onClick={() => setOpen1(!open1)}
            className="flex gap-4 items-center justify-between w-full pl-4 pb-2"
          >
            <div className="flex items-center gap-4">
              <LuBuilding2 className="text-[#FF0000]" />
              <p className="cursor-pointer text-start w-[100px] whitespace-nowrap font-medium">
                {data?.company || "Select a Company"}
              </p>
            </div>

            <div className="cursor-pointer">
              {/* {open1 ? (
                <RiArrowDropDownLine className="text-3xl ml-5 text-blue-600" />
              ) : ( */}
              <RiArrowDropRightLine className="text-3xl ml-5 text-blue-600" />
              {/* )} */}
            </div>
          </div>
        </fieldset>

        {/* cost center */}
        <fieldset className="relative border-[1px] border-gray-600 rounded-xl ">
          <legend className="ml-3 px-[5px] text-xs text-gray-500">
            Cost Center
          </legend>
          <div
            onClick={() => setOpen2(!open2)}
            className="flex gap-4 items-center justify-between w-full pl-4 pb-2"
          >
            <div className="flex items-center gap-4">
              <FaBuildingColumns className="text-[#FF0000]" />
              <p className=" text-start w-[100px] whitespace-nowrap font-medium cursor-pointer">
                {data?.cost_center || "none"}
              </p>
            </div>
            <div className="cursor-pointer">
              {/* {open2 ? (
                <RiArrowDropDownLine className="text-3xl ml-5 text-blue-600" />
              ) : ( */}
              <RiArrowDropRightLine className="text-3xl ml-5 text-blue-600" />
              {/* )} */}
            </div>
          </div>
        </fieldset>

        {/* Select customer */}
        <fieldset className="relative border-[1px] border-gray-600 rounded-xl">
          <legend className="ml-3 px-[5px] text-xs text-gray-500">
            Select Customer
          </legend>
          <div
            onClick={() => setOpen3(!open3)}
            className=" flex  gap-4 items-center justify-between w-full pl-4 pb-2"
          >
            <div className="flex items-center gap-4">
              <FaRegUser className="text-[#FF0000] text-[18px] font-bold" />
              <p className=" text-start w-[100px] whitespace-nowrap font-medium cursor-pointer">
                {data?.customer}
              </p>
            </div>
            <div className="cursor-pointer">
              {/* {open3 ? (
                <RiArrowDropDownLine className="text-3xl ml-5 text-blue-600" />
              ) : ( */}
              <RiArrowDropRightLine className="text-3xl ml-5 text-blue-600" />
              {/* )} */}
            </div>
          </div>
        </fieldset>

        {/* date */}
        <fieldset className="relative border-[1px] border-gray-600 rounded-xl">
          <legend className="ml-3 px-[5px] text-xs text-gray-500">
            Delivery Date
          </legend>
          <div className="flex  gap-4 items-center w-full pl-4 pb-2">
            <SlCalender
              onClick={handleCalendarClick}
              className="text-[#FF0000] text-xl font-bold"
            />
            <DatePicker
              className="bg-transparent text-black font-medium border-none outline-none"
              selected={startDate}
              onChange={(date) => {
                // Format the date as YYYY-MM-DD
                const formattedDate = `${date.getFullYear()}-${(
                  date.getMonth() + 1
                )
                  .toString()
                  .padStart(2, "0")}-${date
                  .getDate()
                  .toString()
                  .padStart(2, "0")}`;

                setStartDate(date); // Set the Date object
                setFormattedDate(formattedDate); // Set the formatted string
                setOpen(false); // Close the date picker after selection
              }}
              onClickOutside={() => setOpen(false)} // Close on outside click
              open={open} // Control the open state
              onFocus={handleCalendarClick} // Open on focus
            />
          </div>
        </fieldset>
      </div>

      {/* qr scanner */}

      {open4 && (
        <div classNames=" w-20 bg-white">
          <Scanner onScan={(result) => console.log(result)} />
        </div>
      )}

      {/* buttons */}

      <div className="px-5 flex flex-col">
        <div className="flex flex-col gap-3">
          {/* <Link to='/selectitems'>
                        <button className="w-full bg-gradient-to-r from-gray-800 to-gray-300 p-2 rounded-xl flex justify-center items-center gap-2 text-white"> <FaCirclePlus className="text-[#FF0000] bg-white rounded-full text-xl" /> Add item Details</button>
                    </Link> */}

          {/* input[type="file"] {
  display: none;
}

.custom-file-upload {
  border: 1px solid #ccc;
  display: inline-block;
  padding: 6px 12px;
  cursor: pointer;
}
<label for="file-upload" class="custom-file-upload">
        Custom Upload
    </label>
<input id="file-upload" type="file" /> */}
          {/* 
                    <label>
                        <input type="file" name="myImage" accept="image/png, image/gif, image/jpeg" />
                    </label> */}

          {/* Attachment part  */}
          <div className="w-full">
            <button className="w-full bg-gradient-to-r from-gray-800 to-gray-300 text-white p-2 rounded-xl flex justify-center items-center gap-2 relative">
              <IoArrowUpCircleOutline className="text-2xl text-red-500" />
              <span>Attachment</span>
              <input
                type="file"
                onChange={handleFileChange}
                accept="image/*" // Limit to image files
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
            </button>
            {image && (
              <div className="flex bg-white mt-4 flex-col items-center border border-gray-300 rounded-full p-3 gap-2 w-full">
                <div className="flex justify-between items-center w-full font-bold px-3">
                  <span className="truncate text-sm">{image.name}</span>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={removeImage}
                  >
                    <IoMdCloseCircleOutline className="text-xl" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* data from select item page */}

        <div className="pt-5 text-sm text-black font-medium">
          <div className="flex justify-between">
            <p className="text-zinc-500">Items*</p>
            <div></div>
            <p className="text-[#FF0000]">Delete</p>
          </div>

          <div className="border-[1px] mt-3 bg-white border-zinc-300 rounded-xl">
            {/* part-1 */}
            {quantity?.map((item, idx) => (
              <div key={idx} className=" p-3 rounded-xl">
                <div className="flex justify-between">
                  <div className="flex flex-col gap-2">
                    <p className="font-medium text-sm">{item?.item_name}</p>
                    <p className="flex items-center gap-1 text-xs text-zinc-600">
                      <FaBangladeshiTakaSign /> {item.amount} * {item.qty}
                    </p>
                  </div>
                  <div className="flex flex-col justify-end items-center text-sm">
                    <p>{item.amount * item.qty}</p>
                    <div className="flex items-center gap-2 border-[2px] rounded-lg p-1 ">
                      <FiMinus onClick={() => decrementQty(item.item_code)} />{" "}
                      <p>{item?.qty}</p>{" "}
                      <FaPlus onClick={() => incrementQty(item.item_code)} />
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <hr />

            {/* button */}
            {/* <Link to="/selectitems">
              <div className="p-3 flex items-center gap-2">
                <FaCirclePlus className="text-[#FF0000] bg-white rounded-full text-lg" />
                <p className="">Add Another Item</p>
              </div>
            </Link> */}

            <hr />

            {/* Taxes and Discount`` */}

            <p className="p-3">Taxes & Discount</p>

            <hr />

            <div className="p-3 ">
              <div className="flex justify-between">
                <p className="text-zinc-500">Total Tax : </p>
                <p className="flex items-center gap-1">
                  <FaBangladeshiTakaSign /> <span>0.00</span>{" "}
                </p>
              </div>

              <div className="flex justify-between">
                <p className="text-zinc-500">Sub total : </p>
                <p className="flex items-center gap-1">
                  <FaBangladeshiTakaSign />{" "}
                  <span>
                    {quantity.reduce(
                      (total, item) => total + item.amount * item.qty,
                      0
                    )}
                  </span>{" "}
                </p>
              </div>

              <div className="flex justify-between">
                <p className="text-zinc-500">Discount : </p>
                <p className="flex items-center gap-1">
                  <FiMinus />
                  <FaBangladeshiTakaSign /> <span>0.00</span>{" "}
                </p>
              </div>
            </div>

            <hr />

            <div className="flex justify-between p-3">
              <p className=" text-black">Total : </p>
              <p className="flex items-center gap-1 text-blue-600">
                <FaBangladeshiTakaSign />{" "}
                <span>
                  {quantity.reduce(
                    (total, item) => total + item.amount * item.qty,
                    0
                  )}
                </span>{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-3 px-5 bg-gray-100 fixed bottom-0 left-0 right-0 justify-center pb-2">
          <div onClick={() => setOpen5(!open5)} className="w-full">
            <button className="border-[1px] border-zinc-400 text-zinc-600 p-3 rounded-xl w-full">
              Close
            </button>
          </div>
          <button
            onClick={handleUpdateOrder}
            className="border-[1px] p-3 bg-gradient-to-r from-blue-600 to-blue-950 text-white rounded-xl text-medium w-full"
          >
            Update Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default UpdateOrder;
