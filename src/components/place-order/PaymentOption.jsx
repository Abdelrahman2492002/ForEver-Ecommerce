import React from "react";

const PaymentOption = ({ logo, text, selected, onselect, value }) => {
  const isSelected = selected === value;
  return (
    <div
      onClick={() => onselect(value)}
      className="border-borderColor4 flex cursor-pointer items-center gap-3 border px-4 py-3 max-xl:w-full"
    >
      <span
        className={`border-borderColor5 h-3.5 w-3.5 rounded-full border ${isSelected && "bg-green-400"}`}
      ></span>
      {logo ? (
        <img src={logo} alt="stripe_logo" className="mx-5 h-5" />
      ) : (
        <p className="text-sm font-medium">{text}</p>
      )}
    </div>
  );
};

export default PaymentOption;
