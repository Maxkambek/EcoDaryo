import Links from "../components/Links";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const NewsDetail = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div className={`NewDetail ${theme === "light" ? "" : "active"}`}>
        <div className="container">
          <div className="detail_news_header">
            <div className="news_link">
              Bosh sahifa / <span>Yangiliklar/ “Qoradaryo” daryosining..</span>
            </div>
            <div className="news_h">Yangiliklar</div>
          </div>
          <div className="news_detail_main">
            <div className="detail_name">
              “Qoradaryo” daryosining qirg‘oqlarida “Yashil belbog‘”lar tashkil
              etilmoqda
            </div>
            <div className="news_image">
              <img src="/img/news1.png" alt="" />
            </div>
            <div className="news_content_box">
              <div className="news_content">
                {`“Xavfsiz daryo boshqarmasi” davlat muassasi va tadbirkorlik
                subyektlari o‘rtasida "Daryo o‘zanini tozalash jarayonida
                qum-shag‘al materiallarini qazib olish 
                huquqi" tog‘risida imzolangan shartnomalarga asosan tadbirkorlik
                subyektlari tomonidan O‘zbekiston Respublikasi Prezidentining
                2019-yil 30-oktyabrdagi PF-5863-son Farmoni bilan “2030-yilgacha
                bo‘lgan davrda O‘zbekiston Respublikasining Atrof-muhitni
                muhofaza qilish Konsepsiyasini tasdiqlash to‘g‘risida” hamda
                davlat ekologik ekspertiza xulosasi talablaridan kelib chiqqan
                holda, biriktirilgan uchastkaning qirg‘oqbo‘yi mintaqasida
                qirg‘oqlarni mustahkamlovchi daraxtzor polasasini
                yaratish vazifasi qo‘yilgan.`}
              </div>
              <div className="news_content mt-3">
                {`“Xavfsiz daryo boshqarmasi” davlat muassasi va tadbirkorlik
                subyektlari o‘rtasida "Daryo o‘zanini tozalash jarayonida
                qum-shag‘al materiallarini qazib olish 
                huquqi" tog‘risida imzolangan shartnomalarga asosan tadbirkorlik
                subyektlari tomonidan O‘zbekiston Respublikasi Prezidentining
                2019-yil 30-oktyabrdagi PF-5863-son Farmoni bilan “2030-yilgacha
                bo‘lgan davrda O‘zbekiston Respublikasining Atrof-muhitni
                muhofaza qilish Konsepsiyasini tasdiqlash to‘g‘risida” hamda
                davlat ekologik ekspertiza xulosasi talablaridan kelib chiqqan
                holda, biriktirilgan uchastkaning qirg‘oqbo‘yi mintaqasida
                qirg‘oqlarni mustahkamlovchi daraxtzor polasasini
                yaratish vazifasi qo‘yilgan.`}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Links />
    </>
  );
};

export default NewsDetail;
