import { TfiPencil } from "react-icons/tfi";
import { Link, useParams } from "react-router-dom";
import SubHeading from "./SubHeading";
import { fetchURL, getStoredCart } from "../utilities/function";
import { useEffect, useState } from "react";
import MainLoader from "./Shared/MainLoader";

const ExpenseClaim = ({ setOpen }) => {
  const { name } = useParams();
  const [table, setTable] = useState({});
  const [childTable, setChildTable] = useState([]);

  const { url } = getStoredCart("login-info");
  const [loader, setLoader] = useState(false);

  // Child Table tata fetch
  // base_url/getchildtable?erp_url=erp_url&doctype_name=Doctype_Name&child_table=Child_Table_Under_This_Doctype&name=Doctype_id_or_name

  // main data fetch
  useEffect(() => {
    setLoader(true);
    fetch(`${fetchURL}/getall?erp_url=${url}&doctype_name=Expense Claim`)
      .then((res) => res.json())
      .then((result) => {
        // console.log(result?.data);
        const findItem = result?.data?.find((item) => item?.name === name);
        setTable(findItem);
        // setTable(result.message);
        setLoader(false);
      })
      .catch((err) => {
        console.log(err);
        setLoader(false);
      });
  }, [url, name]);

  // child table data fetch
  useEffect(() => {
    setLoader(true);
    fetch(
      `${fetchURL}/getchildtable?erp_url=${url}&doctype_name=Expense Claim&child_table=Expense Claim Detail&name=${name}`
    )
      .then((res) => res.json())
      .then((result) => {
        setChildTable(result.message);
        setLoader(false);
      })
      .catch((err) => {
        console.log(err);
        setLoader(false);
      });
  }, [url, name]);

  // date time formate
  function formatDateString(dateString) {
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    // Extract just the date part (YYYY-MM-DD) from the string
    const datePart = dateString.split(" ")[0];
    const monthIndex = parseInt(datePart.slice(5, 7), 10) - 1;
    const day = parseInt(datePart.slice(8, 10), 10);

    // Format: "Month-Day", e.g., "Nov-5"
    return `${monthNames[monthIndex]}-${day}`;
  }

  // sum all balance
  const total = childTable.reduce((acc, value) => {
    return acc + value.amount;
  }, 0);

  if (loader) {
    return <MainLoader />;
  }

  return (
    <div className="fixed top-0 mt-28 w-full bg-gray-200 mb-32 ">
      <SubHeading
        title="Back"
        icon={
          <Link to="/updateexpense">
            <TfiPencil />
          </Link>
        }
      />

      {/* draft */}

      <div className=" flex justify-between items-center bg-white px-5 p-3  mt-3 ">
        <div>
          <p className="font-bold text-[#FF0000]">{table?.name}</p>
          <p className="text-zinc-500 font-bold ">
            {table?.modified?.slice(0, 10)}
          </p>
        </div>

        <button className="border rounded-xl px-3 font-bold p-[5px] border-[#FF0000] text-[#FF0000]">
          {table?.status}
        </button>
      </div>
      <hr />
      <div className="bg-white px-5 p-3">
        <p className="text-zinc-500 font-bold ">Employee</p>
        <p className="font-bold text-black">{table?.employee_name}</p>
      </div>
      <hr />

      {/* expenses */}

      <div className="overflow-y-scroll h-full ">
        <div className="flex justify-between pl-5  pr-6 p-3 bg-white">
          <p className="font-bold text-zinc-500">Expenses</p>
          <p className="font-bold text-black">{total}</p>
        </div>

        <div className="bg-white px-3 ">
          <div className="border rounded-2xl shadow-xl pb-10">
            {childTable?.map((table, idx) => {
              return (
                <div
                  key={idx}
                  className="border flex justify-between items-center bg-white px-5 p-3 rounded-2xl  shadow-xl mb-1 mt-1"
                >
                  <div>
                    <p className="font-bold ">{table?.expense_type}</p>
                    <p className="text-zinc-500 font-bold ">
                      {formatDateString(table?.modified)}
                    </p>
                  </div>
                  <p className="font-bold text-black">{table?.amount}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseClaim;
