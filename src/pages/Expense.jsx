import { BsFilterLeft } from "react-icons/bs";
import SubHeading from "../components/SubHeading";
import SubHeadingToggle from "../components/SubHeadingToggle";
import BottomFilter from "../components/BottomFilter";
import PendingExpense from "../components/PendingExpense";
import ExpenseHistory from "../components/ExpenseHistory";
import PlusButton from "../components/PlusButton";
import { useState } from "react";
import { Link } from "react-router-dom";
import CommonBackButton from "../components/Button/CommonBackButton";

const Expense = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(true);
  const [year, setYear] = useState("Select Year");
  const [month, setMonth] = useState("Select Month");
  const [startDate, setStartDate] = useState(new Date());

  const handleCalendarClick = () => {
    setOpen4((prev) => !prev);
  };

  return (
    <div className="text-black text-sm mt-28">
      <SubHeading
        title="My Expenses"
        icon={<BsFilterLeft onClick={() => setOpen(!open)} />}
      />

      <div className="flex justify-center bg-white">
        <SubHeadingToggle
          setonclick1={setOpen6}
          setonclick2={setOpen1}
          titile1={"Pending Expense"}
          titile2={"Expense History"}
        />
      </div>

      {open && (
        <BottomFilter
          title={"Filter Orders"}
          setonclick1={setOpen}
          onclick1={open}
        />
      )}
      {open6 && <PendingExpense />}
      {open1 && <ExpenseHistory />}

      {/* plus button */}
      <Link to="/applyexpense">
        <PlusButton />
      </Link>
    </div>
  );
};

export default Expense;
