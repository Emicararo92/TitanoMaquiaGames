import DivLine from "../../utils/DivLine/DivLineBig";
import Hero from "./Hero/Hero";
import HomeInfo from "./HomeInfo/HomeInfo";
import ModelGallery3D from "../InfPat/Skins/ModelGallery3D/ModelGallery3D";
import Devs from "../Nosotros/Devs/Devs";
import CardsTabs from "../InfPat/InfPatContent/InfPatContent";

function Home() {
  return (
    <div>
      <div>
        <Hero />
      </div>
      <DivLine />
      <HomeInfo />
      <CardsTabs />
      <ModelGallery3D />

      <Devs />
    </div>
  );
}

export default Home;
