import React from "react";
import SectionTitle from "../components/common/SectionTitle";
import { useShopStore } from "../store/shopStore";
import OrderProduct from "../components/my-order/OrderProduct";

const MyOrder = () => {
  const products = useShopStore((state) => state.products);
  return (
    <div className="border-borderColor4 mx-7 mb-28 min-h-screen border-t py-10 sm:mx-16 md:py-16 lg:mx-32">
      <div className="mb-8 flex justify-start text-lg md:text-2xl">
        <SectionTitle text1="my" text2="order" />
      </div>
      <div>
        {products.slice(1, 4).map((product) => (
          <OrderProduct
            image={product.image}
            name={product.name}
            price={product.price}
            size={product.sizes}
          />
        ))}
      </div>
    </div>
  );
};

export default MyOrder;
