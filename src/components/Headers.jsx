import { FaRegBell } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/ionic-erp-logo.png";

const Headers = () => {
  return (
    <div className="fixed top-0 left-0 right-0  z-50">
      <div className="flex justify-between items-center h-14 w-full bg-white px-5 ">
        <Link to="/">
          <p className="flex items-center gap-1">
            <img className="w-20 h-8" src={logo} alt="" />
            <p className="font-bold">IONIC ERP</p>
          </p>
        </Link>
        <p>
          <div className="text-xl text-[#FF0000] ">
            <FaRegBell />
          </div>
        </p>
      </div>
      <hr />
    </div>
  );
};

export default Headers;
