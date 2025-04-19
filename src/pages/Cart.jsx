import { useEffect, useState } from "react";
import { useShopStore } from "../store/shopStore";
import { generateCartProductList } from "../store/utility";
import SectionTitle from "../components/common/SectionTitle";
import CartProduct from "../components/cart/CartProduct";
import CartAmount from "../components/cart/CartAmount";

const Cart = () => {
  const cartItems = useShopStore((state) => state.cartItems);
  const allProducts = useShopStore((state) => state.products);
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const makeCartProduct = generateCartProductList(cartItems);
    setCartProducts(makeCartProduct);
  }, [cartItems]);

  return (
    <div className="border-borderColor4 mx-7 min-h-screen border-t py-10 sm:mx-16 md:py-16 lg:mx-32">
      <div className="flex justify-start text-lg sm:text-2xl">
        <SectionTitle text1="your" text2="cart" />
      </div>
      <div>
        {cartProducts.map((item, index) => {
          const productData = allProducts.find(
            (product) => product._id === item._id,
          );
          return (
            <CartProduct
              key={index}
              id={item._id}
              image={productData.image}
              name={productData.name}
              price={productData.price}
              size={item.size}
              quantity={item.quantity}
            />
          );
        })}
      </div>
      <div className="mt-20 flex justify-end">
        <div className="w-[450px]">
          <CartAmount />
        </div>
      </div>
    </div>
  );
};

export default Cart;
