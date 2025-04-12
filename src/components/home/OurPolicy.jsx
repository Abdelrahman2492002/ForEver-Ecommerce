import React from "react";
import OurPolicyCard from "./OurPolicyCard";
import { assets } from "../../assets/assets";

const OurPolicy = () => {
  return (
    <div className="mx-7 pt-5 pb-20 sm:mx-24 lg:mx-44">
      <div className="flex flex-wrap justify-evenly gap-x-8 gap-y-16">
        <OurPolicyCard
          image={assets.exchange_icon}
          title="Easy Exchange Policy"
          text="We offer hassle free  exchange policy"
        />
        <OurPolicyCard
          image={assets.quality_icon}
          title="7 Days Return Policy"
          text="We provide 7 days free return policy "
        />
        <OurPolicyCard
          image={assets.support_img}
          title="Best Customer Support"
          text="We provide 24/7 customer support"
        />
      </div>
    </div>
  );
};

export default OurPolicy;
