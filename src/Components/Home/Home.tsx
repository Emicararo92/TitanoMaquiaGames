import DivLine from "../../utils/DivLine/DivLineBig";
import Hero from "./Hero/Hero";
import HomeInfo from "./HomeInfo/HomeInfo";
import ModelGallery3D from "../InfPat/Skins/ModelGallery3D/ModelGallery3D";
import Devs from "../Devs/Devs";
import CardsTabs from "../InfPat/InfPatContent/InfPatContent";
import OurOrigins from "../NuestrosOrigenes/NuestrosOrigenes";
import Partners from "../Partners/partners";

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
      <OurOrigins />
      <Partners />
    </div>
  );
}

export default Home;
