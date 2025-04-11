import { NavLink } from "react-router";

const NavigationMobileLink = ({ path, onclick, children }) => {
  return (
    <NavLink
      to={path}
      onClick={onclick}
      className="border-b px-4 py-3 text-DarkLight cursor-pointer"
    >
      {children}
    </NavLink>
  );
};

export default NavigationMobileLink;
