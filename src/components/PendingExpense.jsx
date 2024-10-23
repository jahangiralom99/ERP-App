import { useEffect, useState } from "react";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { RiArrowDropRightLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { getStoredCart } from "../utilities/function";
import MainLoader from "./Shared/MainLoader";

const PendingExpense = () => {
  // for data fetching
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { url } = getStoredCart("login-info");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://erp-backend-xkze.vercel.app/getall?erp_url=${url}&doctype_name=Journal Entry`,
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

  if (loading) {
    return <MainLoader />;
  }

  console.log(data);


  return (
    <>
      <div className=" bg-gray-200 pb-60 px-5 py-3">
        {/* expense claimed */}

        <div className="flex justify-between items-center bg-white p-3 rounded-2xl">
          <p className="font-bold">Expense Claimed (6510.0)</p>
          <RiArrowDropRightLine className="text-2xl text-blue-600" />
        </div>

        {/* details card*/}

        <Link to="/expenseclaim">
          <div className=" bg-white p-3 rounded-2xl mt-3">
            <div className="flex justify-between items-center bg-white  rounded-2xl mt-3">
              <button className="border rounded-xl px-3 font-bold p-[5px] border-[#FF0000] text-[#FF0000] ">
                Travel & 2 more
              </button>
              <button className="border rounded-xl px-3 font-bold p-[5px] text-[#FF0000] ">
                Draft
              </button>
            </div>

            <div>
              <p className="flex gap-1 items-center py-2 font-bold ">
                <FaBangladeshiTakaSign /> 12856.00
              </p>
              <p className="text-black font-bold pl-1">2024-10-03</p>
            </div>
          </div>
        </Link>

        <div className=" bg-white p-3 rounded-2xl mt-3">
          <div className="flex justify-between items-center bg-white  rounded-2xl mt-3">
            <button className="border rounded-xl px-3 font-bold p-[5px] border-[#FF0000] text-[#FF0000] ">
              Travel & 2 more
            </button>
            <button className="border rounded-xl px-3 font-bold p-[5px] text-[#FF0000] ">
              Draft
            </button>
          </div>

          <div>
            <p className="flex gap-1 items-center py-2 font-bold text-blue-600">
              <FaBangladeshiTakaSign /> 12856.00
            </p>
            <p className="text-black font-bold pl-1">2024-10-03</p>
          </div>
        </div>
        <div className=" bg-white p-3 rounded-2xl mt-3">
          <div className="flex justify-between items-center bg-white  rounded-2xl mt-3">
            <button className="border rounded-xl px-3 font-bold p-[5px] border-[#FF0000] text-[#FF0000] ">
              Travel & 2 more
            </button>
            <button className="border rounded-xl px-3 font-bold p-[5px] text-[#FF0000] ">
              Draft
            </button>
          </div>

          <div>
            <p className="flex gap-1 items-center py-2 font-bold text-blue-600">
              <FaBangladeshiTakaSign /> 12856.00
            </p>
            <p className="text-black font-bold pl-1">2024-10-03</p>
          </div>
        </div>
        <div className=" bg-white p-3 rounded-2xl mt-3">
          <div className="flex justify-between items-center bg-white  rounded-2xl mt-3">
            <button className="border rounded-xl px-3 font-bold p-[5px] border-[#FF0000] text-[#FF0000] ">
              Travel & 2 more
            </button>
            <button className="border rounded-xl px-3 font-bold p-[5px] text-[#FF0000] ">
              Draft
            </button>
          </div>

          <div>
            <p className="flex gap-1 items-center py-2 font-bold text-blue-600">
              <FaBangladeshiTakaSign /> 12856.00
            </p>
            <p className="text-black font-bold pl-1">2024-10-03</p>
          </div>
        </div>
        <div className=" bg-white p-3 rounded-2xl mt-3">
          <div className="flex justify-between items-center bg-white  rounded-2xl mt-3">
            <button className="border rounded-xl px-3 font-bold p-[5px] border-[#FF0000] text-[#FF0000] ">
              Travel & 2 more
            </button>
            <button className="border rounded-xl px-3 font-bold p-[5px] text-[#FF0000] ">
              Draft
            </button>
          </div>

          <div>
            <p className="flex gap-1 items-center py-2 font-bold text-blue-600">
              <FaBangladeshiTakaSign /> 12856.00
            </p>
            <p className="text-black font-bold pl-1">2024-10-03</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PendingExpense;
