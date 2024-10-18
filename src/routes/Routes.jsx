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
        element: <Orders />
      },
      {
        path: "/createorders",
        element: <CreateOrder />,
      },
      {
        path: "/details/:name",
        element: <OdrerDetails />,
      },
      {
        path: "/login",
        element: <Login />,
      },
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
    ],
  },
]);
