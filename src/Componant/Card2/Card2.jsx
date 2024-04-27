import axios from "axios";
import { useContext } from "react";
import { AuthContexts } from "../../Context/AuthContext";
import toast from "react-hot-toast";

const Card2 = ({post}) => {

    const {postUpdate, setPostUpdate} = useContext(AuthContexts)

    const handleDelete = () => {
        axios.delete(`http://localhost:5000/mylists/delete/${post._id}`)
        .then(() => {
            toast.success("Post Deleted Successfully")
            setPostUpdate(!postUpdate)
        })
        .catch(error => {
            console.error('Error deleting:', error);
        });
    }

    console.log(post);
    return (
        <div className="border p-4 my-2 flex justify-between">
            <div className="flex gap-2">
            <div>
                <img src={post.image} className="w-14 h-14" alt="" />
            </div>
            <div>
            <h2>{post.tourists_spot_name}</h2>
            <h3>{post.country_name}</h3>
            </div>
        </div>
        <div className="*:py-1 *:px-2 *:bg-blue-400 text-gray-100 *:rounded">
            <button className="mr-2">Update</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
        </div>
    );
};

export default Card2;