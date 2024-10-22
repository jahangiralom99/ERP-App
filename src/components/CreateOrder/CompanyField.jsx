import { useEffect, useRef, useState } from "react";
import { fetchURL, getStoredCart } from "../../utilities/function";
import { LuBuilding2 } from "react-icons/lu";
import { RiArrowDropDownLine, RiArrowDropRightLine } from "react-icons/ri";
import CommonButtonClear from "../Button/CommonButtonClear";
import CommonButtonClose from "../Button/CommonButtonClose";

const CompanyField = ({
  selectedCompany,
  setSelectedCompany,
  setSelectedCostCenter,
}) => {
  const { url } = getStoredCart("login-info");
  // Company Name api set
  const [company, setCompany] = useState([]);
  // search for company
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const [open1, setOpen1] = useState(false);

  // get data for Company name
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${fetchURL}/getall?erp_url=${url}&doctype_name=Company`
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const result = await response.json();
        setCompany(result);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchData();
  }, [url]);

  const clear = () => {
    setSelectedCompany("");
  };

  const handleSearch = async () => {
    const query = encodeURIComponent(`[["name", "like", "%${searchQuery}%"]]`);
    const url1 = `${fetchURL}/gets/Company?erp_url=${url}&filters=${query}&fields=["*"]`;

    try {
      const groupsData = await fetch(url1);
      const data = await groupsData.json();
      setSearchResult(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <fieldset className="relative border-[1px] border-gray-600 rounded-xl ">
      <legend className="ml-3 px-[5px] text-xs text-gray-500">
        Company<sup>*</sup>
      </legend>
      <div
        onClick={() => setOpen1(!open1)}
        className="flex gap-4 items-center justify-between w-full pl-4 pb-2"
      >
        <div className="flex items-center gap-4">
          <LuBuilding2 className="text-[#FF0000]" />
          <p className="cursor-pointer text-start w-[100px] whitespace-nowrap font-medium">
            {selectedCompany || "Select Company"}
          </p>
        </div>

        <div className="cursor-pointer">
          {open1 ? (
            <RiArrowDropDownLine className="text-3xl ml-5 text-[#FF0000]" />
          ) : (
            <RiArrowDropRightLine className="text-3xl ml-5 text-[#FF0000]" />
          )}
        </div>

        {open1 && (
          <div
            onClick={(event) => event.stopPropagation()}
            className="fixed border border-gray-300 top-[140px] left-1/2 -translate-x-1/2 px-3 bg-white rounded-box z-[1] w-[350px] p-4 shadow"
          >
            <div>
              <div className="flex justify-center gap-5">
                {/* clear button for search */}
                <div onClick={clear}>
                  <CommonButtonClear />
                </div>
                {/* <p className=" text-[12px] text- font-bold">Select Company </p> */}
                {/* close button */}
                <div onClick={() => setOpen1(!open1)}>
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
            {searchQuery == "" ? (
              <div className="flex flex-col gap-3 text-sm">
                {company?.data?.map((item) => {
                  return (
                    <div
                      onClick={() => {
                        setSelectedCompany(item.company_name);
                        setOpen1(!open1);
                        setSelectedCostCenter("");
                      }}
                      className="flex items-start gap-4 cursor-pointer"
                    >
                      <input
                        key={item.id}
                        type="radio"
                        name="radio-1"
                        checked={selectedCompany === item.company_name}
                        className="radio w-5 h-5"
                        value={item.company_name}
                      />
                      <p>{item.company_name}</p>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="flex flex-col gap-3 text-sm">
                {/* validation for search result   */}
                {!searchResult?.data?.length == 0 ? (
                  <div>
                    {searchResult?.data?.map((item) => {
                      return (
                        <div
                          onClick={() => {
                            setSelectedCompany(item.company_name);
                            setOpen1(!open1);
                          }}
                          className="flex items-start gap-4"
                        >
                          <input
                            key={item.id}
                            type="radio"
                            name="radio-1"
                            checked={selectedCompany === item.company_name}
                            className="radio w-5 h-5"
                          />
                          <p>{item.company_name}</p>
                        </div>
                      );
                    })}
                  </div>
                ) : (
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
  );
};

export default CompanyField;
