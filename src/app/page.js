import Navbar from "./commponents/global/Navbar";
import Footer from "./commponents/global/Footer";
import HomeBody from "./commponents/home/HomeBody";
import ParticlesBackground from "./commponents/home/ParticlesBackground";

export default function Home() {
  return (
    <>
      <ParticlesBackground />
      <Navbar />
      <HomeBody />
      <Footer />
    </>
  );
}
