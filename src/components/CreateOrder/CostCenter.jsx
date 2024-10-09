import { useEffect, useState } from "react";
import { fetchURL, getStoredCart } from "../../utilities/function";
import { FaBuildingColumns } from "react-icons/fa6";
import { RiArrowDropDownLine, RiArrowDropRightLine } from "react-icons/ri";

const CostCenter = ({selectedCostCenter, setSelectedCostCenter}) => {
  const { url } = getStoredCart("login-info");
  const [open2, setOpen2] = useState(false);
  // Cost Center api set
  const [costCenter, setCostCenter] = useState([]);


  // get Cost Center
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${fetchURL}/getall?erp_url=${url}&doctype_name=Cost Center`
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const result = await response.json();
        setCostCenter(result);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchData();
  }, [url]);

  const clear1 = () => {
    setSelectedCostCenter("");
  };

  return (
    <fieldset className="relative border-[1px] border-gray-600 rounded-xl ">
      <legend className="ml-3 px-[5px] text-xs text-gray-500">
        Cost Center
      </legend>
      <div
        onClick={() => setOpen2(!open2)}
        className=" flex justify-between gap-2 items-center w-full pl-4 pb-2"
      >
        <FaBuildingColumns className="text-[#FF0000]" />
        <p className=" text-start w-[100px] whitespace-nowrap font-medium cursor-pointer">
          {selectedCostCenter || "select a cost of center"}
        </p>
        <input
          type="text"
          className="cursor-pointer bg-transparent w-[80px] text-black"
          placeholder=""
          disabled
        />

        <div className="cursor-pointer">
          {open2 ? (
            <RiArrowDropDownLine className="text-3xl ml-5 text-blue-600" />
          ) : (
            <RiArrowDropRightLine className="text-3xl ml-5 text-blue-600" />
          )}
        </div>

        {open2 && (
          <div
            onClick={(event) => event.stopPropagation()}
            className="fixed top-[195px] left-1/2 -translate-x-1/2 px-3 bg-white rounded-box z-[1] w-[350px] p-2 shadow"
          >
            <div>
              <div className="flex justify-between">
                <p
                  onClick={clear1}
                  className="cursor-pointer text-[12px] text-[#ff3232] font-bold"
                >
                  clear
                </p>
                <p className=" text-[12px] text- font-bold">Select Cost Of Center </p>
                <p
                  onClick={() => setOpen2(!open2)}
                  className="cursor-pointer text-[12px] text-blue-600 font-bold"
                >
                  close
                </p>
              </div>
            </div>

            {/* search */}

            <label className="input input-bordered h-10 mt-3 flex items-center gap-2">
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
              <input type="text" className="grow" placeholder="Search" />
            </label>

            <hr className="my-3" />
            <div className="flex flex-col gap-2 text-sm">
              {costCenter?.data?.map((item) => {
                return (
                  <div
                    onChange={() => setSelectedCostCenter(item.name)}
                    className="flex gap-2 text-sm"
                  >
                    <input
                      onClick={() => setOpen2(!open2)}
                      type="radio"
                      name="radio-1"
                      className="radio w-5 h-5"
                      checked={selectedCostCenter === item.name}
                      readOnly
                    />
                    <p>{item?.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </fieldset>
  );
};

export default CostCenter;
