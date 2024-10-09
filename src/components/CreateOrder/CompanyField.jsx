import { useEffect, useState } from "react";
import { fetchURL, getStoredCart } from "../../utilities/function";
import { LuBuilding2 } from "react-icons/lu";
import { RiArrowDropDownLine, RiArrowDropRightLine } from "react-icons/ri";

const CompanyField = ({ selectedCompany, setSelectedCompany }) => {
  const { url } = getStoredCart("login-info");
  // Company Name api set
  const [company, setCompany] = useState([]);
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

  // /Company?filters=${query}&fields=["*"]

//   console.log(searchQuery);
    // handle Search btn
    

    // https://erp-backend-xkze.vercel.app/getall?erp_url=https://ecommerce.ionicerp.xyz&doctype_name=Company&filters={"company_name":"IONIC Pharma"}


  const handleSearch = async () => {
    const query = encodeURIComponent(
      `{"company_name":"%${searchQuery}%"}`
    );
    const url1 = `${fetchURL}/getall?erp_url=${url}&doctype_name=Company&filters=${query}`;

    try {
      const groupsData = await fetch(url1);
      const data = await groupsData.json();
      console.log(data);
      setSearchResult(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

//   console.log(searchResult);

  return (
    <fieldset className="relative border-[1px] border-gray-600 rounded-xl ">
      <legend className="ml-3 px-[5px] text-xs text-gray-500">
        Company<sup>*</sup>
      </legend>
      <div
        onClick={() => setOpen1(!open1)}
        className="flex justify-between gap-2 items-center w-full pl-4 pb-2"
      >
        <LuBuilding2 className="text-[#FF0000]" />
        <p className="cursor-pointer text-start w-[100px] whitespace-nowrap font-medium">
          {selectedCompany || "Select a Company"}
        </p>
        <input
          type="text"
          className=" bg-transparent w-[80px] text-black cursor-pointer"
          placeholder=""
          disabled
        />

        <div className="cursor-pointer">
          {open1 ? (
            <RiArrowDropDownLine className="text-3xl ml-5 text-blue-600" />
          ) : (
            <RiArrowDropRightLine className="text-3xl ml-5 text-blue-600" />
          )}
        </div>

        {open1 && (
          <div
            onClick={(event) => event.stopPropagation()}
            className="fixed top-[140px] left-1/2 -translate-x-1/2 px-3 bg-white rounded-box z-[1] w-[350px] p-2 shadow"
          >
            <div>
              <div className="flex justify-between">
                <p
                  onClick={clear}
                  className="cursor-pointer text-[12px] text-[#ff3232] font-bold"
                >
                  clear
                </p>
                <p className=" text-[12px] text- font-bold">Select Company </p>
                <p
                  onClick={() => setOpen1(!open1)}
                  className="cursor-pointer text-[12px] text-blue-600 font-bold"
                >
                  close
                </p>
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
            <div className="flex flex-col gap-2 text-sm">
              {company?.data?.map((item) => {
                return (
                  <div
                    onChange={() => setSelectedCompany(item.company_name)}
                    className="flex items-start gap-4"
                  >
                    <input
                      onClick={() => setOpen1(!open1)}
                      key={item.id}
                      type="radio"
                      name="radio-1"
                      checked={selectedCompany === item.company_name}
                      className="radio w-5 h-5"
                      readOnly
                    />
                    <p>{item.company_name}</p>
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

export default CompanyField;
