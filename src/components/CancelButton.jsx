import { Link } from "react-router-dom";

const CancelButton = ({ path }) => {
  return (
    <Link
      to={path}
      className="border-[1px] border-zinc-400 text-zinc-600  rounded-xl w-full"
    >
      <button className=" border-zinc-400 text-zinc-600 p-3  rounded-xl w-full">
        Cancel
      </button>
    </Link>
  );
};

export default CancelButton;
