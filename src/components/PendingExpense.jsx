import { useEffect, useState } from "react";
import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { RiArrowDropRightLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { fetchURL, getStoredCart } from "../utilities/function";
// import { getStoredCart } from "../utilities/function";
// import MainLoader from "./Shared/MainLoader";

const PendingExpense = ({ data }) => {
  // console.log(data[0].name);
  // const [table, setTable] = useState([]);
  // const { url } = getStoredCart("login-info");

  // Child Table tata fetch
  // base_url/getchildtable?erp_url=erp_url&doctype_name=Doctype_Name&child_table=Child_Table_Under_This_Doctype&name=Doctype_id_or_name

  // const data2 = []

  // useEffect(() => {
  //   data.map((item) => {
  //     fetch(
  //       `${fetchURL}/getchildtable?erp_url=${url}&doctype_name=Expense Claim&child_table=Expense Claim Detail&name=${item?.name}`
  //     )
  //       .then((res) => res.json())
  //       .then((result) => {
  //         data2.push(result)
  //         console.log(result);
  //       })
  //       .catch((err) => console.log(err));
  //   });
  // }, [url]);

  // console.log(data);

  return (
    <>
      <div className=" bg-gray-200 pb-60 px-5 py-3">
        {/* expense claimed */}
        <div className="flex justify-between items-center bg-white p-3 rounded-2xl">
          <p className="font-bold">Expense Claimed (6510.0)</p>
          <RiArrowDropRightLine className="text-2xl text-[#FF0000]" />
        </div>

        {/* details card*/}
        {data?.map((item) => {
          return (
            <Link to="/expenseclaim">
              <div className=" bg-white p-3 rounded-2xl mt-3">
                <div className="flex justify-between items-center bg-white  rounded-2xl mt-3">
                  <button className="border rounded-xl px-3 font-bold p-[5px] border-[#FF0000] text-[#FF0000] ">
                    Travel & 2 more
                  </button>
                  <button className="border rounded-xl px-3 font-bold p-[5px] bg-orange-400 text-white ">
                    {item?.status}
                  </button>
                </div>

                <div>
                  <p className="flex gap-1 items-center py-2 font-bold ">
                    <FaBangladeshiTakaSign /> {item?.grand_total}
                  </p>
                  <p className="text-black font-bold pl-1">
                    {item?.modified?.slice(0, 10)}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default PendingExpense;
