import axios from "axios";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AuthContexts } from "../../Context/AuthContext";

const AddTouristSpot = () => {
  const { user, postUpdate, setPostUpdate } = useContext(AuthContexts);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const newData = { ...data, email: user.email };

    console.log(newData);

    axios.post("https://glovevista-server.vercel.app/newpost", newData)
      .then((res) => {
        if (res?.data.insertedId) {
          toast.success("New Post Added");
          setPostUpdate(!postUpdate)
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="my-5">
        <h2 className="text-xl text-center">Add a new tourist place</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <p className="mb-2">Image URL</p>
            <input
              {...register("image")}
              className="w-full border outline-none rounded py-1 px-2 mb-2"
              type="text"
              placeholder="Enter image URL"
              autoFocus
            />
          </div>
          <div>
            <p className="mb-2">Toursists Spot Name</p>
            <input
              {...register("tourists_spot_name")}
              className="w-full border outline-none rounded py-1 px-2 mb-2"
              type="text"
              placeholder="Enter Toursists Spot Name"
            />
          </div>
          <div>
            <p className="mb-2">Country Name</p>
            <select {...register("country_name")} placeholder="Enter Country Name" className="border py-1 w-full mb-2" defaultValue={"Select a country"}>
              <option>Bangladesh</option>
              <option>Thailand</option>
              <option>Indonesia</option>
              <option>Malaysia</option>
              <option>Vietnam</option>
              <option>Cambodia</option>
            </select>
          </div>
          <div>
            <p className="mb-2">Location</p>
            <input
              {...register("location")}
              className="w-full border outline-none rounded py-1 px-2 mb-2"
              type="text"
              placeholder="Enter Location"
            />
          </div>
          <div>
            <p className="mb-2">Short Description</p>
            <input
              {...register("short_description")}
              className="w-full border outline-none rounded py-1 px-2 mb-2"
              type="text"
              placeholder="Enter Short Description"
            />
          </div>
          <div>
            <p className="mb-2">Avarage Cost</p>
            <input
              {...register("average_cost")}
              className="w-full border outline-none rounded py-1 px-2 mb-2"
              type="text"
              placeholder="Enter Avarage Cost"
            />
          </div>
          <div>
            <p className="mb-2">Seasonality</p>
            <input
              {...register("seasonality")}
              className="w-full border outline-none rounded py-1 px-2 mb-2"
              type="text"
              placeholder="(summer, winter)"
            />
          </div>
          <div>
            <p className="mb-2">Travel Time</p>
            <input
              {...register("travel_time")}
              className="w-full border outline-none rounded py-1 px-2 mb-2"
              type="text"
              placeholder="Travel Time (example 7)"
            />
          </div>
          <div>
            <p className="mb-2">Total Visitor Per Year</p>
            <input
              {...register("total_visitor_per_year")}
              className="w-full border outline-none rounded py-1 px-2 mb-2"
              type="text"
              placeholder="Total Visitor Per Year"
            />
          </div>
          <button
            className="w-full mt-2 bg-gray-300 px-2 py-1 rounded"
            type="submit">
            Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTouristSpot;
