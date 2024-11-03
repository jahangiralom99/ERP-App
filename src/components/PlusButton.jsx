import { FaPlus } from "react-icons/fa";

const PlusButton = () => {
  return (
    <div
        className="border-[1px] p-4 w-14 h-14 rounded-lg font-medium text-sm text-white flex justify-center items-center fixed bottom-12 right-3 border-[#FF0000]"
        style={{
          background: "radial-gradient(circle, black 30%, black 50%)",
        }}
      >
        <FaPlus className="text-[20px] font-bold" />
      </div>
  );
};

export default PlusButton;
