import React from "react";
import { assets } from "../../../assets/assets";

const Cart = () => {
  return (
    <div className="relative cursor-pointer">
      <img
        src={assets.cart_icon}
        alt="cart icon"
        className="h-5 w-4 md:h-6 md:w-5"
      />
      <span className="text-light text-13 absolute right-[-10px] bottom-[-8px] flex h-4 w-4 items-center justify-center rounded-full bg-black md:h-5 md:w-5">
        1
      </span>
    </div>
  );
};

export default Cart;
