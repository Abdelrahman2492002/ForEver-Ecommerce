import { NavLink } from "react-router";

const NavigationLink = ({ path, children }) => {
  return (
    <li className="text-DarkLight flex flex-col text-sm">
      <NavLink to={path} className="py-1">
        {children}
      </NavLink>
      <hr className="bg-DarkLight mx-auto h-[2px] w-2/4 opacity-0" />
    </li>
  );
};

export default NavigationLink;
