import { TfiLineDouble } from "react-icons/tfi";

const MonthModal = ({ setOpen2, setMonth }) => {
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <div className="fixed bottom-0 left-0 right-0  top-72 rounded-t-2xl bg-slate-100">
      <div className="flex justify-between pl-10 font-bold p-3 text">
        <div></div>
        <TfiLineDouble /> <p onClick={() => setMonth("Select Month")}>Reset</p>
      </div>

      <div className="overflow-y-scroll bg-white p-3 max-h-[300px]">
        {month.map((item, index) => {
          return (
            <div key={index}>
              <p
                onClick={() => {
                  setMonth(item);
                  setOpen2(false);
                }}
                className="py-3 font-semibold"
              >
                {item}
              </p>
              <hr />
            </div>
          );
        })}
        {/* <p className='py-3 font-semibold'>February</p>
                <hr />
                <p className='py-3 font-semibold'>March</p>
                <hr />
                <p className='py-3 font-semibold'>April</p>
                <hr />
                <p className='py-3 font-semibold'>May</p>
                <hr />
                <p className='py-3 font-semibold'>June</p>
                <hr />
                <p className='py-3 font-semibold'>July</p>
                <hr />
                <p className='py-3 font-semibold'>August</p>
                <hr />
                <p className='py-3 font-semibold'>September</p>
                <hr />
                <p className='py-3 font-semibold'>October</p>
                <hr />
                <p className='py-3 font-semibold'>November</p>
                <hr />
                <p className='py-3 font-semibold'>December</p> */}
        <hr />
      </div>
    </div>
  );
};

export default MonthModal;
