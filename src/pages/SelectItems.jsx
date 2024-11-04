import { useEffect, useState } from "react";
import { FaBangladeshiTakaSign, FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import {
  IoIosArrowRoundBack,
  IoIosSearch,
  IoMdArrowBack,
} from "react-icons/io";
import { RiQrScan2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import {
  addToCart,
  addToProceed,
  fetchURL,
  getStoredCart,
  updateData,
} from "../utilities/function";
import { toast } from "react-toastify";
import CommonBackButton from "../components/Button/CommonBackButton";
import MainLoader from "../components/Shared/MainLoader";

const SelectItems = ({
  setItemOpen,
  itemOpen,
  handlePlus,
  handleMinus,
  AllData1,
  quantities,
}) => {

  const data = getStoredCart("order-info");
  let sum = [];
  sum.push(...data);

 
  const { url } = getStoredCart("login-info");
  const [activeCategory, setActiveCategory] = useState("All");
  // set grp item state
  const [grpItem, setGrpItem] = useState([]);
  const [itemData1, setItemData1] = useState([]);
  const [loader, setLoader] = useState(false);
  // item data state
  const [itemData, setItemData] = useState([]);
  // search state
  const [search, setSearch] = useState(false);
  // search item
  const [searchTerm, setSearchTerm] = useState("");

  // get data for Company name
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${fetchURL}/getall?erp_url=${url}&doctype_name=Item Group`
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const result = await response.json();
        setGrpItem(result);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, [url]);

  // item data for Company name
  useEffect(() => {
    setLoader(true);
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${fetchURL}/getall?erp_url=${url}&doctype_name=Item`
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const result = await response.json();
        setItemData(result);
        setLoader(false);
      } catch (err) {
        // console.log(err.message);
        setLoader(false);
      }
    };
    fetchData();
  }, []);


  const handlePlus1 = (itemName, e) => {
    console.log(AllData1[itemName]);
    AllData1[itemName]["qty"]++;
    updateData(itemName, AllData1[itemName]["qty"]);
    console.log(AllData1[itemName]["qty"]);
  };

  // handle Category Click button
  const handleCategoryClick = (name) => {
    setActiveCategory(name);
    if (name === "All") {
      setItemData1(Object.values(AllData1));
    } else {
      const filterData = Object.values(AllData1).filter(
        (data) => data.item_group === name
      );
      setItemData1(filterData);
    }
  };


  const handleCreateOrder = () => {
    if (Object.keys(AllData1).length === 0) {
      toast.warn("please Select order", {
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
      const list = Object.values(AllData1);
      // console.log("list", list);
      for (let i of list) {
        let tem = 0;
        if (i.qty > 0) {
          for (let j of sum) {
            if (i.name === j.name) {
              j.qty = i.qty;
              tem = 1;
              break;
            }
          }
          if (tem === 0) {
            sum.push(i);
          }
        }
      }

      // console.log(sum);

      // console.log(list);
      // for (let i in list) {
      //   const filter = itemData?.data?.filter((item) => item?.name !== list[i]);

      //   filter[0]["qty"] = quantities[list[i]];
      //   console.log(filter);
      //   sum.push(filter[0]);
      // }
      // console.log(sum);
      // setMf(sum);
      addToProceed(sum, "order-info");

      // addToProceed(sum, "order-info");
      setItemOpen(!itemOpen);
    }
  };

  // search for order list items
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    let filteredData = Object?.values(AllData1)?.filter((item) => {
      return (
        item.item_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.item_name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setItemData1(filteredData);
  };

  if (loader) {
    return <MainLoader />;
  }


  return (
    <div className="bg-gray-200 z-20 text-black mt-14 px-2 mb-12">
      {/* heading */}
      <div className="flex justify-between items-center h-14 w-full bg-white px-6 relative">
        <div className="flex items-center gap-4">
          <div
            className="cursor-pointer"
            onClick={() => setItemOpen(!itemOpen)}
          >
            <CommonBackButton value="Back" />
          </div>
          {/* <div onClick={() => setItemOpen(!itemOpen)}>
            <IoMdArrowBack className="text-lg text-blue-600" />
          </div>
          <p className=" font-medium">Select Items</p> */}
        </div>
        <div className="z-10" onClick={() => setSearch(!search)}>
          <IoIosSearch className="text-2xl text-[#FF0000] cursor-pointer" />
        </div>
        {search && (
          <div className="absolute left-6 top-3 right-20 bg-white">
            <div className="flex items-center">
              <IoIosArrowRoundBack
                onClick={() => setSearch(!search)}
                className="text-2xl cursor-pointer"
              />
              <input
                onChange={handleSearch}
                type="text"
                placeholder="Type here"
                className="border-none focus:outline-none rounded p-1"
              />
            </div>
          </div>
        )}
      </div>

      {/* Scroll buttons */}

      <div
        className="p-3 flex gap-1 overflow-x-scroll scrollbar-hidden"
        style={{
          scrollbarWidth: "none", // For Firefox
        }}
      >
        <style>
          {`
            .scrollbar-hidden::-webkit-scrollbar {
                display: none; /* For Chrome, Safari, and Edge */
            }
        `}
        </style>

        {/* button for group  */}
        <>
          <button
            onClick={() => handleCategoryClick("All")}
            className={`border-[1px] px-3 py-2 text-sm rounded-3xl ${
              activeCategory === "All"
                ? "bg-[#FF0000] text-white border border-black"
                : "bg-white"
            } font-semibold whitespace-nowrap`}
          >
            All
          </button>

          {grpItem?.data
            ?.filter((itm) => itm?.is_group === 0)
            .map((item, index) => (
              <button
                key={index}
                onClick={() => handleCategoryClick(item?.name)}
                className={`border-[1px] px-3 py-2 text-sm rounded-3xl ${
                  activeCategory === item?.name
                    ? "bg-[#FF0000] text-white border border-black"
                    : "bg-white"
                } font-semibold whitespace-nowrap`}
              >
                {item.name}
              </button>
            ))}
        </>
      </div>
      {/* pages of clicked button */}

      <div className="flex flex-col gap-[2px]">
        {itemData1.length == 0 && activeCategory == "All" ? (
          <div>
            {Object?.values(AllData1).map((item, idx) => {
              return (
                <div key={idx} className="bg-white p-3">
                  <div className="flex justify-between">
                    <div className="flex flex-col gap-2">
                      <p className="font-medium text-sm">
                        {item?.item_name}
                      </p>
                      <p className="flex items-center gap-1 text-xs text-zinc-600">
                        <FaBangladeshiTakaSign /> {item?.valuation_rate}
                      </p>
                    </div>
                    <div className="flex flex-col justify-end items-center text-sm">
                      <div className="flex items-center gap-2 border-b-[1px] border-black p-1">
                        <div onClick={() => handleMinus(item?.name)}>
                          <FiMinus className="cursor-pointer text-xl text-black" />{" "}
                        </div>
                        {/* <input onChange={(e)=>setInputValue(e.target.value)} value={item?.qty + inputValue} className="w-12 text-center" type="text" /> */}
                        <p>{item?.qty}</p>{" "}
                        <FaPlus
                          className="cursor-pointer text-green-500 text-xl"
                          onClick={() => handlePlus(item?.name)}
                        />
                      </div>
                      <p>{item?.qty * item?.valuation_rate}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            {!itemData1.length == 0 ? (
              itemData1?.map((item, idx) => {
                return (
                  <div key={idx} className="bg-white p-3">
                    <div className="flex justify-between">
                      <div className="flex flex-col gap-2">
                        <p className="font-medium text-sm">{item?.item_name}</p>
                        <p className="flex items-center gap-1 text-xs text-zinc-600">
                          <FaBangladeshiTakaSign /> {item?.valuation_rate}
                        </p>
                      </div>
                      <div className="flex flex-col justify-end items-center text-sm">
                        {/* {item?.qty * item?.valuation_rate} */}
                        <div className="flex items-center gap-2 border-b border-black  p-1">
                          <div onClick={() => handleMinus(item?.name)}>
                            <FiMinus className="cursor-pointer text-xl" />{" "}
                          </div>
                          <p>{item?.qty}</p>{" "}
                          <FaPlus
                            className="cursor-pointer text-green-500 text-xl"
                            onClick={() => handlePlus(item?.name)}
                          />
                        </div>
                        <p>{item?.qty * item?.valuation_rate}</p>
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="flex items-center justify-center mt-20">
                <p>No Available Data</p>
              </div>
            )}
          </div>
        )}
      </div>

      {/* button */}
      <div onClick={handleCreateOrder}>
        <button className="fixed bottom-0 z-50 border-[1px] p-4 bg-gradient-to-r from-black to-[#FF0000] font-bold text-white rounded-xl text-medium w-full">
          Add Item
        </button>
      </div>
    </div>
  );
};

export default SelectItems;
