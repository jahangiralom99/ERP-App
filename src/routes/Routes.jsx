
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Root from "./Root";
import Login from "../pages/Login";
import Orders from "../pages/Orders";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/orders",
            element: <Orders/>
        },
        {
            path: "/login",
            element: <Login/>
        }
      ]
    },
  ]);