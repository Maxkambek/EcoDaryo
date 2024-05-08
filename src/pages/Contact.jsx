import Links from "../components/Links";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Contact = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div className={`Contact ${theme === "light" ? "" : "active"}`}>
        <div className="container">
          <div className="contact_header">
            <div className="news_link">
              Bosh sahifa / <span>Bog’lanish</span>
            </div>
            <div className="news_h">Bog’lanish</div>
          </div>
          <div className="contact_main">
            <div className="row">
              <div className="col-4">
                <div className="contact_item">
                  <div className="item_img">
                    <img src="/img/phone.png" alt="" />
                  </div>
                  <div className="item_text">+998712627528</div>
                </div>
              </div>
              <div className="col-4">
                <div className="contact_item">
                  <div className="item_img">
                    <img src="/img/mail.png" alt="" />
                  </div>
                  <div className="item_text">ecodaryo@uemail.com</div>
                </div>
              </div>
              <div className="col-4">
                <div className="contact_item">
                  <div className="item_img">
                    <img src="/img/location.png" alt="" />
                  </div>
                  <div className="item_text">
                    Toshkent shahar Mirzo-Ulug‘bek tumani do‘rmon yo‘li koʻchasi
                    2-A uy
                  </div>
                </div>
              </div>
            </div>
            <div className="contact_forma">
              <form action="">
                <div className="contact_inps">
                  <input type="text" placeholder="Ism" />
                  <input type="text" placeholder="Familiya" />
                  <input type="text" placeholder="Telefon Raqam" />
                  <input type="text" placeholder="Email" />
                </div>
                <textarea
                  className="contact_textarea"
                  placeholder="Xabar matni"
                  name=""
                  id=""
                ></textarea>

                <div className="contact_btn">Yuborish</div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Links />
    </>
  );
};

export default Contact;
