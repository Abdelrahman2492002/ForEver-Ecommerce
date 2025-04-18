import Logo from "../common/Logo";
import NavbarActions from "./actions/NavbarActions";
import NavigationLinks from "./links/big-screen/NavigationLinks";

const NavBar = () => {
  return (
    <header className="mx-7 py-5 sm:mx-16 lg:mx-32">
      <div className="flex items-center justify-between gap-2">
        <Logo />
        <NavigationLinks />
        <NavbarActions />
      </div>
    </header>
  );
};

export default NavBar;
