import { Link } from "react-router-dom";
import Logo from "../Extra/Logo/Logo";
import { FaLock } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="bg-stone-500">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/"><Logo/></Link>
        <div className="flex gap-4">
            <ul className="flex hover:*:bg-white/10 *:px-3 *:py-4 hover:*:rounded hover:*:border-b text-xl text-white items-center">
                <li>Home</li>
                <li>All Tourists Spot</li>
                {/* <li>Countries</li>
                <li>Tours</li> */}
            </ul>
        </div>
        <button className="bg-gray-300 py-2 px-4 rounded flex items-center gap-2"><FaLock/>Sign In</button>
      </div>
    </div>
  );
};

export default Navbar;
