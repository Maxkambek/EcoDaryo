import face from "../assets/facebook (1).png";
import insta from "../assets/instagram.png";
import twit from "../assets/twitter.png";
import teleg from "../assets/telegram.png";
import huj from "../assets/hujjat.png";
import rah from "../assets/person.png";
import tel from "../assets/PhoneCall.png";
import sms from "../assets/mail.png";
import clock from "../assets/clock1.png";
import Links from "../components/Links";
import { useNavigate } from "react-router-dom";

const Hududiy = () => {
  const nav = useNavigate();
  return (
    <>
      <div className="Hududiy">
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
              <div className="col-4 mb-4">
                <div className="rah_item">
                  <div className="rah_image">
                    <img src={rah} alt="" />
                  </div>
                  <div className="rah_content_box">
                    <div className="lavozim">
                      Andijon viloyati bo‘linmasi boshlig‘i
                    </div>
                    <div className="name">Turaxanov Ahrorxon Asrorxanovich</div>
                    <div className="info_box">
                      <div className="phone">
                        <img src={tel} alt="" />
                        <div>+998712627528</div>
                      </div>
                      <div className="sms">
                        <img src={sms} alt="" />
                        <div>ecodaryo@uemail.com</div>
                      </div>
                      <div className="vaqt">
                        <img src={clock} alt="" />
                        <div>9:00 dan 11:00 gacha</div>
                      </div>
                    </div>
                    <div
                      onClick={() => nav("/hududiy/1/")}
                      className="tarjimai_btn"
                    >
                      Tarjimai hol
                    </div>
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

export default Hududiy;
