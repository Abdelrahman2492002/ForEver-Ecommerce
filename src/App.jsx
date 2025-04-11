import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import NavBar from "./components/navBar/NavBar";
import Collection from "./pages/Collection";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div className="font-outfit">
      <NavBar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
