import axios from "axios";
import { useEffect, useState } from "react";
import Card2 from "../../Componant/Card2/Card2";


const MyList = () => {

    const [data, setData] = useState([])

    useEffect(()=>{
        axios.post('http://localhost:5000/mylists', {email: 'elitebucksco@gmail.com'})
        .then(res=>setData(res.data))
        .catch(res=>console.log(res))
    },[])

    // console.log(data);

    if(data.length<1){
        return (<div className="flex justify-center items-center h-[45vh]">
            <div><h2 className="text-2xl">No data available!</h2></div>
        </div>)
    }

    return (
        <div className="max-w-6xl mx-auto">
            {
                data.map((post)=> <Card2 post={post} key={post._id}></Card2>)
            }

        </div>
    );
};

export default MyList;
