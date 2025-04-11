import { useShopStore } from "../../store/shopStore";

const ProductCard = ({ ...props }) => {
  const currency = useShopStore((state) => state.currency);

  return (
    <div className="text-greyMed cursor-pointer overflow-hidden text-sm">
      <img
        src={props.image}
        alt="product image"
        className="transition-all hover:scale-110"
      />
      <div className="pt-5">
        <h3>{props.name}</h3>
        <data value={props.price}>
          {currency}
          {props.price}
        </data>
      </div>
    </div>
  );
};

export default ProductCard;
