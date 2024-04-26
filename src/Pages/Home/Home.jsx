import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Card from "../../Componant/Card/Card";

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/allposts")
      .then((res) => {
        // console.log(res);
        setPosts(res.data);
      })
      .catch(() => toast.error("Something went wrong"));
  }, []);

  console.log(posts);

  return (
    <div>
      <div className="mt-10 max-w-6xl mx-auto relative">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper">
          {posts.map((post) => (
            <SwiperSlide key={post._id}>
              <div className="relative">
                <img className="h-[400px] w-full bg-cover" src={post.image} />
                <p className="absolute top-1 right-1 z-10 text-sm bg-gray-600 text-white px-2 py-1 rounded w-fit">
                  {post.tourists_spot_name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="absolute top-5 z-10 bg-black bg-opacity-40 text-white p-20">
          <h2 className="text-3xl">
            Ready for adventure? <br />
            Book your next tour with us today!
          </h2>
          <button className="bg-gray-600 px-4 py-2 rounded text-xl mt-4">
            Contact Us
          </button>
        </div>
      </div>
      <div>
        <h2 className="text-center text-xl lg:text-3xl my-10">Our Popular Tourist Spots</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-3 gap-4">
            {
                posts.map((post)=> <Card key={post._id} post={post}></Card>)
            }
        </div>
      </div>
    </div>
  );
};

export default Home;
