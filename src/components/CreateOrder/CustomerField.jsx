import { useEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { RiArrowDropDownLine, RiArrowDropRightLine } from "react-icons/ri";
import { fetchURL, getStoredCart } from "../../utilities/function";

const CustomerField = ({ selectedCustomer, setSelectedCustomer }) => {
  const { url } = getStoredCart("login-info");
  // get Select Customer api set
  const [customer, setCustomer] = useState([]);
  // search for selected customer
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const [open3, setOpen3] = useState(false);

  // get Select Customer
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${fetchURL}/getall?erp_url=${url}&doctype_name=Customer`
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const result = await response.json();
        setCustomer(result);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchData();
  }, []);

  const clear2 = () => {
    setSelectedCustomer("");
  };

  // https://erp-backend-xkze.vercel.app/gets/Company?erp_url=https://ecommerce.ionicerp.xyz&fields=["*"]&filters={"company_name": "IONIC Corporation"}&limit_page_length=9999

  // search for customers
  const handleSearch = async () => {
    const query = encodeURIComponent(
      `[["name", "like", "%${searchQuery}%"]]`
    );
    const url1 = `${fetchURL}/gets/Customer?erp_url=${url}&filters=${query}&fields=["*"]`;

    try {
      const groupsData = await fetch(url1);
      const data = await groupsData.json();
      console.log(data);
      setSearchResult(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  console.log(searchResult);

  return (
    <fieldset className="relative border-[1px] border-gray-600 rounded-xl ">
      <legend className="ml-3 px-[5px] text-xs text-gray-500">
        Select Customer
      </legend>
      <div
        onClick={() => setOpen3(!open3)}
        className=" flex justify-between gap-2 items-center w-full pl-4 pb-2"
      >
        <FaRegUser className="text-[#FF0000] text-xl font-bold" />
        <p className=" text-start w-[100px] whitespace-nowrap font-medium cursor-pointer">
          {selectedCustomer || "select a customer"}
        </p>
        <input
          type="text"
          className=" bg-transparent w-[80px] text-black"
          placeholder=""
          disabled
        />

        <div className="cursor-pointer">
          {open3 ? (
            <RiArrowDropDownLine className="text-3xl ml-5 text-blue-600" />
          ) : (
            <RiArrowDropRightLine className="text-3xl ml-5 text-blue-600" />
          )}
        </div>

        {open3 && (
          <div
            onClick={(event) => event.stopPropagation()}
            className="fixed top-[260px] left-1/2 -translate-x-1/2 px-3 bg-white rounded-box z-[1] w-[350px] h-[300px] overflow-hidden p-2 shadow"
          >
            <div>
              <div className="flex justify-between">
                <p
                  onClick={clear2}
                  className="cursor-pointer text-[12px] text-[#ff3232] font-bold"
                >
                  clear
                </p>
                <p className=" text-[12px] text- font-bold">Select Customer </p>
                <p
                  onClick={() => setOpen3(!open3)}
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
            <div className="flex h-full flex-col gap-4 overflow-y-scroll">
              {customer?.data?.map((item) => {
                return (
                  <div
                    onChange={() => setSelectedCustomer(item.name)}
                    className="flex gap-3 text-sm"
                  >
                    <input
                      onClick={() => setOpen3(!open3)}
                      type="radio"
                      name="radio-1"
                      className="radio w-5 h-5"
                      checked={selectedCustomer === item.name}
                      defaultChecked
                    />
                    <p>{item.name}</p>
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

export default CustomerField;