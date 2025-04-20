import { useShopStore } from "../../store/shopStore";

const OrderProduct = ({ image, name, price, size }) => {
  const currency = useShopStore((state) => state.currency);
  return (
    <div className="text-greyLight3 border-borderColor4 grid grid-cols-1 items-center gap-6 border-t border-b py-4 md:grid-cols-[3fr_1fr_1fr]">
      <div className="flex gap-4 max-md:col-span-3 md:gap-6">
        <img src={image[0]} alt="product image" className="w-20" />
        <div>
          <h3 className="pb-3 text-xs font-medium md:text-lg">{name}</h3>
          <div className="flex items-center gap-5 text-sm sm:text-base">
            <data value={price}>
              {currency}
              {price}
            </data>
            <p>Quantity: 1</p>
            <p>Size: {size[1]}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 text-xs md:text-base">
        <span className="h-2.5 w-2.5 rounded-full bg-green-400"></span>
        <p>Ready To ship</p>
      </div>
      <button className="border-borderColor2 cursor-pointer border px-4 py-2 text-xs transition-colors hover:bg-green-400 md:text-base">
        Track Order
      </button>
    </div>
  );
};

export default OrderProduct;
