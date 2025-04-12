import Logo from "../common/Logo";

const FooterAbout = () => {
  return (
    <div>
      <div className="justify-center max-sm:flex">
        <Logo />
      </div>
      <p className="text-greyExtraLight pt-9 leading-7">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
    </div>
  );
};

export default FooterAbout;
