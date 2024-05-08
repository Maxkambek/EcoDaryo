import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import axios from "axios";
import { API_PATH } from "../constants/constants";

const Links = () => {
  const { theme } = useContext(ThemeContext);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(API_PATH + "/main/links/").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div className={`Links ${theme === "light" ? "" : "active"}`}>
      <div className="container">
        <div className="links_header">Foydali havolalar</div>
      </div>
      <div className="links_box">
        <Swiper
          slidesPerView={4}
          spaceBetween={200} // added
          autoplay={{ delay: 3000 }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          {data?.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="link_box_item">
                <div className="links_img">
                  <img src={item.logo} alt="" />
                </div>
                <div className="links_name">{item.name}</div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Links;
