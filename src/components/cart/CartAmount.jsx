import { useShopStore } from "../../store/shopStore";
import { countCartAmount } from "../../store/utility";
import SectionTitle from "../common/SectionTitle";
import PriceRow from "./PriceRow";

const CartAmount = () => {
  const delivery__fee = useShopStore((state) => state.delivery__fee);
  const cartItems = useShopStore((state) => state.cartItems);
  const products = useShopStore((state) => state.products);
  const subTotal = countCartAmount(cartItems, products);

  return (
    <div className="mx-7 mt-10 flex justify-end sm:mx-16 sm:mt-20 lg:mx-32">
      <div className="w-full sm:w-2/4">
        <div className="flex justify-start">
          <SectionTitle text1="cart" text2="total" />
        </div>
        <div className="flex flex-col gap-2 py-4 text-sm text-black">
          <PriceRow title="Subtotal" value={subTotal} />
          <PriceRow title="Shipping Free" value={delivery__fee} />
          <PriceRow
            title="total"
            value={subTotal + delivery__fee}
            isTitleBold={true}
          />
        </div>
      </div>
    </div>
  );
};

export default CartAmount;
