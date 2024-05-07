import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const Links = () => {
  return (
    <div className="Links">
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
          <SwiperSlide>
            <div className="link_box_item">
              <div className="links_img">
                <img src="/img/gerb.png" alt="" />
              </div>
              <div className="links_name">
                Yagona interaktiv davlat xizmat portali
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="link_box_item">
              <div className="links_img">
                <img src="/img/gerb.png" alt="" />
              </div>
              <div className="links_name">
                Yagona interaktiv davlat xizmat portali
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="link_box_item">
              <div className="links_img">
                <img src="/img/gerb.png" alt="" />
              </div>
              <div className="links_name">
                Yagona interaktiv davlat xizmat portali
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="link_box_item">
              <div className="links_img">
                <img src="/img/gerb.png" alt="" />
              </div>
              <div className="links_name">
                Yagona interaktiv davlat xizmat portali
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="link_box_item">
              <div className="links_img">
                <img src="/img/gerb.png" alt="" />
              </div>
              <div className="links_name">
                Yagona interaktiv davlat xizmat portali
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="link_box_item">
              <div className="links_img">
                <img src="/img/gerb.png" alt="" />
              </div>
              <div className="links_name">
                Yagona interaktiv davlat xizmat portali
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Links;
