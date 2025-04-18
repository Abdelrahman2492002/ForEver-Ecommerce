import React, { useEffect, useState } from "react";
import ViewProductImage from "../components/product/ViewProductImage";
import { useParams } from "react-router";
import { useShopStore } from "../store/shopStore";
import ProductDetails from "../components/product/ProductDetails";
import ProductDescription from "../components/product/ProductDescription";
import RelatedProducts from "../components/product/RelatedProducts";

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

  useEffect(() => {
    if (product.length > 0) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [product]);

  return (
    <div
      className={`border-borderColor ${product.length > 0 ? "opacity-100" : "opacity-0"} mx-7 border-t pt-7 pb-5 transition-opacity duration-700 ease-in-out sm:mx-16 lg:mx-32`}
    >
      {product.map((item, index) => (
        <div
          key={index}
          className="mb-32 flex flex-col items-start gap-10 md:flex-row"
        >
          <ViewProductImage images={item.image} />
          <ProductDetails
            name={item.name}
            price={item.price}
            description={item.description}
            sizes={item.sizes}
          />
        </div>
      ))}

      <ProductDescription />
      {product.length > 0 && (
        <RelatedProducts
          category={product[0].category}
          subCategory={product[0].subCategory}
        />
      )}
    </div>
  );
};

export default Product;
