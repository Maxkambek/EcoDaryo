import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Rahbariyat from "./pages/Rahbariyat";
import Hududiy from "./pages/Hududiy";
import News from "./pages/News";
import Loyihalar from "./pages/Loyihalar";
import Huquqiy from "./pages/Huquqiy";
import Contact from "./pages/Contact";
import VideosPage from "./pages/Videospage";
import NewsDetail from "./pages/NewsDetail";
import HududiyDetail from "./pages/HududiyDetail";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Rahbariyat />} path="/rahbariyat" />
          <Route element={<Hududiy />} path="/hududiy" />
          <Route element={<HududiyDetail />} path="/hududiy/:id" />
          <Route element={<News />} path="/yangiliklar" />
          <Route element={<NewsDetail />} path="/yangiliklar/:id" />
          <Route element={<Loyihalar />} path="/loyihalar" />
          <Route element={<Huquqiy />} path="/huquqiy" />
          <Route element={<Contact />} path="/contact" />
          <Route element={<VideosPage />} path="/videos" />
        </Routes>
        <Footer />
        <ScrollToTop />
      </HashRouter>
    </>
  );
}

export default App;
