import CollectionHeader from "../components/collections/CollectionHeader";
import CollectionFilter from "../components/collections/collection-filter/CollectionFilter";
import FilterTitle from "../components/collections/collection-filter/FilterTitle";
import FilterCheckbox from "../components/collections/collection-filter/FilterCheckbox";
import { useState } from "react";
import FilterHeader from "../components/collections/collection-filter/FilterHeader";
import { useShopStore } from "../store/shopStore";
import ProductCard from "../components/common/ProductCard";

const Collection = () => {
  const [showFilter, setShowFilter] = useState(false);
  const allProducts = useShopStore((state) => state.products);
  console.log(allProducts);
  return (
    <div className="mx-8 min-h-screen pt-7 pb-5 pb-96 sm:mx-16 lg:mx-36">
      <div className="flex flex-col gap-10 sm:flex-row">
        <div>
          <FilterHeader showFilter={showFilter} setShowFilter={setShowFilter} />
          <CollectionFilter showFilter={showFilter}>
            <FilterTitle title="Categories" />
            <FilterCheckbox name="Men" />
            <FilterCheckbox name="Women" />
            <FilterCheckbox name="Kids" />
          </CollectionFilter>
          <CollectionFilter showFilter={showFilter}>
            <FilterTitle title="Type" />
            <FilterCheckbox name="Topwear" />
            <FilterCheckbox name="Bottomwear" />
            <FilterCheckbox name="Winterwear" />
          </CollectionFilter>
        </div>
        <div className="flex-1">
          <CollectionHeader />
          <div className="grid grid-cols-2 gap-x-7 gap-y-8 pt-11 md:grid-cols-3 md:gap-y-11 lg:grid-cols-4">
            {allProducts.map((product, index) => (
              <ProductCard
                key={index}
                image={product.image[0]}
                name={product.name}
                price={product.price}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
