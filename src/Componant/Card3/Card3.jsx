
const Card3 = ({data}) => {
    return (
        <div className="border p-4">
            <div><img src={data.image} className="h-60 w-full md:w-96"/></div>
            <div className="mt-2">
                <h2 className="text-xl">{data.country}</h2>
                <p>{data.description}</p>
            </div>
        </div>
    );
};

export default Card3;