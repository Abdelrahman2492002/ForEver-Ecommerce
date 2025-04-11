import BestSeller from "../components/home/BestSeller";
import Hero from "../components/home/Hero";
import LatestCollection from "../components/home/LatestCollection";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
    </div>
  );
};

export default Home;
