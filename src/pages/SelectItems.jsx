import { useEffect, useState } from "react";
import { FaBangladeshiTakaSign, FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import { IoIosSearch, IoMdArrowBack } from "react-icons/io";
import { RiQrScan2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { getStoredCart } from "../utilities/function";

const SelectItems = ({ setItemOpen }) => {
  const [open, setOpen] = useState(false);
  const { url } = getStoredCart("login-info");
  const [activeCategory, setActiveCategory] = useState(null);
  // set grp item state
  const [grpItem, setGrpItem] = useState([]);
  const [itemData1, setItemData1] = useState([]);
  // item data state
  const [itemData, setItemData] = useState([]);
  const [quantities, setQuantities] = useState({});

  // get data for Company name
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://post-request.onrender.com/getall?erp_url=${url}&doctype_name=Item Group`
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
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://post-request.onrender.com/getall?erp_url=${url}&doctype_name=Item`
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const result = await response.json();
        setItemData(result);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, []);

  // handle Category Click button
  const handleCategoryClick = (name) => {
    setActiveCategory(name);
    const filterData = itemData?.data?.filter(
      (data) => data.item_group == name
    );
    setItemData1(filterData);
  };

  // handle plus btn
  const handlePlus = (itemName) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemName]: (prevQuantities[itemName] || 0) + 1,
    }));
  };

  // handle minus btn
  const handleMinus = (itemName) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemName]: Math.max((prevQuantities[itemName] || 0) - 1, 0),
    }));
  };

  const handleCreateOrder = () => {
    console.log(quantities);
  };

  console.log(itemData1);

  return (
    <div className="bg-gray-200 z-20 text-black ">
      {/* heading */}
      <div className="flex justify-between items-center h-14 w-full bg-white px-6 ">
        <div className="flex items-center gap-4">
          <div onClick={() => setItemOpen(false)}>
            <IoMdArrowBack className="text-lg text-blue-600" />
          </div>
          <p className=" font-medium">Select Items</p>
        </div>
        <div>
          <IoIosSearch className="text-xl text-blue-600" />
        </div>
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
        {grpItem?.data
          ?.filter((itm) => itm?.is_group === 0)
          .map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => handleCategoryClick(item?.name)}
                className={`border-[1px] bg-white border-zinc-400 px-3 py-2 text-sm rounded-3xl ${
                  activeCategory === item?.name ? "bg-blue-500 text-white" : " "
                } focus:text-white font-semibold whitespace-nowrap`}
              >
                {item.name}
              </button>
            );
          })}
      </div>
      {/* pages of clicked button */}

      <div className="flex flex-col gap-[2px]">
        {itemData1.length == 0 ? (
          <div>
            {itemData?.data?.map((item, idx) => {
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
                      {(quantities[item?.name] || 0) * item?.valuation_rate}
                      <div className="flex items-center gap-2 border-[2px] rounded-lg p-1">
                        <div onClick={() => handleMinus(item?.name)}>
                          <FiMinus className="cursor-pointer" />{" "}
                        </div>
                        <p>{quantities[item?.name]?.toFixed(2) || 0.0}</p>{" "}
                        <FaPlus
                          className="cursor-pointer"
                          onClick={() => handlePlus(item?.name)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div>
            {itemData1?.map((item, idx) => {
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
                      {(quantities[item?.name] || 0) * item?.valuation_rate}
                      <div className="flex items-center gap-2 border-[2px] rounded-lg p-1">
                        <div onClick={() => handleMinus(item?.name)}>
                          <FiMinus className="cursor-pointer" />{" "}
                        </div>
                        <p>{quantities[item?.name]?.toFixed(2) || 0.0}</p>{" "}
                        <FaPlus
                          className="cursor-pointer"
                          onClick={() => handlePlus(item?.name)}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      {/* <div className="flex flex-col gap-[2px]"> */}

      {/* {open1 && (
          <div className="bg-white p-3">
            <div className="flex justify-between">
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
          </div>
        )} */}
      {/* </div> */}

      <div className="" onClick={handleCreateOrder}>
        <button className="fixed bottom-0 z-20 border-[1px] p-4 bg-gradient-to-r from-blue-600 to-blue-950 text-white rounded-xl text-medium w-full">
          Create Order
        </button>
      </div>
    </div>
  );
};

export default SelectItems;
