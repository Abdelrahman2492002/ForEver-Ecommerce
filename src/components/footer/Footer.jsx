import FooterAbout from "./FooterAbout";
import FooterContact from "./FooterContact";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  return (
    <>
      <footer className="text-greyExtraLight mx-10 text-sm sm:mx-16 sm:text-base md:mx-20 lg:mx-32">
        <div className="flex grid-cols-[3fr_1fr_2fr] flex-col gap-8 text-center sm:grid sm:gap-14 sm:text-left">
          <FooterAbout />
          <FooterLinks />
          <FooterContact />
        </div>
      </footer>
      <p className="text-greyExtraLight border-borderColor mt-7 border-t py-3 text-center text-sm sm:mt-10 sm:py-5 sm:text-base">
        Copyright 2024 © GreatStack.dev - All Right Reserved.
      </p>
    </>
  );
};

export default Footer;
