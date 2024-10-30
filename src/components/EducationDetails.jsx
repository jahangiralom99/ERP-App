import { IoMdArrowBack } from "react-icons/io";
import CommonBackButton from "./Button/CommonBackButton";
import { useEffect, useState } from "react";
import { fetchURL, getStoredCart } from "../utilities/function";
import MainLoader from "./Shared/MainLoader";

const EducationDetails = ({ setOpen2, open2, user }) => {
  const { url } = getStoredCart("login-info");
  // set data for table
  const [data, setData] = useState({});
  // loader
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    fetch(
      `${fetchURL}/getchildtable?erp_url=${url}&doctype_name=Employee&child_table=Employee Education&name=${user?.name}`
    )
      .then((res) => res.json())
      .then((result) => {
        const findUni = result?.message?.find(
          (item) => item?.level == "Graduate"
        );
        setData(findUni);
        setLoader(false);
      })
      .catch((err) => {
        console.log(err);
        setLoader(false);
      });
  }, [url, user]);

  // console.log(data);
  if (loader) {
    return <MainLoader />;
  }

  return (
    <div className="h-screen fixed top-14 bg-gray-200 w-full">
      {/* heading */}
      <div className="flex justify-between items-center h-14 w-full bg-white px-6 ">
        {/* <div
          onClick={() => setOpen2(false)}
          className="flex items-center gap-4"
        >
          <IoMdArrowBack className="text-lg text-blue-600" />

          <p className=" font-medium">Educational Details</p>
        </div> */}
        <div className="cursor-pointer" onClick={() => setOpen2(!open2)}>
          <CommonBackButton className="py-1" value="Back" />
        </div>
        <div>{/* <IoIosSearch className="text-xl text-blue-600" /> */}</div>
      </div>

      {/* details */}
      <div className=" flex flex-col gap-2 bg-white rounded-2xl m-5 ">
        <div className="py-[10px] px-3 ">
          <p className="text-zinc-500 font-medium">Qualification</p>
          <p className="font-bold">{data?.qualification || "None"}</p>
        </div>

        <hr />

        <div className="py-[10px] px-3 ">
          <p className="text-zinc-500 pb- font-medium">School/University</p>
          <p className="font-bold">{data?.school_univ || "None"}</p>
        </div>

        <hr />

        <div className="py-[10px] px-3 ">
          <p className="text-zinc-500 pb- font-medium">Passing Year</p>
          <p className="font-bold">{data?.year_of_passing || "None"}</p>
        </div>
      </div>
    </div>
  );
};

export default EducationDetails;
