const Card = ({ post }) => {
  const {
    image,
    tourists_spot_name,
    country_name,
    average_cost,
    travel_time,
  } = post;

  return (
    <div className="h-80 w-96 bg-gray-600 text-white rounded">
      <div
        className="h-44 w-full bg-cover"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="px-2 py-1">
        <h4 className="text-xl">{tourists_spot_name}</h4>
        <div className="space-x-1 mt-4">
          <button className="px-1 py-1 rounded bg-gray-700">
            {country_name}
          </button>
          <button className="px-1 py-1 rounded bg-gray-700">
            {travel_time}
          </button>
          <button className="px-1 py-1 rounded bg-gray-700">
            {average_cost}
          </button>
        </div>
      </div>
      <button className="py-2 w-full bg-gray-700 mt-5">View Details</button>
    </div>
  );
};

export default Card;
