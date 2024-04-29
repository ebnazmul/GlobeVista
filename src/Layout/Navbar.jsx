import { Link, NavLink } from "react-router-dom";
import Logo from "../Extra/Logo/Logo";
import { FaLock } from "react-icons/fa6";
import { useContext, useEffect, useState } from "react";
import { AuthContexts } from "../Context/AuthContext";
import { IoLogOutSharp } from "react-icons/io5";
import { Tooltip } from "react-tooltip";
import { MdMenu } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const { user, signUserOut, loading } = useContext(AuthContexts);
  const [isSignInDropDown, setIsSignDropDown] = useState(false);
  const [theme, setTheme] = useState(true);
  const [dropdownState, setDropdownState] = useState(true);

 

  const handleSignOut = () => {
    signUserOut();
  };

  const handleTheme = () => {
    setTheme(!theme);
    console.log(theme);
  };

  useEffect(() => {
    if (!theme) {
      document.querySelector("html").setAttribute("data-theme", "dark");
    } else {
      document.querySelector("html").setAttribute("data-theme", "light");
    }
  }, [theme]);

  // console.log(user?.photoURL);

  if(loading){
    return <div></div>
  }

  return (
    <div className="bg-stone-500">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/">
          <Logo />
        </Link>
        <div className="lg:flex gap-4 hidden">
          <ul className="flex hover:*:bg-white/10 *:px-3 *:py-4 *:rounded hover:*:border-b text-xl text-white items-center">
            <NavLink
              className={({ isActive }) => (isActive ? "bg-white/10" : "")}
              to="/">
              <li>Home</li>
            </NavLink>

            <NavLink
              className={({ isActive }) => (isActive ? "bg-white/10" : "")}
              to="/alltouristspot">
              <li>All Tourists Spot</li>
            </NavLink>
            {user && (
              <NavLink
                className={({ isActive }) => (isActive ? "bg-white/10" : "")}
                to="/addtouristspot">
                <li>Add Tourists Spot</li>
              </NavLink>
            )}
            {user && (
              <NavLink
                className={({ isActive }) => (isActive ? "bg-white/10" : "")}
                to="/mylists">
                <li>My List</li>
              </NavLink>
            )}
          </ul>
        </div>


        {user ? (
          <div className="flex items-center gap-2">
            <input
              onChange={handleTheme}
              type="checkbox"
              value="synthwave"
              className="toggle theme-controller bg-amber-300 border-sky-400 [--tglbg:theme(colors.sky.500)] checked:bg-blue-300 checked:border-blue-800 checked:[--tglbg:theme(colors.blue.900)] row-start-1 col-start-1 col-span-2"
            />

            <div
             data-tooltip-id="tooltip"
             data-tooltip-content={user?.displayName || "No Name"}
             data-tooltip-place="top"
             className="h-14 w-14 rounded-full bg-blue-400">
            <img
              className="h-14 w-14 rounded-full"
              src={user.photoURL || "https://cdn-icons-png.flaticon.com/128/2202/2202112.png"}
            />
            </div>

            <button
              onClick={handleSignOut}
              data-tooltip-id="tooltip"
              data-tooltip-content="Logout"
              data-tooltip-place="top"
              className="text-2xl text-white">
              <IoLogOutSharp />
            </button>
          </div>
        ) : (
          <div className="relative  flex gap-2 items-center">
            <button
              onClick={() => setIsSignDropDown(!isSignInDropDown)}
              className="bg-gray-300 text-gray-800 hover:bg-gray-300/80 py-2 px-4 rounded flex items-center gap-2">
              <FaLock />
              Sign In
            </button>

            <input
              onChange={handleTheme}
              type="checkbox"
              value="synthwave"
              className="toggle theme-controller bg-amber-300 border-sky-400 [--tglbg:theme(colors.sky.500)] checked:bg-blue-300 checked:border-blue-800 checked:[--tglbg:theme(colors.blue.900)] row-start-1 col-start-1 col-span-2"
            />

            {isSignInDropDown && (
              <div className="absolute top-10 z-20 text-gray-100 w-28 text-center *:cursor-pointer hover:*:bg-gray-800">
                <Link to="/login">
                  <p
                    onClick={() => setIsSignDropDown(!isSignInDropDown)}
                    className="py-2 rounded bg-black border-b">
                    Login
                  </p>
                </Link>
                <Link to="/register">
                  <p
                    onClick={() => setIsSignDropDown(!isSignInDropDown)}
                    className="py-2 rounded bg-black">
                    Register
                  </p>
                </Link>
              </div>
            )}
          </div>
        )}
        <div className="relative lg:hidden">
          <div
            onClick={() => setDropdownState(!dropdownState)}
            className="text-3xl mr-2 text-white ">
            {dropdownState ? <MdMenu /> : <RxCross1 />}
          </div>
          {!dropdownState && (
            <div
              className="absolute right-3 top-12 px-3 py-2 z-30 bg-gray-300 w-40"
              onClick={() => setDropdownState(!false)}>
              <ul className="*:border *:border-black *:px-2 space-y-1">
                <li>
                  <Link to="/">
                    <li>Home</li>
                  </Link>
                </li>
                <li>
                  <Link to="/alltouristspot">
                    <li>All Tourists Spot</li>
                  </Link>
                </li>
                {user && (
                  <li>
                    <Link to="/addtouristspot">
                      <li>Add Tourists Spot</li>
                    </Link>
                  </li>
                )}
                {user && (
                  <li>
                    <Link to="/mylists">
                      <li>My List</li>
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>

      <Tooltip id="tooltip" place="top" />
    </div>
  );
};

export default Navbar;
