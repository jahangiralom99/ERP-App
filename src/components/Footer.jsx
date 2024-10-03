import { CiCirclePlus } from "react-icons/ci";
import { FaRegUser, FaTasks } from "react-icons/fa";
import { RiHome2Line, RiNewsLine } from "react-icons/ri";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div className="flex justify-between items-center h-10 w-full bg-white">
            <div className="flex justify-evenly items-center w-full ">

            <RiHome2Line className="text-2xl"/>
            <FaTasks className="text-2xl"/>
            </div>
            <div className="text-5xl relative h-10 w-20 ">
            <CiCirclePlus className="absolute bottom-[15px] bg-white rounded-full
            
            " />
            </div>
            <div className="flex justify-evenly items-center w-full ">

            <RiNewsLine className="text-2xl"/>
            <Link to='/profile'>
            <FaRegUser className="text-2xl"/>
            </Link>
            </div>
        </div>
    );
};

export default Footer;