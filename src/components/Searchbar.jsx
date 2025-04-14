import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { useShopStore } from "../store/shopStore";
import { useLocation } from "react-router";

const Searchbar = () => {
  const show = useShopStore((state) => state.showSearch);
  const [visible, setVisible] = useState(false);
  const closeSearch = useShopStore((state) => state.closeSearch);
  const setSearchText = useShopStore((state) => state.setSearchText);
  const searchText = useShopStore((state) => state.searchText);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  return (
    <div
      className={` ${show && visible ? "max-h-52" : "max-h-0 overflow-hidden"} mx-8 bg-gray-50 transition-all sm:mx-16 lg:mx-36`}
    >
      <div className="border-borderColor flex items-center justify-center gap-2 border-t border-b px-5 py-4 sm:gap-4 sm:py-6">
        <div className="border-borderColor3 flex max-w-full items-center gap-1 rounded-full border px-4 md:w-1/2">
          <input
            type="text"
            placeholder="Search"
            className="placeholder:text-greyExtraLight min-w-0 py-1 outline-0 sm:flex-1 sm:py-1.5"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <img src={assets.search_icon} alt="search_icon" className="w-4" />
        </div>
        <img
          src={assets.cross_icon}
          alt="cross_icon"
          className="h-4 w-4 cursor-pointer"
          onClick={closeSearch}
        />
      </div>
    </div>
  );
};

export default Searchbar;
