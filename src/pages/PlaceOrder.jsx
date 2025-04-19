import DeliveryInfo from "../components/place-order/DeliveryInfo";
import OrderAmount from "../components/place-order/OrderAmount";
import PaymentMethod from "../components/place-order/PaymentMethod";
import PrimaryButton from "../components/common/PrimaryButton";

const PlaceOrder = () => {
  return (
    <div className="border-borderColor4 mx-7 mb-28 border-t py-10 sm:mx-16 md:py-16 lg:mx-32">
      <form className="flex flex-col justify-between gap-x-4 gap-y-20 md:flex-row lg:items-center lg:gap-28">
        <DeliveryInfo />
        <div className="min-w-80">
          <OrderAmount />
          <PaymentMethod />
          <div className="float-right">
            <PrimaryButton redirectTo="/my-order" text="Place Order" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default PlaceOrder;
