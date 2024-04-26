import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddTouristSpot from "../Pages/AddToursitSopt/AddTouristSpot";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register/>
      },
      {
        path: "addtouristspot",
        element: <PrivateRoute><AddTouristSpot/></PrivateRoute>
      }
    ],
  },
]);

export default router;
