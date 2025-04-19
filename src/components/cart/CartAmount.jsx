import { useShopStore } from "../../store/shopStore";
import { countCartAmount } from "../../store/utility";
import SectionTitle from "../common/SectionTitle";
import CartCheckoutButton from "./CartCheckoutButton";
import PriceRow from "./PriceRow";

const CartAmount = () => {
  const delivery__fee = useShopStore((state) => state.delivery__fee);
  const cartItems = useShopStore((state) => state.cartItems);
  const products = useShopStore((state) => state.products);
  const subTotal = countCartAmount(cartItems, products);

  return (
    <div className="w-full">
      <div className="flex justify-start text-lg sm:text-2xl">
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
        <CartCheckoutButton />
      </div>
    </div>
  );
};

export default CartAmount;
