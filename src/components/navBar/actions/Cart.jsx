import React from "react";
import { assets } from "../../../assets/assets";

const Cart = () => {
  return (
    <div className="relative cursor-pointer ">
      <img
        src={assets.cart_icon}
        alt="cart icon"
        className="w-4 h-5 md:w-5 md:h-6"
      />
      <span className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-Dark text-light text-13 absolute bottom-[-8px] right-[-10px] justify-center items-center flex">
        1
      </span>
    </div>
  );
};

export default Cart;
