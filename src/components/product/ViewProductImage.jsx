import { useState } from "react";

const ViewProductImage = ({ images }) => {
  const [selectecImage, setSelectedImage] = useState(images[0]);
  return (
    <div className="flex w-full flex-col gap-1 sm:w-1/2 sm:flex-row">
      <div className="flex w-full flex-row justify-between gap-2 overflow-x-auto sm:w-[20%] sm:flex-col sm:overflow-y-scroll">
        {images.map((item, i) => (
          <img
            key={i}
            src={item}
            alt="product image"
            className="w-[24%] cursor-pointer sm:w-full"
            onClick={() => setSelectedImage(item)}
          />
        ))}
      </div>
      <div className="flex-1">
        <img src={selectecImage} alt="" />
      </div>
    </div>
  );
};

export default ViewProductImage;
