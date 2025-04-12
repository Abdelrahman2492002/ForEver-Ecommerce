import FooterSubTitle from "./FooterSubTitle";
import FooterLink from "./FooterLink";

const FooterLinks = () => {
  return (
    <div>
      <FooterSubTitle title="COMPANY" />
      <ul className="flex flex-row gap-5 max-sm:justify-center sm:flex-col sm:gap-2">
        <FooterLink path="/" name="Home" />
        <FooterLink path="/about" name="About us" />
        <FooterLink path="/delivery" name="Delivery" />
        <FooterLink path="/" name="Privacy policy" />
      </ul>
    </div>
  );
};

export default FooterLinks;
