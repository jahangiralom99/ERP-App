import { Link } from "react-router-dom";

const CancelButton = ({ path }) => {
  return (
    <Link
      to={path}
      className="border-[1px] bg-black text-white rounded-xl w-full"
    >
      <button className=" p-3  w-full">
        Cancel
      </button>
    </Link>
  );
};

export default CancelButton;
