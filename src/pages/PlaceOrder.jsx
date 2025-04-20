import { useNavigate } from "react-router";
import DeliveryInfo from "../components/place-order/DeliveryInfo";
import OrderAmount from "../components/place-order/OrderAmount";
import PaymentMethod from "../components/place-order/PaymentMethod";

const PlaceOrder = () => {
  const navigate = useNavigate();
  const onFormSubmit = (e) => {
    e.preventDefault();
    if (e.target.checkValidity()) {
      navigate("/my-order");
    } else {
      alert("Please complete form with valid data");
    }
  };
  return (
    <div className="border-borderColor4 mx-7 mb-28 border-t py-10 sm:mx-16 md:py-16 lg:mx-32">
      <form
        onSubmit={onFormSubmit}
        className="flex flex-col justify-between gap-x-4 gap-y-20 md:flex-row lg:items-center lg:gap-28"
      >
        <DeliveryInfo />
        <div className="min-w-80">
          <OrderAmount />
          <PaymentMethod />
          <div className="float-right">
            <button className="text-light active:bg-activeBorder active:text-dark mt-4 w-full cursor-pointer self-end bg-black px-5 py-3 text-sm font-semibold uppercase transition sm:w-60">
              Place Order
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PlaceOrder;
