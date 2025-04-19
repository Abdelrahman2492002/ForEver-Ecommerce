import React from "react";
import { assets } from "../../../assets/assets";
import { useShopStore } from "../../../store/shopStore";
import { Link } from "react-router";

const CartIcon = () => {
  const cartCount = useShopStore((state) => state.cartItemsCount());

  return (
    <Link to="/cart" className="relative cursor-pointer">
      <img src={assets.cart_icon} alt="cart icon" className="w-5" />
      <span className="text-light absolute right-[-5px] bottom-[-8px] flex h-4 w-4 items-center justify-center rounded-full bg-black text-[11px]">
        {cartCount}
      </span>
    </Link>
  );
};

export default CartIcon;
