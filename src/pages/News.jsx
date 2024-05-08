import Links from "../components/Links";
import news from "../assets/card-image.png";
import clock from "../assets/clock1.png";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const News = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div className={`News ${theme === "light" ? "" : "active"}`}>
        <div className="container">
          <div className="news_header">
            <div className="news_link">
              Bosh sahifa / <span>Yangiliklar</span>
            </div>
            <div className="news_h">Yangiliklar</div>
          </div>
          <div className="news_main">
            <div className="row">
              <div className="col-3">
                <div className="last_item">
                  <div className="last_item_img">
                    <img src={news} alt="" />
                  </div>
                  <div className="last_item_p">
                    Avval xabar berganimizdek, 2024-yilning 20-fevral kunidan
                    29-fevral kuniga qadar...
                  </div>
                  <div className="last_item_btn_group">
                    <div className="item_clock">
                      <img src={clock} alt="" /> 09:50
                    </div>
                    <div className="item_more">Batafsil</div>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="last_item">
                  <div className="last_item_img">
                    <img src={news} alt="" />
                  </div>
                  <div className="last_item_p">
                    Avval xabar berganimizdek, 2024-yilning 20-fevral kunidan
                    29-fevral kuniga qadar...
                  </div>
                  <div className="last_item_btn_group">
                    <div className="item_clock">
                      <img src={clock} alt="" /> 09:50
                    </div>
                    <div className="item_more">Batafsil</div>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="last_item">
                  <div className="last_item_img">
                    <img src={news} alt="" />
                  </div>
                  <div className="last_item_p">
                    Avval xabar berganimizdek, 2024-yilning 20-fevral kunidan
                    29-fevral kuniga qadar...
                  </div>
                  <div className="last_item_btn_group">
                    <div className="item_clock">
                      <img src={clock} alt="" /> 09:50
                    </div>
                    <div className="item_more">Batafsil</div>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="last_item">
                  <div className="last_item_img">
                    <img src={news} alt="" />
                  </div>
                  <div className="last_item_p">
                    Avval xabar berganimizdek, 2024-yilning 20-fevral kunidan
                    29-fevral kuniga qadar...
                  </div>
                  <div className="last_item_btn_group">
                    <div className="item_clock">
                      <img src={clock} alt="" /> 09:50
                    </div>
                    <div className="item_more">Batafsil</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Links />
    </>
  );
};

export default News;
