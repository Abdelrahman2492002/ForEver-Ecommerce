import React from "react";
import SectionTitle from "../common/SectionTitle";

const CollectionHeader = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-5 lg:flex-row">
      <SectionTitle text1="All" text2="Collections" />
      <select className="border-borderColor4 max-w-3xs border px-2 py-3 outline-0">
        <option value="relavent">Sort by: Price: Relavent</option>
        <option value="low-high">Sort by: Price: Low To High</option>
        <option value="high-low">Sort by: Price: High To Low</option>
      </select>
    </div>
  );
};

export default CollectionHeader;
