import { useNavigate } from "react-router";

const CartCheckoutButton = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => navigate("/place-order")}
      className="text-light active:bg-activeBorder active:text-dark mt-4 w-full cursor-pointer self-end bg-black px-5 py-3 text-sm font-semibold uppercase transition sm:w-fit"
    >
      Proceed to checkout
    </button>
  );
};

export default CartCheckoutButton;
