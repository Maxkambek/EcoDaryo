import { useNavigate } from "react-router-dom";
import clock from "../assets/clock1.png";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import axios from "axios";
import { API_PATH } from "../constants/constants";

const HomeNews = () => {
  const { theme } = useContext(ThemeContext);
  const nav = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(API_PATH + "/main/news/").then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <div className={`HomeNews ${theme === "light" ? "" : "active"}`}>
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
            {data?.map((item, index) => (
              <div key={index} className="col-6 mb-4">
                <div className="home_news_box">
                  <div className="img">
                    <img src={item.image} alt="" />
                  </div>
                  <div className="news_content_box">
                    <div className="box_p">{item.title.slice(0, 200)}</div>
                    <div className="box_btn_group">
                      <div className="item_clock">
                        <img src={clock} alt="" />{" "}
                        {item.created_at.slice(11, 16)}
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeNews;
