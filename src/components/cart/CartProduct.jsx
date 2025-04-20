import { assets } from "../../assets/assets";
import { useShopStore } from "../../store/shopStore";

const CartProduct = ({ id, image, name, price, size, quantity }) => {
  const currency = useShopStore((state) => state.currency);
  const updateQuantity = useShopStore((state) => state.updateCartQuantity);
  return (
    <div className="text-greyLight3 border-borderColor4 grid grid-cols-[3fr_0.5fr_0.5fr] items-center border-t border-b py-4 md:grid-cols-[3fr_1fr_0.5fr]">
      <div className="flex gap-4 md:gap-6">
        <img src={image[0]} alt="product image" className="w-20" />
        <div>
          <h3 className="pb-3 text-xs font-medium md:text-lg">{name}</h3>
          <div className="flex items-center gap-5 text-sm sm:text-base">
            <data value={price}>
              {currency}
              {price}
            </data>
            <button className="bg-light2 border-borderColor4 border px-2 py-1 text-xs md:px-3 md:text-sm">
              {size}
            </button>
          </div>
        </div>
      </div>
      <input
        className="border-borderColor5 w-10 border px-2 py-1 outline-0 md:w-20"
        type="number"
        min={1}
        defaultValue={quantity}
        onChange={(e) => updateQuantity(id, size, Number(e.target.value))}
      />
      <div>
        <img
          src={assets.bin_icon}
          className="w-5 cursor-pointer max-sm:justify-self-end md:w-6"
          alt="bin icon"
          onClick={() => updateQuantity(id, size, 0)}
        />
      </div>
    </div>
  );
};

export default CartProduct;
