import { IoMdArrowBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

const SubHeading = ({ title, icon, icon2, path }) => {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);

  return (
    <div className="flex justify-between left-0 items-center h-14 w-full bg-white px-6 fixed top-14 z-30">
      <Link
        onClick={goBack}
        to={path}
        className="flex items-center gap-4 bg-gradient-to-r from-black to-[#FF0000] text-white px-4 py-1 rounded"
      >
        <div>
          <IoMdArrowBack className="text-lg text-white" />
        </div>
        <p className=" font-bold text-[16px]">{title}</p>
      </Link>

      {/* icons */}
      <div
        className={`${
          icon || icon2
            ? "flex items-center justify-center gap-2 border border-black bg-[#FF0000] text-white"
            : ""
        }`}
      >
        {icon && <div className="text-2xl ">{icon}</div>}
        {icon2 && <div className="text-2xl text-[#FF0000]">{icon2}</div>}
      </div>
    </div>
  );
};

export default SubHeading;
