import React, { useState } from "react";
import HamburgerIcon from "./HamburgerIcon";
import BackLink from "./BackLink";
import NavigationMobileLink from "./NavigationMobileLink";

const HamburgerMenu = () => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <div className="ml-1 sm:hidden">
      <HamburgerIcon onclick={() => setShowLinks(true)} />

      <nav
        className={`absolute ${showLinks ? "w-full" : "w-0"} bg-light inset-0 overflow-hidden transition-all`}
      >
        <ul className="flex w-full flex-col">
          <BackLink onclick={() => setShowLinks(false)} />
          <NavigationMobileLink onclick={() => setShowLinks(false)} path="/">
            HOME
          </NavigationMobileLink>
          <NavigationMobileLink
            onclick={() => setShowLinks(false)}
            path="/collection"
          >
            COLLECTION
          </NavigationMobileLink>
          <NavigationMobileLink
            onclick={() => setShowLinks(false)}
            path="/about"
          >
            ABOUT
          </NavigationMobileLink>
          <NavigationMobileLink
            onclick={() => setShowLinks(false)}
            path="/contact"
          >
            CONTACT
          </NavigationMobileLink>
        </ul>
      </nav>
    </div>
  );
};

export default HamburgerMenu;
