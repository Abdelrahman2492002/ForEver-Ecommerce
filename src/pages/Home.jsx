import BestSeller from "../components/home/BestSeller";
import Hero from "../components/home/Hero";
import LatestCollection from "../components/home/LatestCollection";
import OurPolicy from "../components/home/OurPolicy";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
    </div>
  );
};

export default Home;
