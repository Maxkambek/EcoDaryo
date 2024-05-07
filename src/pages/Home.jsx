import Header from "../components/Header";
import HomeNews from "../components/HomeNews";
import LastNews from "../components/LastNews";
import Links from "../components/Links";
import Map from "../components/Map";
import Karta from "../components/UzMap";
import Videos from "../components/Videos";

const Home = () => {
  return (
    <>
      <Header />
      <LastNews />
      <HomeNews />
      <Videos />
      <Karta />
      <Links />
      <Map />
    </>
  );
};

export default Home;
