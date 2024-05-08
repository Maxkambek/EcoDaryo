import Links from "../components/Links";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_PATH } from "../constants/constants";

const NewsDetail = () => {
  const pk = useParams();
  const { theme } = useContext(ThemeContext);
  const [data, setData] = useState("");

  useEffect(() => {
    axios.get(API_PATH + `/main/news/${pk.id}/`).then((res) => {
      setData(res.data);
    });
  }, [pk]);
  return (
    <>
      <div className={`NewDetail ${theme === "light" ? "" : "active"}`}>
        <div className="container">
          <div className="detail_news_header">
            <div className="news_link">
              Bosh sahifa / <span>Yangiliklar/{data?.title?.slice(0, 30)}</span>
            </div>
            <div className="news_h">Yangiliklar</div>
          </div>
          <div className="news_detail_main">
            <div className="detail_name">{data?.title}</div>
            <div className="news_image">
              <img src={data?.image_main} alt="" />
            </div>
            <div className="news_content_box">
              <div className="news_content">{data?.content}</div>
            </div>
          </div>
        </div>
      </div>
      <Links />
    </>
  );
};

export default NewsDetail;
