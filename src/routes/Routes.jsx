
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Root from "./Root";
import Login from "../pages/Login";

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
            path: "/login",
            element: <Login/>
        }
      ]
    },
  ]);