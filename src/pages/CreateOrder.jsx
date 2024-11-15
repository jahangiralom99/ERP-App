import { useEffect, useState } from "react";
import { FaBangladeshiTakaSign, FaCirclePlus, FaPlus } from "react-icons/fa6";
import { IoMdArrowBack, IoMdCloseCircleOutline } from "react-icons/io";
import { RiQrScan2Line } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { IoArrowUpCircleOutline } from "react-icons/io5";
import { FiMinus } from "react-icons/fi";
import {
  addToProceed,
  fetchURL,
  formatDate,
  getStoredCart,
  updateData,
} from "../utilities/function";
import SelectItems from "./SelectItems";
import { toast } from "react-toastify";
import CompanyField from "../components/CreateOrder/CompanyField";
import CostCenter from "../components/CreateOrder/CostCenter";
import CustomerField from "../components/CreateOrder/CustomerField";
import MainLoader from "../components/Shared/MainLoader";
import CommonButtonClose from "../components/Button/CommonButtonClose";
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import CommonBackButton from "../components/Button/CommonBackButton";
import Attachment from "../components/Shared/Attachment";

const CreateOrder = () => {
  const [open, setOpen] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [formattedDate, setFormattedDate] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const navigate = useNavigate();
  const date = formatDate();
  const [open4, setOpen4] = useState(false);
  const { url } = getStoredCart("login-info");
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
  const [data1, setData1] = useState("");
  const [count, setCount] = useState(10);
  // fg
  const data = getStoredCart("order-info");
  const [items, setItems] = useState(data);
  const [loader, setLoader] = useState(false);
  // color change for deleted items state
  const [change, setChange] = useState("");
  // order button change state
  const [order, setOrder] = useState("");
  // image
  const [image, setImage] = useState(null);
  const [responseMessage, setResponseMessage] = useState("");

  // get data for local storage
  useEffect(() => {
    const AllData1 = getStoredCart("item-all-data");
    setAllData(AllData1);
  }, []);

  // filter data for local storage
  const m = getStoredCart("item-all-data");
  const filter = Object?.values(m)?.filter((item) => item["qty"] > 0);

  // ALl item deleted from cart
  const handleDeleted = () => {
    if (!filter?.length == 0) {
      setChange("filterData");
      const keyList = Object.keys(AllData1);
      // console.log(keyList);
      for (let i of keyList) {
        AllData1[i]["qty"] = 0;
        updateData(i, AllData1[i]["qty"]);
        window.location.reload();
      }
      toast.success("All Items Deleted", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        className: "custom-toast",
      });
    } else {
      toast.info("Item Not Found", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        className: "custom-toast",
      });
    }
  };

  // handle calender options
  const handleCalendarClick = () => {
    setOpen((prev) => !prev);
  };

  // handle file change
  const handleFileChange = (e) => {
    setResponseMessage("");
    const file = e.target.files[0];
    setImage(file);
  };

  // create order btn
  const handleCreateOrder = () => {
    // set loader
    if (selectedCompany == "") {
      toast.warn("Please Select Company Name", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        className: "custom-toast",
      });
    } else if (selectedCostCenter == "") {
      toast.warn("Please Select CostCenter ", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        className: "custom-toast",
      });
    } else if (selectedCustomer == "") {
      toast.warn("Please Select Customer Name", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        className: "custom-toast",
      });
    } else if (formattedDate == "") {
      toast.warn("Please Select Date", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        className: "custom-toast",
      });
    } else if (filter.length == 0) {
      toast.warn("Please Select Order Items", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        className: "custom-toast",
      });
    } else {
      setLoader(true);
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
      setOrder("order-success");
      // post body new
      let postBody = {
        server: url,
        doctype: "Sales Order",
        data: {
          company: selectedCompany,
          cost_center: selectedCostCenter,
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
              // window.location.reload();
            }
            navigate("/orders");
            // console.log(AllData1);
            setLoader(false);
            toast.success("Order Create", {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              className: "custom-toast",
            });
          }
          if (data?.response_data?.data) {
            console.log(data?.response_data?.data);
            const formData = new FormData();
            formData.append("file", image); // Append the file object
            formData.append("server", url);
            formData.append("doctype_name", "Sales Order");
            formData.append("document_name", data?.response_data?.data?.name);

            // console.log("Form Data:", formData);

            fetch("https://erp-backend-black.vercel.app/file", {
              method: "POST",
              body: formData, // Use FormData as the body
            })
              .then((res) => {
                if (!res.ok) {
                  throw new Error("Network response was not ok");
                }
                return res.json();
              })
              .then((data) => {
                console.log("Success:", data);
                navigate("/orders");
                setResponseMessage("File uploaded successfully!");
              })
              .catch((error) => {
                console.error("Error posting data:", error);
                setResponseMessage("Error: " + error.message);
              });
            // console.log(data?.response_data?.data.name);
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          setLoader(false);
        });

      // console.log("success");
    }
  };

  // go back navigate
  const goBack = () => {
    navigate(-1);
  };

  // total sum of all
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
    // console.log(quantities[itemName], itemName);
    AllData1[itemName]["qty"]++;
    updateData(itemName, AllData1[itemName]["qty"]);
  };

  // handle minus btn for modal
  const handleMinus = (itemName) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemName]: Math.max((prevQuantities[itemName] || 0) - 1, 0),
    }));

    AllData1[itemName]["qty"] = Math.max(AllData1[itemName]["qty"] - 1, 0);
    updateData(itemName, AllData1[itemName]["qty"]);
  };

  // Input field handler for manual changes
  const handleInputChange = (itemName, event) => {
    const newQty = parseInt(event.target.value) || 0;

    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemName]: newQty,
    }));

    // Also update in AllData1
    AllData1[itemName] = {
      ...AllData1[itemName],
      qty: newQty,
    };

    // Optionally sync with an external update function
    updateData(itemName, newQty);
  };

  const handleAddItemOpen = () => {
    if (selectedCompany == "") {
      toast.warn("Please Select Company Name", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        className: "custom-toast",
      });
    } else if (selectedCostCenter == "") {
      toast.warn("Please Select Location ", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        className: "custom-toast",
      });
    } else if (selectedCustomer == "") {
      toast.warn("Please Select Customer Name", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        className: "custom-toast",
      });
    } else if (formattedDate == "") {
      toast.warn("Please Select Date", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        className: "custom-toast",
      });
    } else {
      setItemOpen(!itemOpen);
    }
  };

  // loader function for loading
  if (loader) {
    return <MainLoader />;
  }

  if (!order === "" || !change == "") {
    return (
      <>
        <MainLoader />
      </>
    );
  }

  return (
    <div className="bg-gray-200 pb-20 text-black mt-16">
      {/* heading */}
      <div className="flex justify-between items-center h-14 w-full bg-white px-6 ">
        <div className="flex items-center gap-4">
          <div onClick={goBack} className="cursor-pointer">
            <CommonBackButton value="Back" />
          </div>
          {/* <div className="cursor-pointer">
            <IoMdArrowBack onClick={goBack} className="text-lg text-blue-600" />
          </div>
          <p className=" font-medium">Create Order</p> */}
        </div>
        <div
          onClick={() => setOpen4(!open4)}
          className="bg-[#FF0000] p-[3px] rounded border border-gray-400"
        >
          <RiQrScan2Line className="text-xl text-white" />
        </div>
      </div>

      {/* form */}

      <div className="p-5 flex flex-col gap-2">
        {/* company */}
        <CompanyField
          selectedCompany={selectedCompany}
          setSelectedCostCenter={setSelectedCostCenter}
          setSelectedCompany={setSelectedCompany}
        />

        {/* cost center */}
        <CostCenter
          selectedCompany={selectedCompany}
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
          <legend className="ml-3 px-[5px] text-xs text-gray-500">
            Delivery Date <span className="text-[#FF0000] text-xl">*</span>
          </legend>
          <div className="flex gap-4 items-center w-full pl-4 pb-2">
            <SlCalender
              onClick={handleCalendarClick}
              className="text-[#FF0000] text-[17px] font-bold"
            />
            <DatePicker
              className="bg-transparent text-black font-medium border-none outline-none"
              selected={formattedDate}
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
            {/* Optionally display the formatted date somewhere */}
            {/* <span>{formattedDate}</span> */}
          </div>
        </fieldset>
      </div>

      {/* qr scanner */}

      {open4 && (
        <div className="absolute px-10 left-1/2 -translate-x-1/2 w-full h-full top-32 z-20  bg-white">
          {/* <BarcodeScannerComponent
            width={500}
            // height={500}
            onUpdate={(err, result) => {
              if (result) {
                // console.log(result);
                console.log(result);
                setData1(result?.text || "");
              } else setData1("Not Found");
            }}
          /> */}
          <BarcodeScannerComponent
            width={500}
            facingMode="environment" // Use back camera
            onUpdate={(err, result) => {
              if (result) {
                console.log(result);
                setData1(result?.text || "");
              } else {
                setData1("Not Found");
              }
            }}
          />
          <p>{data1}</p>
        </div>
      )}

      {/* buttons */}

      <div className="px-5 flex flex-col">
        <div className="flex flex-col gap-3">
          {/* () => setItemOpen(!itemOpen) */}
          <div>
            <button
              onClick={handleAddItemOpen}
              className="w-full bg-gradient-to-r from-black to-[#FF0000] p-2 rounded-xl flex justify-center items-center gap-2 text-white font-bold"
            >
              {" "}
              <FaCirclePlus className="bg-[#FF0000] rounded-full text-xl" /> Add
              Items
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
          {/* Attachment part  */}
          <Attachment
            image={image}
            responseMessage={responseMessage}
            setResponseMessage={setResponseMessage}
            setImage={setImage}
            handleFileChange={handleFileChange}
          />
        </div>

        {/* data from select item page */}

        <div className="pt-5 text-sm text-black font-medium mt-4 pb-12">
          <div className="flex justify-between">
            <p className="text-zinc-500">Items*</p>
            <div onClick={handleDeleted}>
              <CommonButtonClose close="Clean All" />
            </div>
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
                      <p className="font-medium text-sm text-[#FF0000]">
                        {item.item_name}
                      </p>
                      <p className="flex items-center gap-1 text-xs text-zinc-600">
                        <FaBangladeshiTakaSign /> {item.standard_rate}
                      </p>
                    </div>
                    <div className="flex flex-col justify-end items-center text-sm">
                      <div className="flex items-center gap-2 border-b border-black p-1 ">
                        <FiMinus
                          className="cursor-pointer text-xl"
                          onClick={() => handleMinus(item.name)}
                        />{" "}
                        {<p>{item.qty}</p>}
                        <FaPlus
                          className="cursor-pointer text-green-500 text-xl"
                          onClick={() => handlePlus(item.name)}
                        />
                      </div>
                      <p>{item.standard_rate * item.qty}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <hr />

            {/* button */}
            <div>
              <div
                onClick={handleAddItemOpen}
                className="p-3 flex items-center gap-2 cursor-pointer"
              >
                <FaCirclePlus className="text-[#FF0000] bg-white rounded-full text-lg" />
                <p className="">Add New Items</p>
              </div>
            </div>

            <hr />

            {/* Taxes and Discount`` */}

            <p className="p-3">Total Balance </p>

            <hr />

            <div className="p-3 ">
              {/* <div className="flex justify-between">
                <p className="text-zinc-500">Total Tax : </p>
                <p className="flex items-center gap-1">
                  <FaBangladeshiTakaSign /> <span>0.00</span>{" "}
                </p>
              </div> */}

              <div className="flex justify-between">
                <p className="text-zinc-500">Sub total : </p>
                <p className="flex items-center gap-1">
                  <FaBangladeshiTakaSign /> <span>{totalSum}</span>{" "}
                </p>
              </div>

              {/* <div className="flex justify-between">
                <p className="text-zinc-500">Discount : </p>
                <p className="flex items-center gap-1">
                  <FiMinus />
                  <FaBangladeshiTakaSign /> <span>0.00</span>{" "}
                </p>
              </div> */}
            </div>

            <hr />

            <div className="flex justify-between p-3">
              <p className=" text-black">Total : </p>
              <p className="flex items-center gap-1 text-[#FF0000]">
                <FaBangladeshiTakaSign /> <span>{totalSum}</span>{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="flex gap-3 px-5 bg-gray-100 fixed bottom-[66px] left-0 right-0 justify-center pb-2">
          <div onClick={goBack} className="w-full">
            <button className="border-[1px] bg-black border-zinc-400 font-bold text-white p-2 rounded-xl w-full">
              Close
            </button>
          </div>
          {order == "" ? (
            <button
              onClick={handleCreateOrder}
              className="border-[1px] p-2  bg-[#FF0000] text-white rounded-xl font-bold w-full"
            >
              Order Create
            </button>
          ) : (
            <button
              // onClick={handleCreateOrder}
              className="border-[1px] p-3 bg-gradient-to-r from-slate-500 to-blue-950 text-white rounded-xl text-medium w-full cursor-not-allowed"
            >
              Order Create
            </button>
          )}
        </div>
      </div>
      {itemOpen ? (
        <div className="absolute top-0 left-0 bottom-0 w-full h-full bg-slate-200 z-50">
          <SelectItems
            handlePlus={handlePlus}
            handleMinus={handleMinus}
            itemOpen={itemOpen}
            AllData1={AllData1}
            quantities={quantities}
            setItemOpen={setItemOpen}
          />
        </div>
      ) : null}
    </div>
  );
};

export default CreateOrder;
