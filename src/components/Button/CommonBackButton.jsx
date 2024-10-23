import { IoMdArrowBack } from "react-icons/io";

const CommonBackButton = ({ value , className}) => {
  return (
    <div className={`flex items-center gap-4 bg-gradient-to-r from-black to-[#FF0000] text-white px-4 rounded-lg ${className}`}>
      <div>
        <IoMdArrowBack className="text-lg" />
      </div>
      <p className=" font-medium">{value}</p>
    </div>
  );
};

export default CommonBackButton;
