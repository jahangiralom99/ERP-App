const SubHeadingToggle = ({
  setonclick1,
  setonclick2,
  titile1,
  titile2,
  open6,
  open1,
}) => {
  return (
    <div className="flex justify-center bg-white">
      <button
        onClick={() => {
          setonclick1(true);
          setonclick2(false);
        }}
        className={`p-3 border ${
          !open1 ? "border-[#FF0000] text-[#FF0000]" : ""
        } rounded-l-2xl bg-gray-100 mb-2 font-bold  `}
      >
        {/* Pending Expense */}
        {titile1}
      </button>
      <button
        onClick={() => {
          setonclick2(true);
          setonclick1(false);
        }}
        className={`p-3 ${
          !open6 ? "border-[#FF0000] text-[#FF0000]" : ""
        } border rounded-r-2xl bg-gray-100 mb-2 font-bold `}
      >
        {/* Expense History */}
        {titile2}
      </button>
    </div>
  );
};

export default SubHeadingToggle;
