import React from "react";

const SectionTitle = ({ text1, text2 }) => {
  return (
    <div className="flex items-center justify-center gap-1 text-2xl font-normal uppercase md:text-3xl">
      <h2 className="text-Dark">
        <span className="text-greyLight2">{text1}</span> {text2}
      </h2>
      <span className="bg-greyMed h-[2px] w-12"></span>
    </div>
  );
};

export default SectionTitle;
