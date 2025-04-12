import { Link } from "react-router";

const FooterLink = ({ path, name }) => {
  return (
    <Link
      className="hover:text-dark cursor-pointer transition-colors hover:underline"
      to={path}
      onClick={() => scrollTo(0, 0)}
    >
      {name}
    </Link>
  );
};

export default FooterLink;
