import { useShopStore } from "../../store/shopStore";
import ProductGuaranteeInfo from "./ProductGuaranteeInfo";
import ProductRating from "./ProductRating";
import ProductSize from "./ProductSize";

const ProductDetails = ({ name, price, description, sizes }) => {
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
      <ProductSize sizes={sizes} />
      <button className="text-light active:bg-activeBorder active:text-dark mt-8 w-fit cursor-pointer bg-black px-5 py-3 text-sm font-semibold uppercase transition sm:px-8 sm:py-4 sm:text-base">
        add to cart
      </button>
      <ProductGuaranteeInfo />
    </div>
  );
};

export default ProductDetails;
