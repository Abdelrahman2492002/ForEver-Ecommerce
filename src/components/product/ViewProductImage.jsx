import { useEffect, useState } from "react";

const ViewProductImage = ({ images }) => {
  const [selectecImage, setSelectedImage] = useState(images[0]);

  useEffect(() => {
    setSelectedImage(images[0]);
  }, [images]);
  return (
    <div className="flex w-full flex-1 flex-col-reverse gap-2 sm:flex-row">
      <div className="flex w-full flex-row justify-between gap-2 overflow-x-auto sm:w-[18.7%] sm:flex-col sm:overflow-y-scroll">
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
      <div className="w-full flex-1">
        <img src={selectecImage} alt="product image" className="w-full" />
      </div>
    </div>
  );
};

export default ViewProductImage;
