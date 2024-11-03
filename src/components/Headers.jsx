import { FaRegBell } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../assets/ionic-erp-logo.png";
import avatar from "../assets/avater.jpg";
import { getStoredCart } from "../utilities/function";

const Headers = () => {
  const { data, url } = getStoredCart("login-info");
  // email decode URL
  // const slic = data?.full_name.split("%");
  // console.log(slic);
  const email = decodeURIComponent(data?.full_name.slice(0, 12));

  // console.log(data);

  return (
    <div className="fixed top-0 left-0 right-0  z-50">
      <div className="flex justify-between items-center h-14 w-full bg-white px-5 ">
        <Link to="/">
          <p className="flex items-center gap-1">
            <img className="w-28 h-10" src={logo} alt="" />
            {/* <p className="font-bold">IONIC ERP</p> */}
          </p>
        </Link>
        <div className="flex items-center justify-center gap-4">
          <div className="text-xl text-[#FF0000] ">
            <FaRegBell className="text-xl" />
          </div>
          <div className="">
            {/* <Marquee>{email}</Marquee> */}
            <h4>{email}..</h4>
          </div>
          <div className="">
            <Link to="/profile" className="w-9 rounded-full">
              <img
                className="w-9 rounded-full h-9"
                src={data?.user_image ? url + data?.user_image : avatar}
              />
            </Link>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Headers;
