import { useShopStore } from "../../store/shopStore";
import SectionParagraph from "../common/SectionParagraph";
import SectionTitle from "../common/SectionTitle";
import ProductCard from "../common/ProductCard";

const LatestCollection = () => {
  const allProducts = useShopStore((state) => state.products);

  return (
    <div className="mx-7 pb-20 sm:mx-16 lg:mx-32">
      <SectionTitle text1="Latest" text2="Collections" />
      <SectionParagraph text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the." />
      <div className="grid grid-cols-2 gap-4 pt-11 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {allProducts.slice(0, 10).map((product, index) => (
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

export default LatestCollection;
