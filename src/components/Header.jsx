import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import back from "../assets/back.png";

const Header = () => {
  return (
    <div className="Header">
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
          <SwiperSlide>
            <div className="container slider_box">
              <div className="slider_name">
                {`   O'zbekiston Respublikasi Ekologiya, atrof-muhitni muhofaza qilish
              va iqlim o‘zgarishi vazirligi huzuridagi "Xavfsiz daryo
              boshqarmasi" davlat muassasasi`}
              </div>
              <div className="slider_p">
                Oʼzbekiston Respublikasi Prezidentining 2018-yil 9-iyuldagi
                PQ-3841-son qaroriga muvofiq tashkil etilgan.
              </div>
              <div className="slider_btn">Batafsil</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container slider_box">
              <div className="slider_name">
                {`   O'zbekiston Respublikasi Ekologiya, atrof-muhitni muhofaza qilish
              va iqlim o‘zgarishi vazirligi huzuridagi "Xavfsiz daryo
              boshqarmasi" davlat muassasasi`}
              </div>
              <div className="slider_p">
                Oʼzbekiston Respublikasi Prezidentining 2018-yil 9-iyuldagi
                PQ-3841-son qaroriga muvofiq tashkil etilgan.
              </div>
              <div className="slider_btn">Batafsil</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container slider_box">
              <div className="slider_name">
                {`   O'zbekiston Respublikasi Ekologiya, atrof-muhitni muhofaza qilish
              va iqlim o‘zgarishi vazirligi huzuridagi "Xavfsiz daryo
              boshqarmasi" davlat muassasasi`}
              </div>
              <div className="slider_p">
                Oʼzbekiston Respublikasi Prezidentining 2018-yil 9-iyuldagi
                PQ-3841-son qaroriga muvofiq tashkil etilgan.
              </div>
              <div className="slider_btn">Batafsil</div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="container slider_box">
              <div className="slider_name">
                {`   O'zbekiston Respublikasi Ekologiya, atrof-muhitni muhofaza qilish
              va iqlim o‘zgarishi vazirligi huzuridagi "Xavfsiz daryo
              boshqarmasi" davlat muassasasi`}
              </div>
              <div className="slider_p">
                Oʼzbekiston Respublikasi Prezidentining 2018-yil 9-iyuldagi
                PQ-3841-son qaroriga muvofiq tashkil etilgan.
              </div>
              <div className="slider_btn">Batafsil</div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Header;
