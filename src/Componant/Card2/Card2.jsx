
const Card2 = ({post}) => {
    console.log(post);
    return (
        <div className="border p-4 my-2 flex gap-2">
            <div>
                <img src={post.image} className="w-14 h-14" alt="" />
            </div>
            <div>
            <h2>{post.tourists_spot_name}</h2>
            <h3>{post.country_name}</h3>
            </div>
        </div>
    );
};

export default Card2;