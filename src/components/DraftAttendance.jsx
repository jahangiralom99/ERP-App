import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import SubHeading from "./SubHeading";

const DraftAttendance = ({ setOpen3 }) => {
  return (
    <div className="h-screen fixed top-0 mt-20 bg-gray-200 w-full z-20">
      <SubHeading title="Back" />
      <div className="flex justify-center items-center h-screen ">
        <p className="bg-white p-8 w-72 h-40 rounded-2xl flex justify-center items-center text-xl text-center font-bold">
          No Data available right now 
        </p>
      </div>
    </div>
  );
};

export default DraftAttendance;
