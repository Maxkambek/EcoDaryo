import Links from "../components/Links";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import axios from "axios";
import { API_PATH } from "../constants/constants";

const Huquqiy = () => {
  const { theme } = useContext(ThemeContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(API_PATH + "/main/legal/").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <>
      <div className={`Huquqiy ${theme === "light" ? "" : "active"}`}>
        <div className="container">
          <div className="huquqiy_header">
            <div className="news_link">
              Bosh sahifa / <span>Huquqiy hujjatlar</span>
            </div>
            <div className="news_h">Huquqiy hujjatlar</div>
          </div>
          <div className="huquqiy_main">
            <div className="row">
              {data?.map((item, index) => (
                <div key={index} className="col-6 mb-4">
                  <div className="huquq_item">
                    <div className="item_link">{item.name}</div>
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

export default Huquqiy;
