import React from "react";

const HamburgerIcon = ({ onclick }) => {
  return (
    <div onClick={onclick} className="ml-1 sm:hidden">
      <div className="group flex w-7 [transform:scaleX(-1)] cursor-pointer flex-col gap-y-1.5">
        <span className="bg-darkLight h-[3px] w-full rounded-sm"></span>
        <span className="bg-darkLight h-[3px] w-[70%] rounded-sm transition-all group-hover:w-full"></span>
        <span className="bg-darkLight h-[3px] w-[50%] rounded-sm transition-all group-hover:w-full"></span>
      </div>
    </div>
  );
};

export default HamburgerIcon;
