import { useShopStore } from "../../store/shopStore";

const AddProductButton = ({ id, size }) => {
  const addToCart = useShopStore((state) => state.addToCart);

  return (
    <button
      onClick={() => {
        addToCart(id, size);
      }}
      className="text-light active:bg-activeBorder active:text-dark mt-8 w-fit cursor-pointer bg-black px-5 py-3 text-sm font-semibold uppercase transition sm:px-8 sm:py-4 sm:text-base"
    >
      add to cart
    </button>
  );
};

export default AddProductButton;
