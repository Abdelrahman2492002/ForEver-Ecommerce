import { Link } from "react-router";
import { assets } from "../../assets/assets";

const Logo = () => {
  const mode = "light";
  return (
    <Link to="/" onClick={() => scrollTo(0, 0)}>
      <img
        src={mode === "dark" ? assets.logo_light : assets.logo_dark}
        alt="logo icon"
        className="w-24 md:w-40"
      />
    </Link>
  );
};

export default Logo;
