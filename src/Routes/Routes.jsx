import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AddTouristSpot from "../Pages/AddToursitSopt/AddTouristSpot";
import PrivateRoute from "./PrivateRoute";
import Home from "../Pages/Home/Home";
import Error from "../Pages/Error/Error";
import Details from "../Pages/Details/Details";
import MyList from "../Pages/MyList/MyList";
import AllTouristSpots from "../Pages/AllTouristSpots/AllTouristSpots";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error/>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "addtouristspot",
        element: (
          <PrivateRoute>
            <AddTouristSpot />
          </PrivateRoute>
        ),
      },
      {
        path: "details/:id",
        element: <Details/>
      },
      {
        path: "mylists",
        element: <MyList/>
      },
      {
        path: "alltouristspot",
        element: <AllTouristSpots/>
      }
    ],
  },
]);

export default router;
