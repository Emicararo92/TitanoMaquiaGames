import Banner from "../../utils/Banner/Banner";
import DivLine from "../../utils/DivLine/DivLineBig";
import DivLineSmall from "../../utils/DivLine/DivLineSmall";
import Hero from "./Hero/Hero";
import HomeInfo from "./HomeInfo/HomeInfo";
import InfPat from "../InfPat/HomePat/InfPat";
import ModelGallery3D from "../InfPat/Skins/ModelGallery3D/ModelGallery3D";
import Devs from "../Nosotros/Devs/Devs";

function Home() {
  return (
    <div>
      <Hero />
     
      <HomeInfo />
      <Banner
        backgroundImage={
          "https://res.cloudinary.com/dcn7oqg4l/image/upload/v1755019641/BannerB_hebblh.jpg"
        }
        slogan={"Infinite Pathways"}
        id={"INF"}
      />
      <DivLine logoSrc={"/Icon.png"} />
      <InfPat />
      <DivLineSmall />
      <ModelGallery3D />
      <DivLineSmall />
      <Banner
        backgroundImage={
          "https://res.cloudinary.com/dcn7oqg4l/image/upload/v1755019640/BannerA_rxexph.jpg"
        }
        slogan={"Quienes Somos"}
        id={"NOSOTROS"}
      />
      <DivLine logoSrc={"/Icon.png"} />
      <Devs />
      <DivLineSmall />
    </div>
  );
}

export default Home;
