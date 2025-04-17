import React, { useEffect, useState } from "react";
import ViewProductImage from "../components/product/ViewProductImage";
import { useParams } from "react-router";
import { useShopStore } from "../store/shopStore";
import ProductDetails from "../components/product/ProductDetails";

const Product = () => {
  const { id } = useParams();
  const allProducts = useShopStore((state) => state.products);
  const [product, setProduct] = useState([]);

  useEffect(() => {
    if (allProducts) {
      const getProduct = allProducts.filter((item) => item._id === id);
      setProduct(getProduct);
    }
  }, [allProducts, id]);


  return (
    <div className="mx-8 min-h-screen pt-7 pb-5 sm:mx-16 lg:mx-36">
      {product.map((item) => (
          <div className="flex">
            <ViewProductImage images={item.image} key={item._id} />
            <ProductDetails name={item.name}/>
          </div>
        ))}
    </div>
  );
};

export default Product;
