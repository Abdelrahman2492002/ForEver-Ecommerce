import React from "react";
import { assets } from "../../../../assets/assets";

const BackLink = ({ onclick }) => {
  return (
    <li
      onClick={onclick}
      className="flex items-center gap-2 text-DarkLight p-3 border-b"
    >
      <img
        src={assets.dropdown_icon}
        alt="dropdown_icon"
        className="rotate-180 w-2"
      />
      <p>BACK</p>
    </li>
  );
};

export default BackLink;
