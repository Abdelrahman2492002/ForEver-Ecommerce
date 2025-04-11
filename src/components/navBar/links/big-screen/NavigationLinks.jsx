import NavigationLink from "./NavigationLink";

const NavigationLinks = () => {
  return (
    <nav className="hidden sm:block">
      <ul className="flex items-center gap-x-5">
        <NavigationLink path="/">HOME</NavigationLink>
        <NavigationLink path="/collection">COLLECTION</NavigationLink>
        <NavigationLink path="/about">ABOUT</NavigationLink>
        <NavigationLink path="/contact">CONTACT</NavigationLink>
      </ul>
    </nav>
  );
};

export default NavigationLinks;
