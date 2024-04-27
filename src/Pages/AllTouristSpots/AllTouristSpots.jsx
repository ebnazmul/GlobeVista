import { useContext } from "react";
import { AuthContexts } from "../../Context/AuthContext";
import Card from "../../Componant/Card/Card";
import { Link } from "react-router-dom";

const AllTouristSpots = () => {

    const {posts} = useContext(AuthContexts);

    

    return (
        <div className="max-w-7xl mx-auto grid grid-cols-3 gap-4 my-10">
            {
                posts.map((post)=> <Link to={`/details/${post._id}`} key={post._id}><Card key={post._id} post={post}></Card></Link>)
            }
        </div>
    );
};

export default AllTouristSpots;