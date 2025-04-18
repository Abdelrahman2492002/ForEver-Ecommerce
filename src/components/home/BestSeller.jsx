import { useEffect, useState } from "react";
import SectionTitle from "../common/SectionTitle";
import SectionParagraph from "../common/SectionParagraph";
import { useShopStore } from "../../store/shopStore";
import ProductCard from "../common/ProductCard";

const BestSeller = () => {
  const allProducts = useShopStore((state) => state.products);
  const [bestSeller, setBestSeller] = useState([]);

  useEffect(() => {
    if (allProducts) {
      setBestSeller(allProducts.filter((product) => product.bestseller));
    }
  }, [allProducts]);
  return (
    <div className="mx-7 pb-20 sm:mx-16 lg:mx-32">
      <SectionTitle text1="best" text2="seller" />
      <SectionParagraph
        text="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the."
      />
      <div className="grid grid-cols-2 gap-4 pt-11 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {bestSeller.slice(0, 5).map((product, index) => (
          <ProductCard
            key={index}
            id={product._id}
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
