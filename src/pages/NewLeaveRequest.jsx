import { BsMoonStars } from "react-icons/bs";
import { useEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import CancelButton from "../components/CancelButton";
import BlueButton from "../components/BlueButton";
import SubHeading from "../components/SubHeading";
import InputDateDesign from "../components/InputDateDesign";
import InputDesign from "../components/InputDesign";
import Arrow from "../components/Arrow";
import BottomModal from "../components/BottomModal";
import { SlCalender } from "react-icons/sl";
import DatePicker from "react-datepicker";
import { fetchURL, getStoredCart } from "../utilities/function";
import { RiArrowDropDownLine, RiArrowDropRightLine } from "react-icons/ri";
import CommonButtonClear from "../components/Button/CommonButtonClear";
import CommonButtonClose from "../components/Button/CommonButtonClose";
import { toast } from "react-toastify";
import EmployField from "../components/CreateOrder/EmployField";
import { useNavigate } from "react-router-dom";
import MainLoader from "../components/Shared/MainLoader";

const NewLeaveRequest = () => {
  const [open1, setOpen1] = useState(false);
  const [open, setOpen] = useState(false);
  const [formattedDate, setFormattedDate] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [formattedDate1, setFormattedDate1] = useState("");
  const [description, setDescription] = useState("");
  // sate for leave displaying
  const [selectedCustomer, setSelectedCustomer] = useState("");
  // employ for state
  // const [selectEmploy, setSelectEmploy] = useState("");

  const { url, data } = getStoredCart("login-info");
  const email = decodeURIComponent(data?.user_id);
  // get Select Customer api set
  const [customer, setCustomer] = useState([]);
  // search for selected customer
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const navigate = useNavigate();
  const [loader, setLoader] = useState(false);
  // user
  const [user, setUser] = useState({});

  const [open3, setOpen3] = useState(false);

  // get Select Customer
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${fetchURL}/getall?erp_url=${url}&doctype_name=Leave Type`
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

  // employ if get
  useEffect(() => {
    setLoader(true);
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${fetchURL}/getall?erp_url=${url}&doctype_name=Employee`
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const result = await response.json();
        const findEmail = result?.data?.find(
          (item) => item?.prefered_email === email
        );
        setUser(findEmail);
        setLoader(false);
      } catch (err) {
        setLoader(false);
        console.log(err.message);
      }
    };
    fetchData();
  }, [url, email]);

  // console.log(user?.name);

  const clear2 = () => {
    setSelectedCustomer("");
    setSearchQuery("");
  };

  // https://erp-backend-xkze.vercel.app/gets/Company?erp_url=https://ecommerce.ionicerp.xyz&fields=["*"]&filters={"company_name": "IONIC Corporation"}&limit_page_length=9999

  // api call

  // search for customers
  const handleSearch = async () => {
    const query = encodeURIComponent(`[["name", "like", "%${searchQuery}%"]]`);
    const url1 = `${fetchURL}/gets/Leave Type?erp_url=${url}&filters=${query}&fields=["*"]`;
    try {
      const groupsData = await fetch(url1);
      const data = await groupsData.json();
      setSearchResult(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    if (searchQuery) {
      handleSearch();
    }
  }, [searchQuery]);

  const handleCalendarClick = () => {
    setOpen((prev) => !prev);
  };

  // useEffect(() => {
  //   const fetchFn = async() =>
  // }, [])

  const body = {
    server: url,
    doctype: "Leave Application",
    employee: user?.name,
    company: "IONIC Corporation",
    from_date: formattedDate,
    // leave_approver: "potidinbd@gmail.com",
    leave_type: selectedCustomer,
    to_date: formattedDate1,
    description: description,
  };

  // console.log(selectEmploy);

  const handleLeaveApply = (e) => {
    e.preventDefault();
    // if (formattedDate1 == "" || formattedDate == "" || description == "" || selectedCustomer == "") {
    //   toast.warn("Please Select ", {
    //     position: "top-center",
    //     autoClose: 1000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "colored",
    //     className: "custom-toast",
    //   })
    // } else {
    //   console.log("fdgfdg");
    // }
    if (formattedDate === "") {
      toast.warn("Please Select Start Date", {
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
    } else if (formattedDate1 === "") {
      toast.warn("Please Select End Date", {
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
    } else if (selectedCustomer === "") {
      toast.warn("Please Select Leave type", {
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
    } else if (description === "") {
      toast.warn("Please Select Leave Reason", {
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
      // // Post order
      setLoader(true);
      fetch("https://erp-backend-black.vercel.app/post_data", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error("Network response was not ok");
          }
          return res.json();
        })
        .then((data) => {
          setLoader(false);
          if (data?.response_data) {
            setLoader(false);
            navigate("/leave");
            toast.success("Leave Application Submitted", {
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
            setLoader(false);
            toast.error("Leave Application Not Submitted", {
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
          console.log(data);
        })
        .catch((err) => {
          setLoader(false);
          console.log(err);
        });

      // console.log("successfully selected ALl Items");
    }
  };

  // console.log(selectedCustomer);
  if (loader) {
    return <MainLoader />;
  }

  return (
    <div className="pt-28 text-black font-bold">
      <SubHeading title="Back" />

      <form className="flex flex-col gap-3 mt-5 mx-5">
        <div className="flex flex-col md:flex-row gap-2">
          <InputDateDesign
            formattedDate={formattedDate}
            setFormattedDate={setFormattedDate}
            label={"Start Date"}
            popperPlacement={"bottom-end"}
          />
          <fieldset className="border-[1px] border-gray-600 rounded-xl">
            <legend className="ml-3 px-[5px] text-xs text-gray-500">
              End Date <span className="text-[#FF0000] text-xl">*</span>
            </legend>
            <div className="flex  items-center  gap-2  pl-4 pb-2">
              <SlCalender
                onClick={handleCalendarClick}
                className="text-[#E70006] text-lg  "
              />
              <DatePicker
                className="bg-transparent text-black font-medium border-none outline-none"
                selected={formattedDate1}
                onChange={(date) => {
                  // Format the date as YYYY-MM-DD
                  const formattedDate1 = `${date.getFullYear()}-${(
                    date.getMonth() + 1
                  )
                    .toString()
                    .padStart(2, "0")}-${date
                    .getDate()
                    .toString()
                    .padStart(2, "0")}`;

                  setStartDate(date); // Set the Date object
                  setFormattedDate1(formattedDate1); // Set the formatted string
                  setOpen(false); // Close the date picker after selection
                }}
                onClickOutside={() => setOpen(false)} // Close on outside click
                open={open} // Control the open state
                onFocus={handleCalendarClick} // Open on focus
              />
            </div>
          </fieldset>
        </div>

        {/* <InputDesign leave={leave}
          setonclick={setOpen1}
          onclick={open1}
          label={"Select Leave Type"}
          inputicon={<BsMoonStars />}
          placeholder={"Select Leave Type"}
          readOnly={true}
          arrow={<Arrow setonclick={setOpen1} onclick={open1} />}
        /> */}

        {/* employ  */}
        {/* <EmployField
          setSelectEmploy={setSelectEmploy}
          selectEmploy={selectEmploy}
        /> */}

        {/* leave type  */}
        <fieldset className="relative border-[1px] border-gray-600 rounded-xl">
          <legend className="ml-3 px-[5px] text-xs text-gray-500">
            Leave Type<span className="text-[#FF0000] text-xl">*</span>
          </legend>
          <div
            onClick={() => {
              setOpen3(!open3);
              setSearchQuery("");
            }}
            className=" flex  gap-4 items-center justify-between w-full pl-4 pb-2"
          >
            <div className="flex items-center gap-4">
              <FaRegUser className="text-[#FF0000] text-[18px] font-bold" />
              <p className=" text-start w-[100px] whitespace-nowrap font-medium cursor-pointer">
                {selectedCustomer || "Leave Type"}
              </p>
            </div>
            <div className="cursor-pointer">
              {open3 ? (
                <RiArrowDropDownLine className="text-3xl ml-5 text-[#FF0000]" />
              ) : (
                <RiArrowDropRightLine className="text-3xl ml-5 text-[#FF0000]" />
              )}
            </div>

            {open3 && (
              <div
                onClick={(event) => event.stopPropagation()}
                className="fixed border border-gray-300 top-[262px] left-1/2 -translate-x-1/2 px-3 bg-white rounded-box z-[1] w-[350px] h-[300px] overflow-hidden p-4 shadow"
              >
                <div>
                  <div className="flex justify-center gap-5">
                    {/* clear button for modal */}
                    <div onClick={clear2}>
                      <CommonButtonClear />
                    </div>
                    {/* <p className=" text-[12px] text- font-bold">Select Customer </p> */}
                    {/* close button for modal  */}
                    <div onClick={() => setOpen3(!open3)}>
                      <CommonButtonClose close="Close"></CommonButtonClose>
                    </div>
                  </div>
                </div>

                {/* search */}

                <label
                  // onChange={handleSearch}
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
                    value={searchQuery || ""}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    type="text"
                    className="grow"
                    placeholder="Search"
                  />
                </label>

                <hr className="my-3" />
                {/* All Customer show  */}
                {searchQuery == "" ? (
                  <div className="flex h-full flex-col gap-4 overflow-y-scroll pb-28">
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
                  <div className="h-full overflow-y-scroll">
                    {!searchResult?.data?.length == 0 ? (
                      <div className="flex flex-col gap-4 pb-28">
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

        {/* Leave Type bottom modal */}

        {open1 && (
          <BottomModal
            setonclick={setOpen1}
            title={" Select Leave Type"}
            item={"Tech Solution inc."}
          />
        )}

        <p className="text-zinc-500">Add half day</p>

        <textarea
          onChange={(e) => setDescription(e.target.value)}
          className="textarea textarea-bordered   border-gray-600 w-full h-32 rounded-xl mb-3"
          placeholder="Type reason here..."
        ></textarea>

        <div className="flex gap-2 mb-32">
          <CancelButton path={"/leave"} />
          <BlueButton onClick={handleLeaveApply} name={"Apply"} />
        </div>
      </form>
    </div>
  );
};

export default NewLeaveRequest;
