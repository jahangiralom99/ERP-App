import { useEffect, useState } from "react";
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
import {
  addToProceed,
  fetchURL,
  formatDate,
  getStoredCart,
  updateData,
  updateDataOrder,
} from "../utilities/function";
import SelectItems from "./SelectItems";
import { toast } from "react-toastify";
import CompanyField from "../components/CreateOrder/CompanyField";
import CostCenter from "../components/CreateOrder/CostCenter";
import CustomerField from "../components/CreateOrder/CustomerField";

const calculateTotalPrice = (cartData, quantities) => {
  return cartData?.reduce(
    (total, item, idx) => total + item.standard_rate * quantities[idx],
    0
  );
};

const CreateOrder = () => {
  const [open, setOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [formattedDate, setFormattedDate] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();
  const date = formatDate();
  const [open4, setOpen4] = useState(false);
  const [total, setTotal] = useState(0);

  // dfd
  // const [AllData2, setAllData2] = useState({});
  // data
  const [AllData1, setAllData] = useState({});
  // show data
  const [showData, setShowData] = useState([]);

  // company state
  const [selectedCompany, setSelectedCompany] = useState("");
  // cost of center state
  const [selectedCostCenter, setSelectedCostCenter] = useState("");
  // customer state
  const [selectedCustomer, setSelectedCustomer] = useState("");

  // Add Item Details popup state
  const [itemOpen, setItemOpen] = useState(false);
  // qty set
  const [quantities, setQuantities] = useState({});
  // const [data, setData] = useState([]);
  const [count, setCount] = useState(10);
  // fg
  const data = getStoredCart("order-info");
  const [items, setItems] = useState(data);
  // const [loader, setLoader] = useState(true);
  const [filterData, setFilterData] = useState([]);

  const [mf, setMf] = useState([]);

  useEffect(() => {
    const AllData1 = getStoredCart("item-all-data");
    setAllData(AllData1);
  }, []);

  const m = getStoredCart("item-all-data");
  const filter = Object.values(m).filter((item) => item["qty"] > 0);

  console.log("filterData", filter);
  const handleDeleted = () => {
    console.log("fdgfdgfd");
    // const keyList = Object.keys(AllData1);
    // for (let i of keyList) {
    //   AllData1[i]["qty"] = 0;
    //   updateData(i, AllData1[i]["qty"]);
    //   window.location.reload();
      // toast.success("All Items Deleted", {
      //   position: "top-center",
      //   autoClose: 5000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "dark",
      // });
    // }
  };

  const { url } = getStoredCart("login-info");

  const handleCalendarClick = () => {
    setOpen((prev) => !prev);
  };

  const handleCreateOrder = () => {
    if (selectedCompany == "") {
      toast.warn("Please Select Company Name", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else if (selectedCostCenter == "") {
      toast.warn("Please Select CostCenter ", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else if (selectedCustomer == "") {
      toast.warn("Please Select Customer Name", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else if (filter.length == 0) {
      toast.warn("Please Select Order Items", {
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
      // all item set
      const item = filter?.map((itm) => {
        const info = {
          item_code: itm?.item_code,
          item_name: itm?.item_name,
          delivery_date: date,
          qty: itm?.qty,
        };
        return info;
      });

      // post body new
      let postBody = {
        server: url,
        doctype: "Sales Order",
        data: {
          customer: selectedCustomer,
          transaction_date: date,
          custom_delivery_type: "",
          items: item,
        },
      };

      // // Post order
      fetch("https://erp-backend-black.vercel.app/post_data", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postBody),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error("Network response was not ok");
          }
          return res.json();
        })
        .then((data) => {
          // console.log("success", data);
          if (data) {
            const keyList = Object.keys(AllData1);
            for (let i of keyList) {
              AllData1[i]["qty"] = 0;
              updateData(i, AllData1[i]["qty"]);
              navigate("/orders");
              // window.location.reload();
            }
            // console.log(AllData1);
            toast.success("Order Create", {
              position: "top-center",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });

      console.log("success");
    }
  };

  // item data for Company name
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${fetchURL}/getall?erp_url=${url}&doctype_name=Item`
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const result = await response.json();
        const tem = result?.data;
        // console.log(tem);
        const l = {};
        for (let i = 0; i < tem.length; i++) {
          tem[i]["qty"] = 0;
          l[tem[i].name] = tem[i];
          // console.log(tem[i]);
        }
        addToProceed(l, "item-all-data");
        // setItemData(result);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, []);

  const goBack = () => {
    navigate(-1);
  };

  const totalSum = filter.reduce((acc, item) => {
    return acc + item.standard_rate * item.qty;
  }, 0);

  // handle plus btn for modal
  const handlePlus = (itemName) => {
    // console.log(i);
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemName]: (prevQuantities[itemName] || 0) + 1,
    }));
    console.log(quantities[itemName], itemName);
    AllData1[itemName]["qty"]++;
    updateData(itemName, AllData1[itemName]["qty"]);
  };

  // handle minus btn for modal
  const handleMinus = (itemName) => {
    setQuantities((prevQuantities) => {
      const newQty = Math.max((prevQuantities[itemName] || 0) - 1, 0);

      // Update qty in AllData1 immutably
      AllData1[itemName] = {
        ...AllData1[itemName],
        qty: newQty, // Set the new qty
      };

      // Optionally call updateData if needed to handle external syncs
      updateData(itemName, newQty);

      return {
        ...prevQuantities,
        [itemName]: newQty,
      };
    });
  };

  // handle minus btn for order info
  // const handlePlusOrder = (itemName) => {
  //   setCount()
  //   // console.log(itemName);
  //   // setQuantities((prevQuantities) => ({
  //   //   ...prevQuantities,
  //   //   [itemName]: (prevQuantities[itemName] || 0) + 1,
  //   // }));
  //   // console.log(data);
  //   // for (let i of data) {
  //   //   // console.log(i);
  //   //   if (i.item_code === itemName) {
  //   //     // console.log(i);
  //   //     i.qty += 1;
  //   //     updateDataOrder(itemName, i.qty);
  //   //   }
  //   // }
  // };

  // Handle increasing quantity
  const handlePlusOrder = (name) => {
    setData((prevItems) =>
      data.map((item) =>
        item.name === name
          ? {
              ...item,
              qty: item.qty + 1, // Increment quantity
              totalPrice: item.price * (item.qty + 1), // Update total price
            }
          : item
      )
    );
  };

  // // Handle decreasing quantity for order
  const handleMinusOrder = (name) => {
    console.log(name);

    // setData((prevItems) =>
    //   prevItems.map((item) =>
    //     item.name === name
    //       ? {
    //           ...item,
    //           qty: Math.max(item.qty - 1, 0), // Decrement quantity but not below 0
    //           totalPrice: item.price * Math.max(item.qty - 1, 0), // Update total price
    //         }
    //       : item
    //   )
    // );
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
        <CompanyField
          selectedCompany={selectedCompany}
          setSelectedCompany={setSelectedCompany}
        />

        {/* cost center */}
        <CostCenter
          selectedCostCenter={selectedCostCenter}
          setSelectedCostCenter={setSelectedCostCenter}
        />
        {/* Select customer */}
        <CustomerField
          selectedCustomer={selectedCustomer}
          setSelectedCustomer={setSelectedCustomer}
        />

        {/* date */}
        <fieldset className="relative border-[1px] border-gray-600 rounded-xl">
          <legend className="ml-3 px-[5px] text-xs text-gray-500">date</legend>
          <div className="flex gap-4 items-center w-full pl-4 pb-2">
            <SlCalender
              onClick={handleCalendarClick}
              className="text-[#FF0000] text-[17px] font-bold"
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

        <div className="pt-5 text-sm text-black font-medium mt-4">
          <div className="flex justify-between">
            <p className="text-zinc-500">Items*</p>
            <p
              onClick={handleDeleted}
              className="text-[#FF0000] cursor-pointer"
            >
              Delete Items All
            </p>
          </div>

          <div className="border-[1px] bg-white border-zinc-300 rounded-xl mt-2">
            {/* part-1 */}
            <div className=" p-3 flex flex-col gap-1 rounded-xl ">
              {filter?.map((item, idx) => {
                return (
                  <div
                    key={idx}
                    className="flex justify-between border rounded p-2"
                  >
                    <div className="flex flex-col gap-2">
                      <p className="font-medium text-sm">{item.item_name}</p>
                      <p className="flex items-center gap-1 text-xs text-zinc-600">
                        <FaBangladeshiTakaSign /> {item.standard_rate}
                      </p>
                    </div>
                    <div className="flex flex-col justify-end items-center text-sm">
                      <p>{item.standard_rate * item.qty}</p>
                      <div className="flex items-center gap-2 border-[2px] rounded-lg p-1 ">
                        <FiMinus onClick={() => handleMinus(item.name)} />{" "}
                        {<p>{item.qty}</p>}
                        <FaPlus
                          className="cursor-pointer"
                          onClick={() => handlePlus(item.name)}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <hr />

            {/* button */}
            <div>
              <div
                onClick={() => setItemOpen(!itemOpen)}
                className="p-3 flex items-center gap-2 cursor-pointer"
              >
                <FaCirclePlus className="text-[#FF0000] bg-white rounded-full text-lg" />
                <p className="">Add Another Item</p>
              </div>
            </div>

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
                  <FaBangladeshiTakaSign /> <span>{totalSum}</span>{" "}
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
                <FaBangladeshiTakaSign /> <span>{totalSum}</span>{" "}
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
          <SelectItems
            handlePlus={handlePlus}
            handleMinus={handleMinus}
            itemOpen={itemOpen}
            AllData1={AllData1}
            quantities={quantities}
            setMf={setMf}
            setItemOpen={setItemOpen}
          />
        </div>
      ) : null}
    </div>
  );
};

export default CreateOrder;
