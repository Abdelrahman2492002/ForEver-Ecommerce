import { useState } from "react";

const ProductSize = ({ sizes }) => {
  const [size, setSize] = useState(false);

  return (
    <div className="pt-3 sm:pt-5">
      <p className="text-greyExtraLight pb-4">Select Size</p>
      <div className="flex gap-2">
        {sizes.map((item, index) => (
          <button
            key={index}
            onClick={() => setSize(item)}
            className={`${item === size ? "border-activeBorder" : "border-transparent"} bg-light2 cursor-pointer border px-4 py-2 text-sm sm:px-5 sm:py-3 sm:text-base`}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductSize;
