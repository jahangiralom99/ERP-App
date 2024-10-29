import React from "react";
import { IoMdArrowBack } from "react-icons/io";
import CommonBackButton from "./Button/CommonBackButton";

const PersonalDetails = ({ setOpen1, open1, user }) => {
  console.log(user);

  return (
    <div className="h-screen fixed top-14 bg-gray-200 w-full z-10">
      {/* heading */}
      <div className="flex justify-between items-center pt-4 w-full px-6 ">
        {/* <div
          onClick={() => setOpen1(false)}
          className="flex items-center gap-4"
        >
          <IoMdArrowBack className="text-lg text-blue-600" />

          <p className=" font-medium">Personal Details</p>
        </div> */}
        <div className="cursor-pointer" onClick={() => setOpen1(!open1)}>
          <CommonBackButton className="py-1" value="Back" />
        </div>
        <div>{/* <IoIosSearch className="text-xl text-blue-600" /> */}</div>
      </div>

      {/* details */}
      <div className=" flex flex-col gap-1 bg-white rounded-2xl mx-5 mt-4">
        <div className="py-[10px] px-3 ">
          <p className="text-zinc-500 pb- font-medium">Date of Birth</p>
          <p className="font-bold">{user?.date_of_birth || "None"}</p>
        </div>

        <hr />

        <div className="py-[10px] px-3 ">
          <p className="text-zinc-500 pb- font-medium">
            Personal email address
          </p>
          <p className="font-bold">{user?.prefered_email || "None"}</p>
        </div>

        <hr />

        <div className="py-[10px] px-3 ">
          <p className="text-zinc-500 pb- font-medium">Gender</p>
          <p className="font-bold">{user?.gender || "None"}</p>
        </div>
        <hr />

        <div className="py-[10px] px-3 ">
          <p className="text-zinc-500 pb- font-medium">Contact number</p>
          <p className="font-bold">{user?.cell_number || "None"}</p>
        </div>

        <hr />
        <div className="py-[10px] px-3 ">
          <p className="text-zinc-500 pb- font-medium">Address</p>
          <p className="font-bold">{user?.current_address || "None"}</p>
        </div>

        <hr />
        <div className="py-[10px] px-3 ">
          <p className="text-zinc-500 pb- font-medium">
            Emergency Contact Name
          </p>
          <p className="font-bold">{user?.person_to_be_contacted || "none"}</p>
        </div>
        <hr />
        <div className="py-[10px] px-3 ">
          <p className="text-zinc-500 pb- font-medium">Emergency Phone</p>
          <p className="font-bold">{user?.emergency_phone_number || "none"}</p>
        </div>

        <hr />
        <div className="py-[10px] px-3 ">
          <p className="text-zinc-500 pb- font-medium">Relation</p>
          <p className="font-bold">{user?.relation || "None"}</p>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetails;
