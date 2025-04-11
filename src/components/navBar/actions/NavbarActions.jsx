import HamburgerMenu from "../links/mobile-links/HamburgerMenu";
import Cart from "./Cart";
import DarkMode from "./DarkMode";
import Log from "./Log";
import Search from "./Search";

const NavbarActions = () => {
  return (
    <div className="flex items-center gap-4 md:gap-6 lg:gap-8">
      <DarkMode />
      <Search />
      <Log />
      <Cart />
      <HamburgerMenu />
    </div>
  );
};

export default NavbarActions;
