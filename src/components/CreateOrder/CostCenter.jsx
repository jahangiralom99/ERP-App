import { useEffect, useState } from "react";
import { fetchURL, getStoredCart } from "../../utilities/function";
import { FaBuildingColumns } from "react-icons/fa6";
import { RiArrowDropDownLine, RiArrowDropRightLine } from "react-icons/ri";
import CommonButtonClose from "../Button/CommonButtonClose";
import CommonButtonClear from "../Button/CommonButtonClear";

const CostCenter = ({
  selectedCostCenter,
  setSelectedCostCenter,
  selectedCompany,
}) => {
  const { url } = getStoredCart("login-info");
  const [open2, setOpen2] = useState(false);
  // Cost Center api set
  const [costCenter, setCostCenter] = useState([]);
  // search cost center
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  // console.log(selectedCompany);

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
        const filter = result?.data?.filter(
          (item) => item.is_group === 0 && item.company == selectedCompany
        );
        // console.log(filter);
        setCostCenter(filter);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchData();
  }, [url, selectedCompany]);

  const clear1 = () => {
    setSelectedCostCenter("");
  };

  // search for customers
  const handleSearch = async () => {
    const query = encodeURIComponent(`[["name", "like", "%${searchQuery}%"]]`);
    const url1 = `${fetchURL}/gets/Cost Center?erp_url=${url}&filters=${query}&fields=["*"]`;

    try {
      const groupsData = await fetch(url1);
      const data = await groupsData.json();
      const filter = data?.data?.filter(
        (item) => item.is_group === 0 && item.company == selectedCompany
      );
      // console.log("dtatatata", filter);
      setSearchResult(filter);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <fieldset className="relative border-[1px] border-gray-600 rounded-xl ">
      <legend className="ml-3 px-[5px] text-xs text-gray-500">
        Cost Center
      </legend>
      <div
        onClick={() => setOpen2(!open2)}
        className="flex gap-4 items-center justify-between w-full pl-4 pb-2"
      >
        <div className="flex items-center gap-4">
          <FaBuildingColumns className="text-[#FF0000]" />
          <p className=" text-start w-[100px] whitespace-nowrap font-medium cursor-pointer">
            {selectedCostCenter || "select a cost of center"}
          </p>
        </div>
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
            className="fixed border border-gray-300 top-[195px] left-1/2 -translate-x-1/2 px-3 bg-white rounded-box z-[1] w-[350px] p-4 shadow"
          >
            <div>
              <div className="flex justify-center gap-5">
                {/* clear button  */}
                <div onClick={clear1}>
                  <CommonButtonClear />
                </div>
                {/* <p className=" text-[12px] text- font-bold">
                  Select Cost Of Center{" "}
                </p> */}
                {/* close button for open modal  */}
                <div onClick={() => setOpen2(!open2)}>
                  <CommonButtonClose close="Close" />
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
            {/* All item show data  */}
            {searchQuery == "" ? (
              <div className="flex flex-col gap-2 text-sm">
                {costCenter?.map((item) => {
                  return (
                    <div
                      onClick={() => {
                        setSelectedCostCenter(item.name);
                        setOpen2(!open2);
                      }}
                      className="flex gap-2 text-sm"
                    >
                      <input
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
            ) : (
              <div className="flex flex-col gap-2 text-sm">
                {/* search query for  */}
                {!searchResult?.length == 0 ? (
                  <div>
                    {searchResult?.map((item) => {
                      return (
                        <div
                          onClick={() => {
                            setSelectedCostCenter(item.name);
                            setOpen2(!open2);
                          }}
                          className="flex gap-2 text-sm"
                        >
                          <input
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
                ) : (
                  // no data found
                  <div className="flex items-center justify-center ">
                    <p>No Data Found </p>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </fieldset>
  );
};

export default CostCenter;
