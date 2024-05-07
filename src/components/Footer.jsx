import { useNavigate } from "react-router-dom";
import logo from "../assets/lofo-dark-mode.png";
import world from "../assets/World Map.png";

const Footer = () => {
  const nav = useNavigate();
  const scroll = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="Footer">
      <div className="container">
        <div className="row">
          <div className="col-7">
            <div className="footer_logo">
              <img src={logo} alt="" />
            </div>
            <div className="footer_box">
              <div className="footer_links">
                <div onClick={() => nav("/rahbariyat")} className="footer_a">
                  Rahbariyat
                </div>
                <div onClick={() => nav("/hududiy")} className="footer_a">
                  Hududiy bo’linmalar
                </div>
                <div onClick={() => nav("/yangiliklar")} className="footer_a">
                  Yangiliklar
                </div>
                <div onClick={() => nav("/loyihalar")} className="footer_a">
                  Loyihalar
                </div>
                <div onClick={() => nav("/huquqiy")} className="footer_a">
                  Huquqiy hujjatlar
                </div>
                <div onClick={() => nav("/contact")} className="footer_a">
                  Bog’lanish
                </div>
              </div>
              <div className="footer_informations">
                <div className="address">
                  Manzil: Toshkent shahar Mirzo-Ulug‘bek tumani,
                  <br /> Do‘rmon yo‘li koʻchasi 2-A uy
                </div>
                <div className="phone">Telefon raqam +998712627528</div>
                <div className="email">Email: ecodaryo@uemail.com</div>
              </div>
            </div>
          </div>
          <div className="col-5 mt-5">
            <img className="w-100" src={world} alt="" />
          </div>
        </div>
      </div>
      <div className="for_border"></div>
      <div className="container">
        <div className="footer_bottom">
          <div className="bottom_h">
            © Eco. All Rights Reserved 2024.Licensing
          </div>
          <div onClick={() => scroll()} className="to_top_btn">
            <img src="/img/to.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
