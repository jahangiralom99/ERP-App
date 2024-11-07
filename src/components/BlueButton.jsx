const BlueButton = ({ name, onClick }) => {
  return (
    <button onClick={onClick} className="border-[1px] p-2 bg-[#FF0000] text-white rounded-xl text-medium w-full">
      {name}
    </button>
  );
};

export default BlueButton;
