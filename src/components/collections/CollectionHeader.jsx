import React from "react";
import SectionTitle from "../common/SectionTitle";

const CollectionHeader = ({ onchange }) => {
  return (
    <div className="mb-6 flex flex-col items-center justify-between gap-5 lg:flex-row">
      <div className="text-lg sm:text-2xl">
        <SectionTitle text1="All" text2="Collections" />
      </div>
      <select
        className="border-borderColor4 max-w-3xs border px-2 py-3 text-sm outline-0"
        onChange={onchange}
      >
        <option value="relavent">Sort by: Price: Relavent</option>
        <option value="low-high">Sort by: Price: Low To High</option>
        <option value="high-low">Sort by: Price: High To Low</option>
      </select>
    </div>
  );
};

export default CollectionHeader;
