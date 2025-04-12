import React from "react";
import SectionTitle from "../common/SectionTitle";
import SectionParagraph from "../common/SectionParagraph";
import { useShopStore } from "../../store/shopStore";
import ProductCard from "../common/ProductCard";

const BestSeller = () => {
  const allProducts = useShopStore((state) => state.products);
  return (
    <div className="mx-7 pt-5 pb-20 sm:mx-24 lg:mx-44">
      <SectionTitle text1="best" text2="seller" />
      <SectionParagraph
        text="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the."
      />
      <div className="grid grid-cols-2 gap-x-7 gap-y-8 pt-11 sm:grid-cols-3 md:grid-cols-4 md:gap-y-11 lg:grid-cols-5">
        {allProducts.slice(10, 15).map((product, index) => (
          <ProductCard
            key={index}
            image={product.image[0]}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
