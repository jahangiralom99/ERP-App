const BlueButton = ({name}) => {
  return (
    <button className="border-[1px] p-3 bg-gradient-to-r from-blue-600 to-blue-950 text-white rounded-xl text-medium w-full">
      {name}
    </button>
  );
};

export default BlueButton;
