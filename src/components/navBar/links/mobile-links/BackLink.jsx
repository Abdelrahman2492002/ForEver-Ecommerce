import React from "react";
import { assets } from "../../../../assets/assets";

const BackLink = ({ onclick }) => {
  return (
    <li
      onClick={onclick}
      className="text-DarkLight flex cursor-pointer items-center gap-2 border-b p-3"
    >
      <img
        src={assets.dropdown_icon}
        alt="dropdown_icon"
        className="w-2 rotate-180"
      />
      <p>BACK</p>
    </li>
  );
};

export default BackLink;
