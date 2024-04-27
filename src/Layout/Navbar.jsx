import { Link } from "react-router-dom";
import Logo from "../Extra/Logo/Logo";
import { FaLock } from "react-icons/fa6";
import { useContext, useEffect, useState } from "react";
import { AuthContexts } from "../Context/AuthContext";
import { IoLogOutSharp } from "react-icons/io5";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const { user, setUser, signUserOut } = useContext(AuthContexts);
  const [isSignInDropDown, setIsSignDropDown] = useState(false);
  const [theme, setTheme] = useState(true)


  const profilePhoto = user?.photoURL || "https://cdn-icons-png.flaticon.com/128/2202/2202112.png";

  const handleSignOut = () => {
    signUserOut().then(() => {
      setUser(null);
    });
  };


  const handleTheme = () => {
    setTheme(!theme)
    console.log(theme);
  }

  useEffect(()=>{
    if(!theme){
      document.querySelector('html').setAttribute('data-theme', 'dark')
    }
    else{
      document.querySelector('html').setAttribute('data-theme', 'light')
    }
  },[theme])

  return (
    <div className="bg-stone-500">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/">
          <Logo />
        </Link>
        <div className="flex gap-4">
          <ul className="flex hover:*:bg-white/10 *:px-3 *:py-4 hover:*:rounded hover:*:border-b text-xl text-white items-center">
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/alltouristspot"><li>All Tourists Spot</li></Link>
            {user && (
              <Link to="/addtouristspot">
                <li>Add Tourists Spot</li>
              </Link>
            )}
            {user && <Link to="/mylists"><li>My List</li></Link>}
          </ul>
        </div>

        {user ? (
          <div className="flex items-center gap-2">

            <input onChange={handleTheme} type="checkbox" value="synthwave" className="toggle theme-controller bg-amber-300 border-sky-400 [--tglbg:theme(colors.sky.500)] checked:bg-blue-300 checked:border-blue-800 checked:[--tglbg:theme(colors.blue.900)] row-start-1 col-start-1 col-span-2"/>

            <img
              data-tooltip-id="tooltip"
              data-tooltip-content={user?.displayName || "No Name"}
              data-tooltip-place="top"
              className="h-14 rounded-full"
              src={profilePhoto}
              alt=""
            />

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

            <input onChange={handleTheme} type="checkbox" value="synthwave" className="toggle theme-controller bg-amber-300 border-sky-400 [--tglbg:theme(colors.sky.500)] checked:bg-blue-300 checked:border-blue-800 checked:[--tglbg:theme(colors.blue.900)] row-start-1 col-start-1 col-span-2"/>

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
      </div>
      <Tooltip id="tooltip" place="top" />
    </div>
  );
};

export default Navbar;
