import React from "react";
import { assets } from "../../../assets/assets";
import { useShopStore } from "../../../store/shopStore";

const Search = () => {
  const toggleSearch = useShopStore((state) => state.toggleShowSearch);

  return (
    <img
      onClick={toggleSearch}
      src={assets.search_icon}
      alt="search icon"
      className="h-4 w-4 cursor-pointer md:h-6 md:w-6"
    />
  );
};

export default Search;
