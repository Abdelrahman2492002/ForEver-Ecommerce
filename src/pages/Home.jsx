import BestSeller from "../components/home/BestSeller";
import Hero from "../components/home/Hero";
import LatestCollection from "../components/home/LatestCollection";
import NewsLetterBox from "../components/home/NewsLetterBox";
import OurPolicy from "../components/home/OurPolicy";

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BestSeller />
      <OurPolicy />
      <NewsLetterBox />
    </div>
  );
};

export default Home;
