import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Card from "../../Componant/Card/Card";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import Card3 from "../../Componant/Card3/Card3";
import { AuthContexts } from "../../Context/AuthContext";

const Home = () => {

  const { posts: data } = useContext(AuthContexts);
  const posts = data.slice(0, 6);
  const [countries, setCountries] = useState([])
  useEffect(() => {
    axios
      .get("https://assignment10-eta.vercel.app/countries")
      .then((data) => setCountries(data.data));
  }, []);

  
  return (
    <div>
      <div className="mt-10 max-w-6xl mx-auto relative">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
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
            Book your next{" "}
            <Typewriter
              words={["Safe", "Cheap", "Best"]}
              loop={5}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />{" "}
            tour with us today!
          </h2>
          <button className="bg-gray-600 hover:bg-gray-600/60 px-4 py-2 rounded text-xl mt-4">
            Contact Us
          </button>
        </div>
      </div>
      <div>
        <h2 className="text-center text-xl lg:text-3xl my-10">
          Our Popular Destinations
        </h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link to={`/details/${post._id}`} key={post._id}>
              <Card key={post._id} post={post}></Card>
            </Link>
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto my-10">
        <h2 className="text-3xl text-center my-4">Countries</h2>
        <div className="grid grid-cols-3 gap-4">
          {countries.map((data) => (
            <Link to={`/country/${data.country}`} key={data._id}><Card3 data={data}></Card3></Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
