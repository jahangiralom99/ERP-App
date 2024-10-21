import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { BsFilterLeft } from "react-icons/bs";
import { FaPlus, FaRegUser } from "react-icons/fa";
import { IoMdArrowBack } from "react-icons/io";
import { RiArrowDropDownLine, RiArrowDropRightLine } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { Link } from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { getStoredCart, updateData } from "../utilities/function";
import MainLoader from "../components/Shared/MainLoader";
import OrderFilterField from "../components/OrderFilterField";

const Orders = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [plus, setPlus] = useState(false);
  // customer state
  const [selectedCustomer, setSelectedCustomer] = useState("");

  // all data
  const [AllData1, setAllData] = useState({});
  // for data fetching
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // data for search query
  const [searchData, setSearchData] = useState([]);

  const { url } = getStoredCart("login-info");

  // all data clear
  useEffect(() => {
    const AllData1 = getStoredCart("item-all-data");
    setAllData(AllData1);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
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
        setData(result?.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

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

  // console.log(data);

  if (loading) {
    return <MainLoader />;
  }
  // console.log(data);
  return (
    <div className=" bg-gray-200 pb-12 ">
      {/* header */}
      <div className="flex justify-between items-center h-14 w-full bg-white px-6 ">
        <div className="flex items-center gap-4">
          <Link to="/">
            <IoMdArrowBack className="text-lg text-blue-600" />
          </Link>
          <p className=" font-medium">Orders</p>
        </div>

        <BsFilterLeft
          onClick={() => setOpen(!open)}
          className="text-2xl text-blue-600 cursor-pointer"
        />
        {/* filter order  */}
        {open && (
          <OrderFilterField
            setSearchData={setSearchData}
            setData={setData}
            data={data}
            selectedCustomer={selectedCustomer}
            setSelectedCustomer={setSelectedCustomer}
            open={open}
            setOpen={setOpen}
          />
        )}
      </div>

      {/* plus button */}
      <Link
        to="/createorders"
        className="border-[1px]  border-[#7579ff] p-3 w-12 bg-white rounded-lg font-medium text-sm text-[#7579ff] flex justify-center items-center fixed bottom-5 right-5"
      >
        <FaPlus className="text-lg " />
      </Link>

      {/* orders */}
      {/* card section  */}
      {!data.length == 0 ? (
        <div className="px-5 pt-5 flex flex-col gap-3 ">
          {/* order1 */}
          {data?.map((item, index) => {
            return (
              <Link
                to={`/details/${item?.name}`}
                key={index}
                className="bg-white p-3 rounded-xl  "
              >
                <div className=" flex justify-between">
                  <div>
                    <p className="text-xs text-blue-600 font-semibold">
                      {item?.naming_series.slice(0, 8)} {item?.name}
                    </p>
                    <p className="text-xs text-zinc-500">
                      {item?.creation?.slice(0, 10)}
                    </p>
                  </div>
                  <div>
                    <button className="bg-[#e1ebf8] border-[1px] border-[#7579ff] p-[5px] rounded-lg font-medium text-sm text-gray-400 ">
                      {item?.status}
                    </button>
                  </div>
                </div>
                <div className="pt-3 flex gap-2 justify-between ">
                  <p>
                    <p className="text-xs text-zinc-500 ">
                      Customer : {item?.customer_name}
                    </p>
                    <p className="text-xs text-black font-semibold">
                      {item?.company}
                    </p>
                  </p>
                  <p>
                    <p className="text-xs text-zinc-500 text-center">Items</p>
                    <p className="text-xs text-center text-black">
                      {item?.total_qty}
                    </p>
                  </p>
                  <p>
                    <p className="text-xs text-zinc-500 text-center">Amount</p>
                    <p className="text-xs text-center text-black">
                      ৳ {item?.base_grand_total}
                    </p>
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="flex items-center justify-center mt-12 font-bold">
          <p>Nothing</p>
        </div>
      )}

      {/* {plus && (
        <div className="absolute top-0 bottom-0 left-0 w-full h-full">
          <CreateOrder setPlus={setPlus} />
        </div>
      )} */}
    </div>
  );
};

export default Orders;
