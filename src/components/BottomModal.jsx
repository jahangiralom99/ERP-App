import React from "react";
import { IoIosSearch } from "react-icons/io";

const BottomModal = ({ setonclick, title, item }) => {
  return (
    <div className=" fixed top-[250px] left-0 right-0 mx-auto px-3  bg-white rounded-box z-[1] w-[300px] p-2 shadow">
      <div>
        <div className="flex justify-between">
          <p className=" text-[12px] text-[#ff3232] font-bold">clear</p>
          <p className=" text-[12px] text- font-bold">
            {/* Select Naming Series */}
            {title}
          </p>
          <p
            onClick={() => setonclick(false)}
            className=" text-[12px] text-blue-600 font-bold"
          >
            close
          </p>
        </div>
      </div>

      {/* search */}

      <label className="input input-bordered h-10 mt-3 flex items-center gap-2">
        {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70">
                <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd" />
            </svg> */}
        <IoIosSearch />
        <input type="text" className="grow" placeholder="Search" />
      </label>

      <hr className="my-3" />
      <div className="flex gap-2 text-sm">
        <input
          type="radio"
          name="radio-1"
          className="radio w-5 h-5"
          defaultChecked
        />
        <p>
          {/* Tech Solution inc. */}
          {item}
        </p>
      </div>
    </div>
  );
};

export default BottomModal;
