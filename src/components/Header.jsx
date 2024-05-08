import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import back from "../assets/back.png";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import axios from "axios";
import { API_PATH } from "../constants/constants";

const Header = () => {
  const { theme } = useContext(ThemeContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(API_PATH + "/main/slider/").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div className={`Header ${theme === "light" ? "" : "active"}`}>
      <div
        style={{
          backgroundImage: `url(${back})`,
          backgroundPosition: "center",
        }}
        className="header_back_image"
      >
        <Swiper
          slidesPerView={1}
          spaceBetween={30} // added
          autoplay={{ delay: 3000 }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
          injectStyles={`
          .swiper-button-prev {
            background-image: url("../src/components/carousel/ong.svg");
          }
          
          .swiper-button-next {
            background-image: url("../src/components/carousel/chap.svg");
          }
         
          `}
        >
          {data?.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="container slider_box">
                <div className="slider_name">{item.title}</div>
                <div className="slider_p">{item.content}</div>
                <div className="slider_btn">Batafsil</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Header;
