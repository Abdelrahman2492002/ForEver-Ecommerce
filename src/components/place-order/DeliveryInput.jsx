import React from "react";

const DeliveryInput = ({ type = "text", placeholder }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="border-borderColor4 outline-activeBorder w-full rounded-sm border p-3 text-sm"
      required
    />
  );
};

export default DeliveryInput;
