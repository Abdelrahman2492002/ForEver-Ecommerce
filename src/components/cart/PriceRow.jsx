import { useShopStore } from "../../store/shopStore";

const PriceRow = ({ title, value, isTitleBold }) => {
  const currency = useShopStore((state) => state.currency);

  return (
    <div className="border-borderColor5 flex items-center justify-between border-b py-2">
      <p className={`${isTitleBold && "font-bold"}`}>{title}</p>
      <data value={value}>
        {currency}
        {value}
      </data>
    </div>
  );
};

export default PriceRow;
