import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Details = () => {
  const { id } = useParams();

  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(`https://glovevista-server.vercel.app/post/${id}`)
      .then((res) => setData(res.data));
  }, [id]);

  const { image } = data;

  return (
    <div className="my-4">
      <div className="max-w-6xl mx-auto">
        <img src={image} className="h-72 w-full bg-cover" />
      </div>
      <div className="max-w-6xl mx-auto mt-4 border p-4">
        <div>
          <h2 className="text-3xl">{data.tourists_spot_name}</h2>
          <p className="mt-2">{data.short_description}</p>
        </div>
        <div>
          <button className="px-2 py-1 bg-gray-400 rounded mt-4 mr-2">
            {data.country_name}
          </button>
          <button className="px-2 py-1 bg-gray-400 rounded mt-4 mr-2">
            {data.location}
          </button>
        </div>
        <div>
          <h4 className="my-4">
            More then {data.total_visitor_per_year} visitor visit{" "}
            {data.tourists_spot_name} every year and best time to visit{" "}
            {data.tourists_spot_name} is {data.seasonality}
          </h4>
        </div>
        <div className="bg-sky-200 p-1 w-fit rounded">
          <h3 className="text-xl">
            Our Travel Plan of {data.tourists_spot_name} is only{" "}
            {data.average_cost} ({data.travel_time})
          </h3>
        </div>
        <div>
          <button className="w-full mt-4 rounded bg-sky-400 py-3 text-xl hover:bg-sky-400/80">
            Book Today!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
