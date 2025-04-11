import React from "react";
import { assets } from "../../../assets/assets";

const DarkMode = () => {
  return (
    <div className="cursor-pointer">
      <img
        src={assets.darkIcon}
        alt="nightMode icon"
        className="w-6 h-6 md:w-8 md:h-8"
      />
    </div>
  );
};

export default DarkMode;
