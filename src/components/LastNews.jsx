import { useNavigate } from "react-router-dom";
import clock from "../assets/clock1.png";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import axios from "axios";
import { API_PATH } from "../constants/constants";

const LastNews = () => {
  const nav = useNavigate();
  const { theme } = useContext(ThemeContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(API_PATH + "/main/news/").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div className={`LastNews ${theme === "light" ? "" : "active"}`}>
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
            {data?.slice(0, 5).map((item, index) => (
              <div key={index} className="col-3">
                <div className="last_item">
                  <div className="last_item_img">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="last_item_p">{item.title.slice(0, 100)}</div>
                  <div className="last_item_btn_group">
                    <div className="item_clock">
                      <img src={clock} alt="" /> {item.created_at.slice(11, 16)}
                    </div>
                    <div
                      onClick={() => nav(`/yangiliklar/${item.id}/`)}
                      className="item_more"
                    >
                      Batafsil
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastNews;
