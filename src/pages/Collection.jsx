import CollectionHeader from "../components/collections/CollectionHeader";
import CollectionFilter from "../components/collections/collection-filter/CollectionFilter";
import FilterTitle from "../components/collections/collection-filter/FilterTitle";
import FilterCheckbox from "../components/collections/collection-filter/FilterCheckbox";
import { useEffect, useState } from "react";
import FilterHeader from "../components/collections/collection-filter/FilterHeader";
import ProductCard from "../components/common/ProductCard";

import {
  filterProducts,
  orderProducts,
  toggleCategory,
} from "../components/collections/utilityCollection";
import { useShopStore } from "../store/shopStore";

const Collection = () => {
  const [showFilter, setShowFilter] = useState(true);
  const [category, setCategory] = useState([]);
  const [typeCategory, setTypeCategory] = useState([]);
  const [filterdProducts, setFilteredProducts] = useState([]);
  const [orderPrice, setOrderPrice] = useState("");
  const allProducts = useShopStore((state) => state.products);
  const searchText = useShopStore((state) => state.searchText);

  const handleFilterChange = (array, e, setterFn) => {
    const categoryArr = toggleCategory(array, e.target.value);
    setterFn(categoryArr);
  };

  useEffect(() => {
    let filtered = filterProducts(allProducts, category, typeCategory);
    if (searchText.trim() !== "") {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(searchText.toLowerCase()),
      );
    }
    const order = orderProducts(filtered, orderPrice);
    setFilteredProducts(order);
  }, [allProducts, category, typeCategory, orderPrice, searchText]);

  return (
    <div className="border-borderColor4 mx-7 border-t pt-10 pb-96 sm:mx-16 lg:mx-32">
      <div className="flex flex-col gap-10 sm:flex-row">
        <div>
          <FilterHeader
            showFilter={showFilter}
            toggleShowFilter={() => setShowFilter(!showFilter)}
          />
          <CollectionFilter showFilter={showFilter}>
            <FilterTitle title="Categories" />
            <FilterCheckbox
              name="Men"
              onchange={(e) => handleFilterChange(category, e, setCategory)}
            />
            <FilterCheckbox
              name="Women"
              onchange={(e) => handleFilterChange(category, e, setCategory)}
            />
            <FilterCheckbox
              name="Kids"
              onchange={(e) => handleFilterChange(category, e, setCategory)}
            />
          </CollectionFilter>
          <CollectionFilter showFilter={showFilter}>
            <FilterTitle title="Type" />
            <FilterCheckbox
              name="Topwear"
              onchange={(e) =>
                handleFilterChange(typeCategory, e, setTypeCategory)
              }
            />
            <FilterCheckbox
              name="Bottomwear"
              onchange={(e) =>
                handleFilterChange(typeCategory, e, setTypeCategory)
              }
            />
            <FilterCheckbox
              name="Winterwear"
              onchange={(e) =>
                handleFilterChange(typeCategory, e, setTypeCategory)
              }
            />
          </CollectionFilter>
        </div>
        <div className="flex-1">
          <CollectionHeader onchange={(e) => setOrderPrice(e.target.value)} />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {filterdProducts.map((product, index) => (
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
      </div>
    </div>
  );
};

export default Collection;
