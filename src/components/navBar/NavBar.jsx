import Logo from "./Logo";
import NavbarActions from "./actions/NavbarActions";
import NavigationLinks from "./links/big-screen/NavigationLinks";

const NavBar = () => {
  return (
    <header className="mx-8 pt-7 pb-5 sm:mx-16 lg:mx-36">
      <div className="flex items-center justify-between gap-2">
        <Logo />
        <NavigationLinks />
        <NavbarActions />
      </div>
    </header>
  );
};

export default NavBar;
