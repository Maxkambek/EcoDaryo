import { useNavigate } from "react-router-dom";
import news from "../assets/card-image.png";
import clock from "../assets/clock1.png";

const LastNews = () => {
  const nav = useNavigate();

  return (
    <div className="LastNews">
      <div className="container">
        <div className="last_news_name">
          <div className="last_h">{"SO'NGI YANGILIKLAR"}</div>
          <div onClick={() => nav("/yangiliklar")} className="last_btn">
            <div>Barchasini korish</div>
            <img src="/img/arrow.png" alt="" />
          </div>
        </div>
        <div className="last_main">
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
                  <div
                    onClick={() => nav("/yangiliklar/1/")}
                    className="item_more"
                  >
                    Batafsil
                  </div>
                </div>
              </div>
            </div> <div className="col-3">
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
                  <div
                    onClick={() => nav("/yangiliklar/1/")}
                    className="item_more"
                  >
                    Batafsil
                  </div>
                </div>
              </div>
            </div> <div className="col-3">
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
                  <div
                    onClick={() => nav("/yangiliklar/1/")}
                    className="item_more"
                  >
                    Batafsil
                  </div>
                </div>
              </div>
            </div> <div className="col-3">
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
  );
};

export default LastNews;
