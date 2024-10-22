import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { FaRegUser } from "react-icons/fa";
import { RiArrowDropDownLine, RiArrowDropRightLine } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { fetchURL, getStoredCart } from "../utilities/function";
import { data } from "autoprefixer";
import CommonButtonClose from "./Button/CommonButtonClose";
import CommonButtonClear from "./Button/CommonButtonClear";
import MainLoader from "./Shared/MainLoader";

const OrderFilterField = ({
  setOpen,
  open,
  selectedCustomer,
  setSelectedCustomer,
  setSearchData,
  data,
  setData,
}) => {
  const [open1, setOpen1] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [open4, setOpen4] = useState(false);
  const [formattedDate, setFormattedDate] = useState("");
  // my url
  const { url } = getStoredCart("login-info");
  // const
  const [customer, setCustomer] = useState([]);
  // search for selected customer
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  // const loader
  const [loader, setLoader] = useState(false);
  // data for order

  // get Select Customer
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${fetchURL}/getall?erp_url=${url}&doctype_name=Customer`
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

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         `https://erp-backend-xkze.vercel.app/getall?erp_url=${url}&doctype_name=Sales Order`,
  //         {
  //           method: "GET",
  //           headers: {
  //             Accept: "application/json",
  //             "Content-Type": "application/json",
  //           },
  //         }
  //       );
  //       if (!response.ok) {
  //         throw new Error(`Error: ${response.status}`);
  //       }
  //       const result = await response.json();
  //       // console.log(result);
  //       const filter = result?.data?.filter(
  //         (item) =>
  //           item.customer == selectedCustomer &&
  //           item.transaction_date == formattedDate
  //       );
  //       console.log("filter data", filter);
  //       // setM(result);
  //       // setLoading(false);
  //     } catch (err) {
  //       console.log(err);
  //       // setError(err.message);
  //     } finally {
  //       // setLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, [url, selectedCustomer, formattedDate]);

  const fetchData = async () => {
    setLoader(true);
    try {
      const response = await fetch(
        `https://erp-backend-xkze.vercel.app/getall?erp_url=${url}&doctype_name=Sales Order`,
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
      const filter = result?.data?.filter(
        (item) =>
          item.customer === selectedCustomer &&
          item.transaction_date === formattedDate
      );
      console.log("filtered data", filter);
      setData(filter);
      setLoader(false);
    } catch (err) {
      console.error(err);
      // setError(err.message);
    } finally {
      setLoader(false);
    }
  };

  // search for customers
  const handleSearch = async () => {
    const query = encodeURIComponent(`[["name", "like", "%${searchQuery}%"]]`);
    const url1 = `${fetchURL}/gets/Customer?erp_url=${url}&filters=${query}&fields=["*"]`;

    try {
      const groupsData = await fetch(url1);
      const data = await groupsData.json();
      setSearchResult(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // handle Apply for Filter by Customer name and  date
  const handleFilter = () => {
    fetchData();
    setTimeout(() => {
      setOpen(!open);
    }, 2000);
  };

  const clear2 = () => {
    setSelectedCustomer("");
  };

  // console.log("data", m);

  const handleCalendarClick = () => {
    setOpen1((prev) => !prev);
  };

  if (loader) {
    return (
      <div className="absolute top-0 left-0 w-full h-screen z-20">
        <MainLoader />
      </div>
    );
  }

  return (
    <div className="fixed top-14 left-0 right-0 bg-gray-50 h-[400px] rounded-t-xl z-10 flex justify-center items-center">
      <div>
        <div className="flex justify-between w-full pt-3 ">
          <p className="w-10"></p>
          <p className="text-black font-medium">Filter Orders</p>
          {/* CLose button  set open  */}
          <div onClick={() => setOpen(!open)}>
            <CommonButtonClose close="Close" />
          </div>
        </div>

        <div className="h-[1px] w-full bg-[#aca7a7] my-3"></div>

        {/* input field */}

        <div className="flex flex-col gap-3">
          {/* Select customer */}

          <fieldset className="relative border-[1px] border-gray-600 rounded-xl ">
            <legend className="ml-3 px-[5px] text-xs text-gray-500">
              Select Customer
            </legend>
            <div
              onClick={() => setOpen3(!open3)}
              className="cursor-pointer flex justify-between gap-2 items-center w-full pl-4 pb-2"
            >
              <div className="flex items-center gap-4">
                <FaRegUser className="text-[#E70006] text-xl font-bold" />
                <p className="cursor-pointer text-start w-[100px] whitespace-nowrap font-medium">
                  {selectedCustomer || "select a customer"}
                </p>
              </div>
              <div>
                {open3 ? (
                  <RiArrowDropDownLine className="text-3xl ml-5 text-[#FF0000]" />
                ) : (
                  <RiArrowDropRightLine className="text-3xl ml-5 text-[#FF0000]" />
                )}
              </div>

              {/* search result  */}

              {open3 && (
                <div
                  onClick={(event) => event.stopPropagation()}
                  className="fixed top-[246px] left-1/2 -translate-x-1/2 px-3 border border-gray-300 bg-white rounded-box z-[1] w-[360px] h-[300px] overflow-hidden p-5 shadow"
                >
                  <div>
                    <div className="flex justify-center gap-5">
                      {/* clear button for modal */}
                      <div onClick={clear2}>
                        <CommonButtonClear />
                      </div>
                      {/* <p className=" text-[12px] text- font-bold">
                        Select Customer{" "}
                      </p> */}
                      {/* close button for modal  */}
                      <div onClick={() => setOpen3(!open3)}>
                        <CommonButtonClose close="Close"></CommonButtonClose>
                      </div>
                    </div>
                  </div>

                  {/* search */}

                  <label
                    onChange={handleSearch}
                    className="input input-bordered h-10 mt-3 flex items-center gap-2"
                  >
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
                    <input
                      onChange={(e) => setSearchQuery(e.target.value)}
                      type="text"
                      className="grow"
                      placeholder="Search"
                    />
                  </label>

                  <hr className="my-3" />
                  {/* All Customer show  */}
                  {searchQuery == "" ? (
                    <div className="flex h-full flex-col gap-4 overflow-y-scroll">
                      {customer?.data?.map((item) => {
                        return (
                          <div
                            onClick={() => {
                              setSelectedCustomer(item.name);
                              setOpen3(!open3);
                            }}
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
                  ) : (
                    // search query show
                    <div className="flex h-full flex-col gap-4 overflow-y-scroll">
                      {!searchResult?.data?.length == 0 ? (
                        <div>
                          {searchResult?.data?.map((item) => {
                            return (
                              <div
                                onClick={() => {
                                  setSelectedCustomer(item.name);
                                  setOpen3(!open3);
                                }}
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
                      ) : (
                        // no data found
                        <div className="flex items-center justify-center ">
                          <p>Nothing</p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          </fieldset>
          {/* date */}
          <fieldset className="relative border-[1px] border-gray-600 rounded-xl">
            <legend className="ml-3 px-[5px] text-xs text-gray-500">
              date
            </legend>
            <div className="flex gap-4 items-center w-full pl-4 pb-2">
              <SlCalender
                onClick={handleCalendarClick}
                className="text-[#FF0000] text-[17px] font-bold"
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
                  setOpen1(false); // Close the date picker after selection
                }}
                onClickOutside={() => setOpen1(false)} // Close when clicking outside
                open={open1} // Control the open state
                onFocus={handleCalendarClick} // Open on focus
              />
              {/* Optionally display the formatted date somewhere */}
              {/* <span>{formattedDate}</span> */}
            </div>
          </fieldset>
        </div>

        <div className="flex gap-3 px-5 justify-between py-6">
          <button
            onClick={clear2}
            className=" text-white font-bold bg-black rounded-xl px-6 py-1 "
          >
            Clear Filters
          </button>

          <button
            onClick={handleFilter}
            className="border-[1px] bg-gradient-to-r font-bold bg-[#E70006] text-white rounded-xl whitespace-nowrap text-medium px-6 py-1 "
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderFilterField;
