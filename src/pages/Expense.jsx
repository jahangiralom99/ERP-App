import { BsFilterLeft } from "react-icons/bs";
import SubHeading from "../components/SubHeading";
import SubHeadingToggle from "../components/SubHeadingToggle";
import BottomFilter from "../components/BottomFilter";
import PendingExpense from "../components/PendingExpense";
import ExpenseHistory from "../components/ExpenseHistory";
import PlusButton from "../components/PlusButton";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CommonBackButton from "../components/Button/CommonBackButton";
import { getStoredCart } from "../utilities/function";
import MainLoader from "../components/Shared/MainLoader";

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

  // for data fetching
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const { url } = getStoredCart("login-info");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://erp-backend-xkze.vercel.app/getall?erp_url=${url}&doctype_name=Expense Claim`,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const result = await response.json();
        setData(result?.data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  if (loading) {
    return <MainLoader />;
  }

  // console.log(data);

  const handleCalendarClick = () => {
    setOpen4((prev) => !prev);
  };

  return (
    <div className="text-black text-sm mt-28">
      <SubHeading
        title="Back"
        icon={<BsFilterLeft onClick={() => setOpen(!open)} />}
      />

      <div className="flex justify-center bg-white">
        <SubHeadingToggle
          setonclick1={setOpen6}
          setonclick2={setOpen1}
          open1={open1}
          open6={open6}
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
      {open6 && <PendingExpense data={data} />}
      {open1 && <ExpenseHistory />}

      {/* plus button */}
      <Link to="/applyexpense">
        <PlusButton />
      </Link>
    </div>
  );
};

export default Expense;
