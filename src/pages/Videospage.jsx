import Links from "../components/Links";
import clock from "../assets/clock1.png";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import axios from "axios";
import { API_PATH } from "../constants/constants";

const VideosPage = () => {
  const { theme } = useContext(ThemeContext);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get(API_PATH + "/main/video/").then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <>
      <div className={`Videos ${theme === "light" ? "" : "active"}`}>
        <div className="container">
          <div className="vides_header">
            <div className="news_link">
              Bosh sahifa / <span>Videolar</span>
            </div>
            <div className="news_h">Videolar</div>
          </div>
          <div className="videos_main">
            <div className="row">
              {data?.map((item, index) => (
                <div key={index} className="col-4 mb-4">
                  <div className="videos_item">
                    <div className="video_container">
                      <video autoPlay controls>
                        <source src={item.video_file} type="video/mp4" />
                      </video>
                    </div>
                    <div className="video_content_box">
                      <div className="video_name">
                        {item.title.slice(0, 200)}
                      </div>
                      <div className="item_clock">
                        <img src={clock} alt="" />{" "}
                        {item.created_at.slice(11, 16)}
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

export default VideosPage;
