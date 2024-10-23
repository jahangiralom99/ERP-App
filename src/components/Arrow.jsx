import { RiArrowDropDownLine, RiArrowDropRightLine } from "react-icons/ri";

const Arrow = () => {
  return (
    <div onClick={() => setonclick(!onclick)}>
      {onclick ? (
        <RiArrowDropDownLine className="text-3xl ml- text-[#FF0000]" />
      ) : (
        <RiArrowDropRightLine className="text-3xl ml- text-[#FF0000]" />
      )}
    </div>
  );
};

export default Arrow;
