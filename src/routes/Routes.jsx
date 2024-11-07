import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Root from "./Root";
import Login from "../pages/Login";
import Orders from "../pages/Orders";
import CreateOrder from "../pages/CreateOrder";
import OdrerDetails from "../pages/OdrerDetails";
import SelectItems from "../pages/SelectItems";
import MarkAttendence from "../pages/MarkAttendence";
import Profile from "../pages/Profile";
import PrivetRoute from "./PrivetRoute";
import Expense from "../pages/Expense";
import ExpenseClaim from "../components/ExpenseClaim";
import ExpenseClaimHistory from "../components/ExpenseClaimHistory";
import ApplyExpense from "../components/ApplyExpense";
import UpdateExpense from "../components/UpdateExpense";
import Leave from "../pages/Leave";
import NewLeaveRequest from "../pages/NewLeaveRequest";
import Attendance from "../pages/Attendance";
import DraftAttendance from "../components/DraftAttendance";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: (
          <PrivetRoute>
            <Home />
          </PrivetRoute>
        ),
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/createorders",
        element: <CreateOrder />,
      },
      {
        path: "/details/:name",
        element: <OdrerDetails />,
      },
      // {
      //   path: "/login",
      //   element: <Login />,
      // },
      {
        path: "/profile",
        element: <Profile />,
      },
      // {
      //     path: "/selectitems",
      //     element: <SelectItems/>
      // },
      {
        path: "/markattendence",
        element: <MarkAttendence />,
      },
      // expense
      {
        path: "/expense",
        element: <Expense />,
      },
      {
        path: "/expenseclaim/:name",
        element: <ExpenseClaim />,
      },
      {
        path: "/expenseclaimhistory",
        element: <ExpenseClaimHistory />,
      },
      {
        path: "/applyexpense",
        element: <ApplyExpense />,
      },
      {
        path: "/updateexpense",
        element: <UpdateExpense />,
      },
      // leave
      {
        path: "/leave",
        element: <Leave />,
      },
      {
        path: "/newleaverequest",
        element: <NewLeaveRequest />,
      },
      // Attendance
      {
        path: "/attendance",
        element: <Attendance />,
      },
      {
        path: "/draftattendance",
        element: <DraftAttendance />,
      },
    ],
  },
  // if login redirects to home page
  {
    path: "/login",
    element: <Login />,
  },
]);
