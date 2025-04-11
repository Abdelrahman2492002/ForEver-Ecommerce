import { NavLink } from "react-router";

const NavigationLink = ({ path, children }) => {
  return (
    <li className="text-DarkLight text-sm md:text-base flex flex-col">
      <NavLink to={path} className="py-1">
        {children}
      </NavLink>
      <hr className="w-2/4 bg-DarkLight opacity-0 mx-auto h-[2px]" />
    </li>
  );
};

export default NavigationLink;
