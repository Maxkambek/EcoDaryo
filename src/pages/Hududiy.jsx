import face from "../assets/facebook (1).png";
import insta from "../assets/instagram.png";
import twit from "../assets/twitter.png";
import teleg from "../assets/telegram.png";
import huj from "../assets/hujjat.png";
import tel from "../assets/PhoneCall.png";
import sms from "../assets/mail.png";
import clock from "../assets/clock1.png";
import Links from "../components/Links";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import axios from "axios";
import { API_PATH } from "../constants/constants";

const Hududiy = () => {
  const nav = useNavigate();
  const { theme } = useContext(ThemeContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(API_PATH + "/main/region/").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <>
      <div className={`Hududiy ${theme === "light" ? "" : "active"}`}>
        <div className="container">
          <div className="rah_head_box">
            <div className="rah_left">
              <div className="rah_pathname">
                Bosh sahifa / <span>Hududiy bo’linmalar</span>
              </div>
              <div className="social_link">
                <img src={face} alt="" />
                <img src={insta} alt="" />
                <img src={twit} alt="" />
                <img src={teleg} alt="" />
              </div>
            </div>
            <div className="rah_center">Hududiy bo’linmalar</div>
            <div className="rah_right">
              <img src={huj} alt="" />
            </div>
          </div>
          <div className="rah_main">
            <div className="row">
              {data?.map((item, index) => (
                <div key={index} className="col-4 mb-4">
                  <div className="rah_item">
                    <div className="rah_image">
                      <img src={item.image} alt="" />
                    </div>
                    <div className="rah_content_box">
                      <div className="lavozim">{item.position}</div>
                      <div className="name">{item.name}</div>
                      <div className="info_box">
                        <div className="phone">
                          <img src={tel} alt="" />
                          <div>{item.phone}</div>
                        </div>
                        <div className="sms">
                          <img src={sms} alt="" />
                          <div>{item.email}</div>
                        </div>
                        <div className="vaqt">
                          <img src={clock} alt="" />
                          <div>{item.work_time}</div>
                        </div>
                      </div>
                      <div
                        onClick={() => nav(`/hududiy/${item.id}/`)}
                        className="tarjimai_btn"
                      >
                        Tarjimai hol
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

export default Hududiy;
