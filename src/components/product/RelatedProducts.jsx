import { useEffect, useState } from "react";
import { useShopStore } from "../../store/shopStore";
import ProductCard from "../common/ProductCard";
import SectionTitle from "../common/SectionTitle";

const RelatedProducts = ({ category, subCategory }) => {
  const allProducts = useShopStore((state) => state.products);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    if (allProducts) {
      let result = allProducts.filter(
        (item) =>
          item.category === category && item.subCategory === subCategory,
      );
      setRelatedProducts(result);
    }
  }, [allProducts, category, subCategory]);

  return (
    <div className="mt-20 mb-64">
      <div className="text-xl sm:text-3xl">
        <SectionTitle text1="RELATED" text2="PRODUCTS" />
      </div>
      <div className="grid grid-cols-2 gap-4 pt-11 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {relatedProducts.slice(1, 6).map((product, index) => (
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

export default RelatedProducts;
