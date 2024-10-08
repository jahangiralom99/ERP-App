import { useEffect, useState } from "react";
import { CiUser } from "react-icons/ci";
import { FaRegUser, FaUser } from "react-icons/fa";
import {
  FaBangladeshiTakaSign,
  FaBuildingColumns,
  FaCirclePlus,
  FaPlus,
} from "react-icons/fa6";
import { IoMdArrowBack } from "react-icons/io";
import { LuBuilding2 } from "react-icons/lu";
import {
  RiArrowDropDownLine,
  RiArrowDropRightLine,
  RiQrScan2Line,
} from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { Link, useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { IoArrowUpCircleOutline } from "react-icons/io5";
import { FiMinus } from "react-icons/fi";
import { Scanner } from "@yudiel/react-qr-scanner";
import { formatDate, getStoredCart } from "../utilities/function";
import SelectItems from "./SelectItems";
import { toast } from "react-toastify";

const CreateOrder = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [formattedDate, setFormattedDate] = useState("");
  const navigate = useNavigate();

  const [open4, setOpen4] = useState(false);

  // Add Item Details popup state
  const [itemOpen, setItemOpen] = useState(false);

  // Company Name api set
  const [company, setCompany] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState("");

  // Cost Center api set
  const [costCenter, setCostCenter] = useState([]);
  const [selectedCostCenter, setSelectedCostCenter] = useState("");

  // get Select Customer api set
  const [customer, setCustomer] = useState([]);
  const [selectedCustomer, setSelectedCustomer] = useState("");
  const { url } = getStoredCart("login-info");
  const data = getStoredCart("order-info");
  const date = formatDate();

  const handleCalendarClick = () => {
    setOpen((prev) => !prev);
  };

  // get data for Company name
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://erp-backend-xkze.vercel.app/getall?erp_url=${url}&doctype_name=Company`
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const result = await response.json();
        setCompany(result);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchData();
  }, [url]);

  // get Cost Center
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://erp-backend-xkze.vercel.app/getall?erp_url=${url}&doctype_name=Cost Center`
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const result = await response.json();
        setCostCenter(result);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchData();
  }, [url]);

  // get Select Customer
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://erp-backend-xkze.vercel.app/getall?erp_url=${url}&doctype_name=Customer`
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const result = await response.json();
        setCustomer(result);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchData();
  }, []);

  const handleCreateOrder = () => {
    if (
      selectedCompany == "" ||
      selectedCostCenter == "" ||
      selectedCustomer == ""
    ) {
      toast.warn("error ", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      console.log("cvxccx");
    }

    // const info = {
    //   server: url,
    //   doctype: "Sales Order",
    //   data: {
    //     customer: "nizum2",
    //     transaction_date: "2024-10-06",
    //     custom_delivery_type: "",
    //     items: [
    //       {
    //         item_code: "334",
    //         item_name: "Nestlé Lactogen 4 Infant Formula Milk Powder (2-5 Y)",
    //         delivery_date: "2024-10-2",
    //         qty: Quantity,
    //         rate: RatePerPiece,
    //         amount: Quantity * RatePerPiece,
    //       },
    //     ],
    //   },
    //   };

    const obd = data?.map((itm) => {
      // console.log(itm);
      const info = {
        item_code: itm?.item_code,
        item_name: itm?.item_name,
        delivery_date: date,
        qty: itm?.qty,
      };
      return info;
    });

    // console.log(obd);

    const info = {
      server: url,
      doctype: "Sales Order",
      data: {
        customer: "hossan",
        transaction_date: "2024-09-05",
        custom_delivery_type: "",
        items: obd || [],
      },
    };

    // console.log(info);

    // Post order
    fetch("https://erp-backend-xkze.vercel.app/post_data", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        console.log("success", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="bg-gray-200 pb-20 text-black">
      {/* heading */}
      <div className="flex justify-between items-center h-14 w-full bg-white px-6 ">
        <div className="flex items-center gap-4">
          <div>
            <IoMdArrowBack onClick={goBack} className="text-lg text-blue-600" />
          </div>
          <p className=" font-medium">Create Order</p>
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
          <div className=" flex justify-between gap-2 items-center w-full pl-4 pb-2">
            <LuBuilding2 className="text-[#FF0000]" />
            <p className=" text-start w-[100px] whitespace-nowrap font-medium">
              {selectedCompany || "Select a Company"}
            </p>
            <input
              type="text"
              className=" bg-transparent w-[80px] text-black"
              placeholder=""
              disabled
            />

            <div className="cursor-pointer" onClick={() => setOpen1(!open1)}>
              {open1 ? (
                <RiArrowDropDownLine className="text-3xl ml-5 text-blue-600" />
              ) : (
                <RiArrowDropRightLine className="text-3xl ml-5 text-blue-600" />
              )}
            </div>

            {open1 && (
              <div className=" fixed bottom-2 px-3  bg-white rounded-box z-[1] w-[300px] p-2 shadow">
                <div>
                  <div className="flex justify-between">
                    <p className=" text-[12px] text-[#ff3232] font-bold">
                      clear
                    </p>
                    <p className=" text-[12px] text- font-bold">
                      Select Company{" "}
                    </p>
                    <p
                      onClick={() => setOpen1(!open1)}
                      className=" text-[12px] text-blue-600 font-bold"
                    >
                      close
                    </p>
                  </div>
                </div>

                {/* search */}

                <label className="input input-bordered h-10 mt-3 flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <input type="text" className="grow" placeholder="Search" />
                </label>

                <hr className="my-3" />
                <div className="flex flex-col gap-2 text-sm">
                  {company?.data?.map((item) => {
                    return (
                      <div
                        onChange={() => setSelectedCompany(item.company_name)}
                        className="flex items-start gap-4"
                      >
                        <input
                          key={item.id}
                          type="radio"
                          name="radio-1"
                          checked={selectedCompany === item.company_name}
                          className="radio w-5 h-5"
                          readOnly
                        />
                        <p>{item.company_name}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </fieldset>
        {/* cost center */}

        <fieldset className="relative border-[1px] border-gray-600 rounded-xl ">
          <legend className="ml-3 px-[5px] text-xs text-gray-500">
            Cost Center
          </legend>
          <div className=" flex justify-between gap-2 items-center w-full pl-4 pb-2">
            <FaBuildingColumns className="text-[#FF0000]" />
            <p className=" text-start w-[100px] whitespace-nowrap font-medium">
              {selectedCostCenter || "select a cost of center"}
            </p>
            <input
              type="text"
              className=" bg-transparent w-[80px] text-black"
              placeholder=""
              disabled
            />

            <div onClick={() => setOpen2(!open2)}>
              {open2 ? (
                <RiArrowDropDownLine className="text-3xl ml-5 text-blue-600" />
              ) : (
                <RiArrowDropRightLine className="text-3xl ml-5 text-blue-600" />
              )}
            </div>

            {open2 && (
              <div className=" fixed bottom-2 px-3  bg-white rounded-box z-[1] w-[300px] p-2 shadow">
                <div>
                  <div className="flex justify-between">
                    <p className=" text-[12px] text-[#ff3232] font-bold">
                      clear
                    </p>
                    <p className=" text-[12px] text- font-bold">
                      Select Company{" "}
                    </p>
                    <p
                      onClick={() => setOpen2(!open2)}
                      className=" text-[12px] text-blue-600 font-bold"
                    >
                      close
                    </p>
                  </div>
                </div>

                {/* search */}

                <label className="input input-bordered h-10 mt-3 flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <input type="text" className="grow" placeholder="Search" />
                </label>

                <hr className="my-3" />
                <div className="flex flex-col gap-2 text-sm">
                  {costCenter?.data?.map((item) => {
                    return (
                      <div
                        onChange={() => setSelectedCostCenter(item.name)}
                        className="flex gap-2 text-sm"
                      >
                        <input
                          type="radio"
                          name="radio-1"
                          className="radio w-5 h-5"
                          checked={selectedCostCenter === item.name}
                          readOnly
                        />
                        <p>{item?.name}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </fieldset>
        {/* Select customer */}

        <fieldset className="relative border-[1px] border-gray-600 rounded-xl ">
          <legend className="ml-3 px-[5px] text-xs text-gray-500">
            Select Customer
          </legend>
          <div className=" flex justify-between gap-2 items-center w-full pl-4 pb-2">
            <FaRegUser className="text-[#FF0000] text-xl font-bold" />
            <p className=" text-start w-[100px] whitespace-nowrap font-medium">
              {selectedCustomer || "select a customer"}
            </p>
            <input
              type="text"
              className=" bg-transparent w-[80px] text-black"
              placeholder=""
              disabled
            />

            <div onClick={() => setOpen3(!open3)}>
              {open3 ? (
                <RiArrowDropDownLine className="text-3xl ml-5 text-blue-600" />
              ) : (
                <RiArrowDropRightLine className="text-3xl ml-5 text-blue-600" />
              )}
            </div>

            {open3 && (
              <div className=" fixed top-56  bottom-2 px-3  bg-white rounded-box z-[1] w-[300px] p-2 shadow">
                <div>
                  <div className="flex justify-between">
                    <p className=" text-[12px] text-[#ff3232] font-bold">
                      clear
                    </p>
                    <p className=" text-[12px] text- font-bold">
                      Select Company{" "}
                    </p>
                    <p
                      onClick={() => setOpen3(!open3)}
                      className=" text-[12px] text-blue-600 font-bold"
                    >
                      close
                    </p>
                  </div>
                </div>

                {/* search */}

                <label className="input input-bordered h-10 mt-3 flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-4 w-4 opacity-70"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <input type="text" className="grow" placeholder="Search" />
                </label>

                <hr className="my-3" />
                <div className="flex h-full flex-col gap-4 overflow-y-scroll">
                  {customer?.data?.map((item) => {
                    return (
                      <div
                        onChange={() => setSelectedCustomer(item.name)}
                        className="flex gap-3 text-sm"
                      >
                        <input
                          type="radio"
                          name="radio-1"
                          className="radio w-5 h-5"
                          checked={selectedCustomer === item.name}
                          defaultChecked
                        />
                        <p>{item.name}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </fieldset>
        {/* date */}

        <fieldset className="relative border-[1px] border-gray-600 rounded-xl">
          <legend className="ml-3 px-[5px] text-xs text-gray-500">date</legend>
          <div className="flex gap-4 items-center w-full pl-4 pb-2">
            <SlCalender
              onClick={handleCalendarClick}
              className="text-[#FF0000] text-xl font-bold"
            />
            <DatePicker
              className="bg-transparent text-black font-medium"
              selected={startDate}
              onChange={(date) => {
                // Format the date as DD/MM/YYYY
                const formattedDate = `${date
                  .getDate()
                  .toString()
                  .padStart(2, "0")}/${(date.getMonth() + 1)
                  .toString()
                  .padStart(2, "0")}/${date.getFullYear()}`;

                setStartDate(date); // Set the Date object
                setFormattedDate(formattedDate); // Set the formatted string
                setOpen(false); // Close the date picker after selection
              }}
              onClickOutside={() => setOpen(false)} // Close when clicking outside
              open={open} // Control the open state
              onFocus={handleCalendarClick} // Open on focus
            />
            {/* Optionally display the formatted date somewhere */}
            {/* <span>{formattedDate}</span> */}
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
          <div>
            <button
              onClick={() => setItemOpen(!itemOpen)}
              className="w-full bg-gradient-to-r from-gray-800 to-gray-300 p-2 rounded-xl flex justify-center items-center gap-2 text-white"
            >
              {" "}
              <FaCirclePlus className="text-[#FF0000] bg-white rounded-full text-xl" />{" "}
              Add item Details
            </button>
          </div>

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
          <button className="w-full bg-gradient-to-r from-gray-800 to-gray-300 text-white p-2 rounded-xl flex justify-center items-center gap-2  ">
            <IoArrowUpCircleOutline className="text-2xl text-[#ed6262]" />{" "}
            Attachment
          </button>
        </div>

        {/* data from select item page */}

        <div className="pt-5 text-sm text-black font-medium">
          <div className="flex justify-between">
            <p className="text-zinc-500">Items*</p>
            <p className="text-[#FF0000]">Delete Items</p>
          </div>

          <div className="border-[1px] bg-white border-zinc-300 rounded-xl">
            {/* part-1 */}
            <div className=" p-3 flex flex-col gap-1 rounded-xl ">
              {data?.map((item) => {
                return (
                  <div className="flex justify-between border rounded p-2">
                    <div className="flex flex-col gap-2">
                      <p className="font-medium text-sm">Dell Inspiron 15</p>
                      <p className="flex items-center gap-1 text-xs text-zinc-600">
                        <FaBangladeshiTakaSign /> 90,000.00*0.0
                      </p>
                    </div>
                    <div className="flex flex-col justify-end items-center text-sm">
                      <p>0.0</p>
                      <div className="flex items-center gap-2 border-[2px] rounded-lg p-1 ">
                        <FiMinus /> <p>0.0</p> <FaPlus />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <hr />

            {/* button */}
            <Link to="/selectitems">
              <div className="p-3 flex items-center gap-2">
                <FaCirclePlus className="text-[#FF0000] bg-white rounded-full text-lg" />
                <p className="">Add Another Item</p>
              </div>
            </Link>

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
                  <FaBangladeshiTakaSign /> <span>90,000.00</span>{" "}
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
                <FaBangladeshiTakaSign /> <span>90,000.00</span>{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-3 px-5 bg-gray-100 fixed bottom-0 left-0 right-0 justify-center pb-2">
          <div className="w-full">
            <button className="border-[1px] border-zinc-400 text-zinc-600 p-3 rounded-xl w-full">
              Close
            </button>
          </div>
          <button
            onClick={handleCreateOrder}
            className="border-[1px] p-3 bg-gradient-to-r from-blue-600 to-blue-950 text-white rounded-xl text-medium w-full"
          >
            Order Create
          </button>
        </div>
      </div>
      {itemOpen ? (
        <div className="absolute top-0 left-0 bottom-0 w-full h-full bg-slate-200 z-20">
          <SelectItems itemOpen={itemOpen} setItemOpen={setItemOpen} />
        </div>
      ) : null}
    </div>
  );
};

export default CreateOrder;
