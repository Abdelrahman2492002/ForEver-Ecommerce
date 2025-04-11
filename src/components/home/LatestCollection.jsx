import { useEffect } from "react";
import { products } from "../../assets/assets";
import { useShopStore } from "../../store/shopStore";
import SectionParagraph from "../common/SectionParagraph";
import SectionTitle from "../common/SectionTitle";
import ProductCard from "../common/ProductCard";

const LatestCollection = () => {
  const setProducts = useShopStore((state) => state.setProducts);
  const allProducts = useShopStore((state) => state.products);

  const fetchProduct = async () => {
    setProducts(products);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  console.log(allProducts);

  return (
    <div className="mx-10 pt-5 pb-20 sm:mx-24 lg:mx-44">
      <SectionTitle text1="Latest" text2="Collections" />
      <SectionParagraph text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the." />
      <div className="grid grid-cols-2 gap-x-7 gap-y-8 pt-11 sm:grid-cols-3 md:grid-cols-4 md:gap-y-11 lg:grid-cols-5">
        {allProducts.slice(0, 10).map((product) => (
          <ProductCard
            image={product.image[0]}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestCollection;
