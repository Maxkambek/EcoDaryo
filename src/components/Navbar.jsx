import { useNavigate } from "react-router-dom";
import white_logo from "../assets/logo-light-mode.png";
import mode_light from "../assets/mode-switcher-for-light-mode.png";
import mode_dark from "../assets/mode-switcher-for-dark-mode.png";
import { useState } from "react";

const Navbar = () => {
  const [mode, setMode] = useState(false);
  const nav = useNavigate();
  return (
    <>
      <div className="Navbar">
        <div className="container">
          <div className="navbar_logo_box">
            <div onClick={() => nav("/")} className="navbar_left">
              <img src={white_logo} alt="" />
            </div>
            <div className="navbar_right">
              <div className="phone">+998 97 716 54 34</div>
              <div onClick={() => setMode(!mode)} className="mode_change">
                <img src={mode ? mode_dark : mode_light} alt="" />
              </div>
              <div className="language">
                <select name="" id="">
                  <option value="uz">Uz</option>
                  <option value="ru">Ru</option>
                </select>
              </div>
            </div>
          </div>
          <div className="navbar_routes">
            <div onClick={() => nav("/rahbariyat")} className="nav_a">
              Rahbariyat
            </div>
            <div onClick={() => nav("/hududiy")} className="nav_a">
              Hududiy bo’linmalar
            </div>
            <div onClick={() => nav("/yangiliklar")} className="nav_a">
              Yangiliklar
            </div>
            <div onClick={() => nav("/loyihalar")} className="nav_a">
              Loyihalar
            </div>
            <div onClick={() => nav("/huquqiy")} className="nav_a">
              Huquqiy hujjatlar
            </div>
            <div onClick={() => nav("/contact")} className="nav_a">
              Bog’lanish
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
