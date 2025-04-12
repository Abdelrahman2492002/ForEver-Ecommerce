import React from "react";

const FilterCheckbox = ({ name }) => {
  return (
    <div>
      <div className="text-greyDark flex items-center gap-2 text-sm">
        <input
          type="checkbox"
          value={name}
          className="border-borderColor3 w-3"
          id={name}
        />
        <label className="flex-1 cursor-pointer" htmlFor={name}>
          {name}
        </label>
      </div>
    </div>
  );
};

export default FilterCheckbox;
