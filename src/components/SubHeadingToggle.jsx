const SubHeadingToggle = ({ setonclick1, setonclick2, titile1, titile2 }) => {
  return (
    <div className="flex justify-center bg-white">
      <button
        onClick={() => {
          setonclick1(true);
          setonclick2(false);
        }}
        className="p-3 border rounded-l-2xl bg-gray-100 mb-2 font-bold text-slate-500 focus:border-blue-600 focus:text-blue-500 focus:bg-white"
      >
        {/* Pending Expense */}
        {titile1}
      </button>
      <button
        onClick={() => {
          setonclick2(true);
          setonclick1(false);
        }}
        className="p-3 border rounded-r-2xl bg-gray-100 mb-2 font-bold text-slate-500 focus:border-blue-600 focus:text-blue-500 focus:bg-white"
      >
        {/* Expense History */}
        {titile2}
      </button>
    </div>
  );
};

export default SubHeadingToggle;
