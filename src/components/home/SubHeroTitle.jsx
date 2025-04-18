import React from "react";

const SubHeroTitle = ({ isReverse, title, height }) => {
  return (
    <div
      className={`flex items-center ${isReverse && "flex-row-reverse"} gap-2`}
    >
      <span
        className={`bg-greyMed2 ${height ? height : "h-[2px]"} w-11`}
      ></span>
      <p className="text-sm font-medium uppercase md:text-base">{title}</p>
    </div>
  );
};

export default SubHeroTitle;
