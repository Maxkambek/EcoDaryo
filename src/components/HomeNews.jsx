import { useNavigate } from "react-router-dom";
import news from "../assets/card-image.png";
import clock from "../assets/clock1.png";

const HomeNews = () => {
  const nav = useNavigate();
  return (
    <div className="HomeNews">
      <div className="container">
        <div className="home_news_header">
          <div className="last_h">{"YANGILIKLAR"}</div>
          <div onClick={() => nav("/yangiliklar")} className="last_btn">
            <div>Barchasini korish</div>
            <img src="/img/arrow.png" alt="" />
          </div>
        </div>
        <div className="home_news_main">
          <div className="row">
            <div className="col-6 mb-4">
              <div className="home_news_box">
                <div className="img">
                  <img src={news} alt="" />
                </div>
                <div className="news_content_box">
                  <div className="box_p">
                    “Xavfsiz daryo boshqarmasi” davlat muassasasi Andijon
                    viloyati bo‘linmasi boshlig‘i Turaxanov Axrorxon
                    Asrorxonovich o‘zining mehnat faoliyati davomida tabiatga
                    “Xavfsiz daryo boshqarmasi” davlat muassasasi Andijon
                    viloyati bo‘linmasi boshlig‘i Turaxanov Axrorxon
                    Asrorxonovich o‘zining mehnat faoliyati davomida tabiatga
                  </div>
                  <div className="box_btn_group">
                    <div className="item_clock">
                      <img src={clock} alt="" /> 09:50
                    </div>
                    <div
                      onClick={() => nav("/yangiliklar/1/")}
                      className="item_more"
                    >
                      Batafsil
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 mb-4">
              <div className="home_news_box">
                <div className="img">
                  <img src={news} alt="" />
                </div>
                <div className="news_content_box">
                  <div className="box_p">
                    “Xavfsiz daryo boshqarmasi” davlat muassasasi Andijon
                    viloyati bo‘linmasi boshlig‘i Turaxanov Axrorxon
                    Asrorxonovich o‘zining mehnat faoliyati davomida tabiatga
                    “Xavfsiz daryo boshqarmasi” davlat muassasasi Andijon
                    viloyati bo‘linmasi boshlig‘i Turaxanov Axrorxon
                    Asrorxonovich o‘zining mehnat faoliyati davomida tabiatga
                  </div>
                  <div className="box_btn_group">
                    <div className="item_clock">
                      <img src={clock} alt="" /> 09:50
                    </div>
                    <div
                      onClick={() => nav("/yangiliklar/1/")}
                      className="item_more"
                    >
                      Batafsil
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 mb-4">
              <div className="home_news_box">
                <div className="img">
                  <img src={news} alt="" />
                </div>
                <div className="news_content_box">
                  <div className="box_p">
                    “Xavfsiz daryo boshqarmasi” davlat muassasasi Andijon
                    viloyati bo‘linmasi boshlig‘i Turaxanov Axrorxon
                    Asrorxonovich o‘zining mehnat faoliyati davomida tabiatga
                    “Xavfsiz daryo boshqarmasi” davlat muassasasi Andijon
                    viloyati bo‘linmasi boshlig‘i Turaxanov Axrorxon
                    Asrorxonovich o‘zining mehnat faoliyati davomida tabiatga
                  </div>
                  <div className="box_btn_group">
                    <div className="item_clock">
                      <img src={clock} alt="" /> 09:50
                    </div>
                    <div
                      onClick={() => nav("/yangiliklar/1/")}
                      className="item_more"
                    >
                      Batafsil
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-6 mb-4">
              <div className="home_news_box">
                <div className="img">
                  <img src={news} alt="" />
                </div>
                <div className="news_content_box">
                  <div className="box_p">
                    “Xavfsiz daryo boshqarmasi” davlat muassasasi Andijon
                    viloyati bo‘linmasi boshlig‘i Turaxanov Axrorxon
                    Asrorxonovich o‘zining mehnat faoliyati davomida tabiatga
                    “Xavfsiz daryo boshqarmasi” davlat muassasasi Andijon
                    viloyati bo‘linmasi boshlig‘i Turaxanov Axrorxon
                    Asrorxonovich o‘zining mehnat faoliyati davomida tabiatga
                  </div>
                  <div className="box_btn_group">
                    <div className="item_clock">
                      <img src={clock} alt="" /> 09:50
                    </div>
                    <div
                      onClick={() => nav("/yangiliklar/1/")}
                      className="item_more"
                    >
                      Batafsil
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeNews;
