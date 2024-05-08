import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
const Map = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`Map ${theme === "light" ? "" : "active"}`}>
      <div className="container">
        <div className="map_header">Joylashuv</div>
      </div>
      <div className="map_container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11978.823210385157!2d69.29967315!3d41.3587479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2s!4v1715029733111!5m2!1sru!2s"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
