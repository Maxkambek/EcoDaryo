import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./style/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "./context/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
