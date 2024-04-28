import { useContext } from "react";
import { AuthContexts } from "../../Context/AuthContext";
import Card from "../../Componant/Card/Card";
import { Link } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const AllTouristSpots = () => {
  const { posts, setPosts } = useContext(AuthContexts);

  const handleSort = () => {
    axios
      .get("https://glovevista-server.vercel.app/allposts/sort")
      .then((res) => setPosts(res.data))
      .catch(() => toast.error("Something went wrong"));
  };

  return (
    <div>
      <div className="w-60 mx-auto my-4 text-center ">
        <h4 className="font-bold text-lg">Sort</h4>
        <select className="border py-1 mr-2" name="" id="">
          <option value="">Avarage Cost</option>
        </select>
        <button
          onClick={handleSort}
          className="bg-blue-400 text-white hover:bg-blue-400/80 px-2 py-1 rounded">
          Submit
        </button>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-3 gap-4 my-10">
        {posts.map((post) => (
          <Link to={`/details/${post._id}`} key={post._id}>
            <Card key={post._id} post={post}></Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllTouristSpots;
