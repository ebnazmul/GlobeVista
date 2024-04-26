import { Link } from "react-router-dom";
import Logo from "../Extra/Logo/Logo";
import { FaLock } from "react-icons/fa6";
import { useContext, useState } from "react";
import { AuthContexts } from "../Context/AuthContext";
import { IoLogOutSharp } from "react-icons/io5";
import { Tooltip } from "react-tooltip";

const Navbar = () => {
  const { user, setUser, signUserOut, loading } = useContext(AuthContexts);

  console.log(user?.photoURL);

  const profilePhoto = user?.photoURL || "https://cdn-icons-png.flaticon.com/128/2202/2202112.png";

  const handleSignOut = () => {
    signUserOut().then(() => {
      setUser(null);
    });
  };

  const [isSignInDropDown, setIsSignDropDown] = useState(false);

  

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
            <li>All Tourists Spot</li>
            {user && (
              <Link to="/addtouristspot">
                <li>Add Tourists Spot</li>
              </Link>
            )}
            {user && <li>My List</li>}
          </ul>
        </div>

        {user ? (
          <div className="flex items-center gap-2">
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
          <div className="relative">
            <button
              onClick={() => setIsSignDropDown(!isSignInDropDown)}
              className="bg-gray-300 hover:bg-gray-300/80 py-2 px-4 rounded flex items-center gap-2">
              <FaLock />
              Sign In
            </button>
            {isSignInDropDown && (
              <div className="absolute text-white w-28 text-center *:cursor-pointer hover:*:bg-gray-800">
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
