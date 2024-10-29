import { IoMdArrowBack } from "react-icons/io";
import CommonBackButton from "./Button/CommonBackButton";

const BankDetails = ({ setOpen3, open3, user }) => {
  return (
    <div className="h-screen fixed top-14 bg-gray-200 w-full z-10">
      {/* heading */}
      <div className="flex justify-between items-center h-14 w-full bg-white px-6 ">
        {/* <div
          onClick={() => setOpen3(false)}
          className="flex items-center gap-4"
        >
          <IoMdArrowBack className="text-lg text-blue-600" />

          <p className=" font-medium">Bank Details</p>
        </div> */}
        <div className="cursor-pointer" onClick={() => setOpen3(!open3)}>
          <CommonBackButton className="py-1" value="Back" />
        </div>
        <div>{/* <IoIosSearch className="text-xl text-blue-600" /> */}</div>
      </div>

      {/* details */}
      <div className=" flex flex-col gap-2 bg-white rounded-2xl m-5 ">
        <div className="py-[10px] px-3 ">
          <p className="text-zinc-500 pb- font-medium">Bank Name</p>
          <p className="font-bold">{user?.bank_name || "None"}</p>
        </div>

        <hr />

        <div className="py-[10px] px-3 ">
          <p className="text-zinc-500 pb- font-medium">Account Number</p>
          <p className="font-bold">{user?.bank_ac_no || "None"}</p>
        </div>

        <hr />

        <div className="py-[10px] px-3 ">
          <p className="text-zinc-500 pb- font-medium">IBAN</p>
          <p className="font-bold">{user?.iban || "None"}</p>
        </div>
      </div>
    </div>
  );
};

export default BankDetails;
