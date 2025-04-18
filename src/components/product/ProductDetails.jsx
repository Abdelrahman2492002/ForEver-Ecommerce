import { useState } from "react";
import { useShopStore } from "../../store/shopStore";
import ProductGuaranteeInfo from "./ProductGuaranteeInfo";
import ProductRating from "./ProductRating";
import ProductSize from "./ProductSize";
import AddProductButton from "./AddProductButton";

const ProductDetails = ({ id, name, price, description, sizes }) => {
  const [size, setSize] = useState(false);
  const currency = useShopStore((state) => state.currency);

  return (
    <div className="flex-1">
      <h2 className="text-darkMed mb-3 text-xl font-medium md:text-3xl">
        {name}
      </h2>
      <ProductRating />
      <data
        className="text-darkLight mb-3 block text-xl sm:mb-5 md:text-3xl"
        value={price}
      >
        {currency}
        {price}
      </data>
      <p className="text-greyExtraLight text-sm md:text-base">{description}</p>
      <ProductSize size={size} setSize={setSize} sizes={sizes} />
      <AddProductButton id={id} size={size} />
      <ProductGuaranteeInfo />
    </div>
  );
};

export default ProductDetails;
