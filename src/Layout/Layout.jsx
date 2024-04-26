import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import { Toaster } from "react-hot-toast";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Toaster />
    </div>
  );
};

export default Layout;
