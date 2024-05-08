import { useNavigate } from "react-router-dom";
import white_logo from "../assets/logo-light-mode.png";
import dark_logo from "../assets/lofo-dark-mode.png";
import mode_light from "../assets/mode-switcher-for-light-mode.png";
import mode_dark from "../assets/mode-switcher-for-dark-mode.png";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const nav = useNavigate();

  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <>
      <div className={`Navbar ${theme === "light" ? "" : "active"}`}>
        <div className="container">
          <div className="navbar_logo_box">
            <div onClick={() => nav("/")} className="navbar_left">
              <img src={theme === "light" ? white_logo : dark_logo} alt="" />
            </div>
            <div className="navbar_right">
              <div className="phone">+998 97 716 54 34</div>
              <div
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="mode_change"
              >
                <img src={theme === "light" ? mode_light : mode_dark} alt="" />
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
