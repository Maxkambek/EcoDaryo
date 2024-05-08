import Links from "../components/Links";
import person from "../assets/person.png";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { useParams } from "react-router-dom";
import axios from "axios";
import { API_PATH } from "../constants/constants";

const HududiyDetail = () => {
  const pk = useParams();
  const { theme } = useContext(ThemeContext);
  const [data, setData] = useState("");
  useEffect(() => {
    axios.get(API_PATH + `/main/region/${pk.id}/`).then((res) => {
      setData(res.data);
    });
  }, [pk]);

  return (
    <>
      <div className={`HududiyDetail ${theme === "light" ? "" : "active"}`}>
        <div className="container">
          <div className="hududiy_detail_header">
            <div className="news_link">
              Bosh sahifa / <span>Hududiy bo’linmalar / {data?.name}</span>
            </div>
            <div className="news_h">Hududiy bo’linmalar</div>
          </div>
          <div className="hududiy_detail_main">
            <div className="hududiy_image">
              <img src={person} alt="" />
            </div>
            <div className="hududiy_what">Malumotnoma</div>
            <div className="hududiy_name">{data?.name}</div>

            <div className="detail_tar_box">
              <div className="tarjima_item">
                <div className="item_h">Туғилган йили:</div>
                <div className="item_p">{data?.date_birth}</div>
              </div>
              <div className="tarjima_item">
                <div className="item_h">Туғилган жойи:</div>
                <div className="item_p">{data?.place_birth}</div>
              </div>
              <div className="tarjima_item">
                <div className="item_h">Миллати:</div>
                <div className="item_p">{data?.nationality}</div>
              </div>
              <div className="tarjima_item">
                <div className="item_h">Партиявийлиги:</div>
                <div className="item_p">{data?.party}</div>
              </div>
              <div className="tarjima_item">
                <div className="item_h">{"Ma'lumoti:"}</div>
                <div className="item_p">{data?.malumoti}</div>
              </div>
              <div className="tarjima_item">
                <div className="item_h">Маълумоти бўйича мутахассислиги:</div>
                <div className="item_p">{data?.specialty}</div>
              </div>
              <div className="tarjima_item">
                <div className="item_h">Тамомлаган:</div>
                <div className="item_p">{data?.tamomlagan}</div>
              </div>
              <div className="tarjima_item">
                <div className="item_h">Илмий даражаси:</div>
                <div className="item_p">{data?.ilmiy_daraja}</div>
              </div>
              <div className="tarjima_item">
                <div className="item_h">Илмий унвони:</div>
                <div className="item_p">{data?.ilmiy_unvon}</div>
              </div>
              <div className="tarjima_item">
                <div className="item_h">Қайси чет тилларни билади:</div>
                <div className="item_p">{data?.language}</div>
              </div>
              <div className="tarjima_item">
                <div className="item_h">
                  Давлат мукофотлари билан тақдирланганми (қандай):
                </div>
                <div className="item_p">{data?.davlat_mukofoti}</div>
              </div>
              <div className="tarjima_item">
                <div className="item_h">
                  Халқ депутатлари, республика, вилоят, шаҳар ва туман Кенгаши{" "}
                  <br />
                  депутати ёки бошқа сайланадиган органларнинг аъзосими (тўлиқ
                  кўрсатилиши лозим):
                </div>
                <div className="item_p">{data?.xald_deputatlari}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Links />
    </>
  );
};

export default HududiyDetail;
