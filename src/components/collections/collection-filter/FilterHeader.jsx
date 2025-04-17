import { assets } from "../../../assets/assets";

const FilterHeader = ({ showFilter, toggleShowFilter }) => {
  return (
    <div
      onClick={toggleShowFilter}
      className="flex items-center gap-2 max-sm:cursor-pointer"
    >
      <h3 className="text-darkLight2 text-2xl font-light sm:text-3xl">
        Filter
      </h3>
      <img
        src={assets.dropdown_icon}
        alt="dropdown_icon"
        className={`h-3 w-2 ${showFilter ? "rotate-90" : ""} transition-all sm:hidden`}
      />
    </div>
  );
};

export default FilterHeader;
