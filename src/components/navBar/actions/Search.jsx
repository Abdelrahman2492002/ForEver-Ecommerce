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
      className="w-5 cursor-pointer"
    />
  );
};

export default Search;
