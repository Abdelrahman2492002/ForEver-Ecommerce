import React from "react";
import { assets } from "../../../assets/assets";

const DarkMode = () => {
  return (
    <div className="cursor-pointer">
      <img src={assets.darkIcon} alt="nightMode icon" className="h-6 w-6" />
    </div>
  );
};

export default DarkMode;
