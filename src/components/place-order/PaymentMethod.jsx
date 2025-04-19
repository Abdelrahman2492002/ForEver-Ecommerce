import { useState } from "react";
import { assets } from "../../assets/assets";
import SectionTitle from "../common/SectionTitle";
import PaymentOption from "./PaymentOption";

const PaymentMethod = () => {
  const [selectedMethod, setSlectedMethod] = useState("razorpay");
  return (
    <div className="mt-5">
      <div className="flex justify-start text-base">
        <SectionTitle text1="payment" text2="method" />
      </div>
      <div className="mt-5 flex flex-wrap items-center gap-3">
        <PaymentOption
          onselect={setSlectedMethod}
          selected={selectedMethod}
          value="stripe"
          logo={assets.stripe_logo}
        />
        <PaymentOption
          onselect={setSlectedMethod}
          selected={selectedMethod}
          value="razorpay"
          logo={assets.razorpay_logo}
        />
        <PaymentOption
          onselect={setSlectedMethod}
          selected={selectedMethod}
          value="delivery"
          text="CASH ON DELIVERY"
        />
      </div>
    </div>
  );
};

export default PaymentMethod;
