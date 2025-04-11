import React from "react";
import { assets } from "../../../assets/assets";

const Search = () => {
  return (
    <div>
      <img
        src={assets.search_icon}
        alt="search icon"
        className="w-4 h-4 md:w-6 md:h-6"
      />
    </div>
  );
};

export default Search;
