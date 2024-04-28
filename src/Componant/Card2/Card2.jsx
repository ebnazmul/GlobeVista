import axios from "axios";
import { useContext, useState } from "react";
import { AuthContexts } from "../../Context/AuthContext";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Card2 = ({post}) => {

    const {postUpdate, setPostUpdate} = useContext(AuthContexts)

    const [deletePrompt, setDeletePrompt] = useState(false);

    const deletePost = () => {
        axios.delete(`https://glovevista-server.vercel.app/mylists/delete/${post._id}`)
        .then(() => {
            toast.success("Post Deleted Successfully")
            setPostUpdate(!postUpdate)
        })
        .catch(error => {
            console.error('Error deleting:', error);
        });
    }


    

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
        <div className={`py-3 px-4 border ${ !deletePrompt && 'hidden'}`}>
            <h4 className="mb-2">Are you sure to delete it?</h4>
            <div>
                <button onClick={deletePost} className="px-2 py-1 rounded bg-red-400 text-white mr-4">Yes</button>
                <button onClick={()=>setDeletePrompt(false)} className="px-2 py-1 rounded bg-gray-200">Cancel</button>
            </div>
        </div>
        <div className="*:py-1 *:px-2 *:bg-blue-400 text-gray-100 *:rounded">
            <button className="mr-2"><Link to={`/mylists/update/${post._id}`}>Update</Link></button>
            <button onClick={()=>setDeletePrompt(true)}>Delete</button>
        </div>
        </div>
    );
};

export default Card2;