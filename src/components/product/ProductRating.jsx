import { assets } from "../../assets/assets.js";
const ProductRating = () => {
  return (
    <div className="mb-3 flex items-center gap-1 sm:mb-5">
      {Array.from({ length: 4 }).map((_, i) => (
        <img key={i} src={assets.star_icon} alt="star_icon" className="w-3.5" />
      ))}
      <img src={assets.star_dull_icon} alt="star_icon" className="w-3.5" />
      <p>(122)</p>
    </div>
  );
};

export default ProductRating;
