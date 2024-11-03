import React, { useEffect, useState } from "react";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import avatar from "../assets/avater.jpg";
import { MdKeyboardArrowRight } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import Switch from "react-switch";
import { IoColorPaletteOutline, IoLanguageOutline } from "react-icons/io5";
import { GrDocumentText } from "react-icons/gr";
import { AiOutlineLogout } from "react-icons/ai";
import PersonalDetails from "../components/PersonalDetails";
import EducationDetails from "../components/EducationDetails";
import BankDetails from "../components/BankDetails";
import ChangePassword from "../components/ChangePassword";
import LogoutModal from "../components/LogoutModal";
import { fetchURL, getStoredCart } from "../utilities/function";
import MainLoader from "../components/Shared/MainLoader";
import CommonBackButton from "../components/Button/CommonBackButton";

const Profile = () => {
  const [checked, setChecked] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  const [open7, setOpen7] = useState(false);
  const [open8, setOpen8] = useState(false);
  // user info
  const [user, setUser] = useState({});
  // loader
  const [loader, setLoader] = useState(false);

  const onSubmit = (data) => {
    // console.log(data);
    // console.log(checked);
  };

  const { data, url } = getStoredCart("login-info");
  // email decode URL
  const email = decodeURIComponent(data?.user_id);

  console.log(data);

  useEffect(() => {
    setLoader(true);
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${fetchURL}/getall?erp_url=${url}&doctype_name=Employee`
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const result = await response.json();
        const findEmail = result?.data?.find(
          (item) => item?.prefered_email === email
        );
        setUser(findEmail);
        setLoader(false);
      } catch (err) {
        setLoader(false);
        console.log(err.message);
      }
    };
    fetchData();
  }, [url, email]);

  // console.log(user);
  if (loader) {
    return <MainLoader />;
  }

  console.log(user);

  return (
    <div className="bg-gray-200  text-black text-sm pb-[60px] mt-14">
      {/* heading */}
      <div className="flex justify-between items-center h-14 w-full bg-white px-6 ">
        <div className="flex items-center gap-4">
          <Link to="/">
            <CommonBackButton className="py-1" value="Back" />
          </Link>
          {/* <p className=" font-medium">My Profile</p> */}
        </div>
        <div>{/* <IoIosSearch className="text-xl text-blue-600" /> */}</div>
      </div>

      {/* user */}

      <div className="flex justify- items-center  bg-white rounded-2xl m-5 p-3 ">
        <div className="flex justify-evenly items-center gap-4 ">
          <img
            className="w-16 h-16 rounded-full"
            src={data?.user_image ? url + data?.user_image : avatar}
            alt="user-image"
          />
          <div>
            <p className="font-bold text-[18px]">
              {decodeURIComponent(data?.full_name)}
            </p>
            <p className="text-xs text-zinc-500">
            <span className="font-bold">Department</span>  {user?.department ? user?.department : "None"}
            </p>
            <p className="text-xs text-zinc-500">
            <span className="font-bold">Designation</span> : {user?.designation ? user?.designation : "None"}
            </p>
            <p className="text-xs text-zinc-500">
             <span className="font-bold">Location</span> : {user?.payroll_cost_center ? user?.payroll_cost_center : "None"}
            </p>
          </div>
        </div>
      </div>

      {/* details */}

      <div className=" flex flex-col gap-2 bg-white rounded-2xl m-5 ">
        <div className="p-3 ">
          <p className="text-zinc-500 pb-1 font-medium">Employee ID</p>
          <p className="font-bold">{user?.employee}</p>
        </div>

        <hr />
        <div className="p-3 ">
          <p className="text-zinc-500 pb-1 font-medium">Date of Joining</p>
          <p className="font-bold">{user?.date_of_joining}</p>
        </div>
        <hr />
        <div className="p-3 ">
          <p className="text-zinc-500 pb-1 font-medium">
            official email address
          </p>
          <p className="font-bold">{decodeURIComponent(data?.user_id)}</p>
        </div>
        <hr />
        <div className="p-3 ">
          <p className="text-zinc-500 pb-1 font-medium">Contact number</p>
          <p className="font-bold">{user?.cell_number}</p>
        </div>
      </div>

      {/* personal details */}

      <div className=" m-5 rounded-2xl bg-white  ">
        <div onClick={() => setOpen1(!open1)} className="p-3 cursor-pointer">
          <p className="flex justify-between items-center font-bold">
            Personal Details{" "}
            <MdKeyboardArrowRight className="text-xl text-blue-600" />
          </p>
        </div>
        <hr />
        <div onClick={() => setOpen2(!open2)} className="p-3 cursor-pointer">
          <p className="flex justify-between items-center font-bold">
            Education Details{" "}
            <MdKeyboardArrowRight className="text-xl text-blue-600" />
          </p>
        </div>
        <hr />
        <div onClick={() => setOpen3(!open3)} className="p-3 cursor-pointer">
          <p className="flex justify-between items-center font-bold">
            Bank Details{" "}
            <MdKeyboardArrowRight className="text-xl text-blue-600" />
          </p>
        </div>
      </div>

      {open1 && (
        <PersonalDetails setOpen1={setOpen1} open1={open1} user={user} />
      )}
      {open2 && (
        <EducationDetails setOpen2={setOpen2} open2={open2} user={user} />
      )}
      {open3 && <BankDetails setOpen3={setOpen3} open3={open3} user={user} />}

      {/* lock screen */}

      {/* <div className=" m-5 rounded-2xl bg-white  ">
        <div className="p-3 flex justify-between">
          <p className="flex items-center gap-3 font-bold text-zinc-500">
            <CiLock className="text-xl" /> Enable Lock Screen{" "}
          </p>
          <div className="bg-gray-200 flex justify-center items-center rounded-xl">
            <Switch
              className=""
              height={20}
              width={40}
              onColor={"#FF0000"}
              onChange={setChecked}
              uncheckedIcon={false}
              checked={checked}
            />
          </div>
        </div>
      </div> */}

      {/* password */}

      <div className=" m-5 rounded-2xl bg-white  text-blue-600 ">
        <div onClick={() => setOpen4(!open4)} className="p-3 ">
          <p className="flex justify-between items-center font-bold">
            <div className="flex items-center gap-2 ">
              <CiLock className="text-xl" /> Change Password
            </div>
            <MdKeyboardArrowRight className="text-xl text-blue-600" />
          </p>
        </div>
        <hr />
        {/* <div className="p-3 ">
          <p className="flex justify-between items-center font-bold">
            <div className="flex items-center gap-2 ">
              <IoLanguageOutline className="text-xl" /> Select Language
            </div>
            <MdKeyboardArrowRight className="text-xl text-blue-600" />
          </p>
        </div>
        <hr /> */}
        {/* <div className="p-3 ">
          <p className="flex justify-between items-center font-bold">
            <div className="flex items-center gap-2 ">
              <IoColorPaletteOutline className="text-xl" />
              Appearance
            </div>

            <MdKeyboardArrowRight className="text-xl text-blue-600" />
          </p>
        </div> */}
      </div>
      {open4 && <ChangePassword setOpen4={setOpen4} />}

      {/* Documents */}

      {/* <div className=" m-5 rounded-2xl bg-white  ">
        <div className="p-3 flex justify-between">
          <p className="flex items-center gap-3 font-bold text-zinc-500">
            <GrDocumentText className="text-xl" /> Documents{" "}
          </p>

          <MdKeyboardArrowRight className="text-xl text-blue-600" />
        </div>
      </div> */}
      {/* Logout */}

      <div
        onClick={() => setOpen8(!open8)}
        className=" m-5 rounded-2xl bg-white cursor-pointer "
      >
        <div className="p-3 flex justify-between">
          <p className="flex items-center gap-3 font-bold text-[#FF0000]">
            <AiOutlineLogout className="text-xl" /> Logout{" "}
          </p>

          <MdKeyboardArrowRight className="text-xl text-blue-600" />
        </div>
      </div>
      {open8 && <LogoutModal setOpen8={setOpen8} />}

      <div className="mx-6 text-blue-600 font-bold">v1.0.0 02-11-2024</div>
    </div>
  );
};

export default Profile;
