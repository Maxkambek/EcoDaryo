import Links from "../components/Links";
import person from "../assets/person.png";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const HududiyDetail = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div className={`HududiyDetail ${theme === "light" ? "" : "active"}`}>
        <div className="container">
          <div className="hududiy_detail_header">
            <div className="news_link">
              Bosh sahifa /{" "}
              <span>
                Hududiy bo’linmalar / Turaxanov Ahrorxon Asrorxanovich
              </span>
            </div>
            <div className="news_h">Hududiy bo’linmalar</div>
          </div>
          <div className="hududiy_detail_main">
            <div className="hududiy_image">
              <img src={person} alt="" />
            </div>
            <div className="hududiy_what">Malumotnoma</div>
            <div className="hududiy_name">Тўрахонов Ахрорхон Асрорхонович</div>

            <div className="detail_tar_box">
              <div className="tarjima_item">
                <div className="item_h">Туғилган йили:</div>
                <div className="item_p">1984 йил 7 март</div>
              </div>
              <div className="tarjima_item">
                <div className="item_h">Туғилган жойи:</div>
                <div className="item_p">Андижон вилояти</div>
              </div>
              <div className="tarjima_item">
                <div className="item_h">Миллати:</div>
                <div className="item_p">Миллати:</div>
              </div>
              <div className="tarjima_item">
                <div className="item_h">Партиявийлиги:</div>
                <div className="item_p">Партиясиз</div>
              </div>
              <div className="tarjima_item">
                <div className="item_h">Маълумоти бўйича мутахассислиги:</div>
                <div className="item_p">
                  информатика ва ахборот технологиялари
                </div>
              </div>
              <div className="tarjima_item">
                <div className="item_h">Тамомлаган:</div>
                <div className="item_p">
                  2006 йили Фарғона Ахборот технологиялари университетини
                  тамомлаган.
                </div>
              </div>
              <div className="tarjima_item">
                <div className="item_h">Илмий даражаси:</div>
                <div className="item_p">йўқ</div>
              </div>
              <div className="tarjima_item">
                <div className="item_h">Илмий унвони:</div>
                <div className="item_p">йўқ</div>
              </div>
              <div className="tarjima_item">
                <div className="item_h">Қайси чет тилларни билади:</div>
                <div className="item_p">рус тили</div>
              </div>
              <div className="tarjima_item">
                <div className="item_h">
                  Давлат мукофотлари билан тақдирланганми (қандай):
                </div>
                <div className="item_p">йўқ</div>
              </div>
              <div className="tarjima_item">
                <div className="item_h">
                  Халқ депутатлари, республика, вилоят, шаҳар ва туман Кенгаши{" "}
                  <br />
                  депутати ёки бошқа сайланадиган органларнинг аъзосими (тўлиқ
                  кўрсатилиши лозим):
                </div>
                <div className="item_p">йўқ</div>
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
