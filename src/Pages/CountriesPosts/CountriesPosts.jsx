import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Card from "../../Componant/Card/Card";


const CountriesPosts = () => {

   const {name} = useParams()
   const [data, setData] = useState([])

   useEffect(()=>{
    axios.get(`http://localhost:5000/country/${name}`)
    .then(res=>setData(res.data))
    .catch(err=> console.log(err))
   },[name])
   

    return (
        <div className="max-w-6xl mx-auto grid gap-4 grid-cols-1 md:grid-cols-2 my-10 lg:col-cols-3">
            {
                data.map((card)=> <Link to={`/details/${card._id}`} key={card._id}><Card post={card}/></Link>)
            }
        </div>
    );
};

export default CountriesPosts;