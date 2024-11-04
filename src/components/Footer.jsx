import { CiCirclePlus } from "react-icons/ci";
import { FaRegUser, FaTasks } from "react-icons/fa";
import { RiHome2Line, RiNewsLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { getStoredCart } from "../utilities/function";
import { RxCrossCircled } from "react-icons/rx";
import { useState } from "react";
import ButtonFooter from "./ButtonFooter";

const Footer = () => {
  const { url } = getStoredCart("login-info");
  const [open, setOpen] = useState(false);
  // console.log(url);

  return (
    <>
      <div className="flex justify-between items-center h-12 w-full bg-[#FF0000] fixed bottom-0 left-0 right-0 max-w-screen-sm mx-auto">
        <div className="flex justify-evenly items-center w-full ">
          <Link to="/">
            <RiHome2Line className="text-xl text-white" />
          </Link>

          <FaTasks className="text-xl text-white" />
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-5xl relative h-10 w-20"
        >
          {open ? (
            <RxCrossCircled className="absolute text-white bottom-[14px] text-4xl rounded-full" />
          ) : (
            <CiCirclePlus className="absolute bottom-[20px] text-[50px] bg-[#FF0000] text-white rounded-full" />
          )}
        </div>
        <div className="flex justify-evenly items-center w-full ">
          <RiNewsLine className="text-xl text-white" />
          <Link to="/profile">
            <FaRegUser className="text-xl text-white" />
          </Link>
        </div>
      </div>
      {open && <ButtonFooter setOpen={setOpen} />}
    </>
  );
};

export default Footer;
