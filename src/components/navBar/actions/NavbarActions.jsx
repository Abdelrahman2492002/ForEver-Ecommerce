import HamburgerMenu from "../links/mobile-links/HamburgerMenu";
import CartIcon from "./CartIcon";
import DarkMode from "./DarkMode";
import Log from "./Log";
import Search from "./Search";

const NavbarActions = () => {
  return (
    <div className="flex items-center gap-4 lg:gap-6">
      <DarkMode />
      <Search />
      <Log />
      <CartIcon />
      <HamburgerMenu />
    </div>
  );
};

export default NavbarActions;
