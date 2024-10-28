import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import logo from "../assets/ionic-erp-logo.png";
import { FaRegBell } from "react-icons/fa";
import CheckIn from "../components/CheckIn";
// import Task from "../components/Task";
import LikeToDo from "../components/LikeToDo";
import Request from "../components/Request";
import LineProgress from "../components/LineProgress";

const Home = () => {
  return (
    <div className=" bg-gray-200 pb-12 ">
      {/* <div className="flex items-center justify-center ">
        <img className="h-[500px]" src={img1} alt="" />
        <img className="h-[500px]" src={img2} alt="" />
      </div> */}

      {/* header */}

      <div className="flex justify-between items-center h-14 w-full bg-white px-5">
        <p className="flex items-center gap-1">
          <img className="w-20 h-8" src={logo} alt="" />
          <p className="font-bold">IONIC ERP</p>
        </p>
        <p>
          <div className="text-xl text-[#FF0000] ">
            <FaRegBell />
          </div>
        </p>
      </div>

      <CheckIn />
      {/* <Task/> */}
      <LikeToDo />
      {/* <Request/> */}

      {/* <LineProgress/> */}

      <div className="fixed bottom-0 left-0 right-0 flex justify-center ">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
