import Links from "../components/Links";
import clock from "../assets/clock1.png";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import axios from "axios";
import { API_PATH } from "../constants/constants";
import { useNavigate } from "react-router-dom";

const News = () => {
  const { theme } = useContext(ThemeContext);
  const [data, setData] = useState([]);
  const nav = useNavigate();
  useEffect(() => {
    axios.get(API_PATH + "/main/news/").then((res) => {
      setData(res.data);
    });
  }, []);
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
              {data?.map((item, index) => (
                <div key={index} className="col-3">
                  <div className="last_item">
                    <div className="last_item_img">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="last_item_p">
                      {item.title.slice(0, 100)}
                    </div>
                    <div className="last_item_btn_group">
                      <div className="item_clock">
                        <img src={clock} alt="" />
                        {item.created_at.slice(11, 16)}
                      </div>
                      <div
                        onClick={() => nav(`/yangiliklar/${item.id}`)}
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
      <Links />
    </>
  );
};

export default News;
