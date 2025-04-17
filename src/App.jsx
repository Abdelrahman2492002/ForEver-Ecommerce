import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import NavBar from "./components/navBar/NavBar";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/footer/Footer";
import { useShopStore } from "./store/shopStore";
import { useEffect } from "react";
import { products } from "./assets/assets";
import Searchbar from "./components/Searchbar";
import Product from "./pages/Product";

const App = () => {
  const setProducts = useShopStore((state) => state.setProducts);

  const fetchProduct = async () => {
    setProducts(products);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className="font-outfit">
      <NavBar />
      <Searchbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
