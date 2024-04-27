import { useContext } from "react";
import { AuthContexts } from "../../Context/AuthContext";
import Card from "../../Componant/Card/Card";

const AllTouristSpots = () => {

    const {posts} = useContext(AuthContexts);


    return (
        <div className="max-w-7xl mx-auto grid grid-cols-3 gap-4 my-10">
            {
                posts.map((post)=> <Card key={post._id} post={post}></Card>)
            }
        </div>
    );
};

export default AllTouristSpots;