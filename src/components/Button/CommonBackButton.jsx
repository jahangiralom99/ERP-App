import { IoMdArrowBack } from "react-icons/io";

const CommonBackButton = ({ value , className}) => {
  return (
    <div className={`flex items-center gap-1 bg-[#FF0000] text-white px-[9px] py-[1px] rounded-lg border border-gray-400 ${className}`}>
      <div>
        <IoMdArrowBack className="text-lg" />
      </div>
      <p className=" font-medium">{value}</p>
    </div>
  );
};

export default CommonBackButton;
