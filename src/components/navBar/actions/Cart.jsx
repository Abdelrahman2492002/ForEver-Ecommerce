import React from "react";
import { assets } from "../../../assets/assets";

const Cart = () => {
  return (
    <div className="relative cursor-pointer">
      <img src={assets.cart_icon} alt="cart icon" className="w-5" />
      <span className="text-light absolute right-[-5px] bottom-[-8px] flex h-4 w-4 items-center justify-center rounded-full bg-black text-[11px]">
        1
      </span>
    </div>
  );
};

export default Cart;
