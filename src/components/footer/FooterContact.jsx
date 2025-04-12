import React from "react";
import FooterSubTitle from "./FooterSubTitle";

const FooterContact = () => {
  return (
    <div>
      <FooterSubTitle title="GET IN TOUCH" />
      <div className="flex flex-row gap-2 md:flex-col">
        <address className="not-italic">+1-212-456-7890</address>
        <a
          className="hover:text-dark w-full break-all transition-colors hover:underline"
          href="mailto:abdelrahmanesmailahmedkhalaph2492002@gmail.com"
        >
          abdelrahmanesmailahmedkhalaph2492002@gmail.com
        </a>
      </div>
    </div>
  );
};

export default FooterContact;
