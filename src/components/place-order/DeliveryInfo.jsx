import SectionTitle from "../common/SectionTitle";
import DeliveryInput from "./DeliveryInput";

const DeliveryInfo = () => {
  return (
    <div className="w-full sm:max-w-[500px]">
      <div className="mb-10 flex justify-start text-lg sm:text-2xl">
        <SectionTitle text1="delivery" text2="information" />
      </div>
      <div className="mt-5 flex flex-col gap-4">
        <div className="flex items-center gap-2.5">
          <DeliveryInput placeholder="First name" />
          <DeliveryInput placeholder="Last name" />
        </div>
        <DeliveryInput type="email" placeholder="Email address" />
        <DeliveryInput placeholder="Street" />
        <div className="flex items-center gap-2.5">
          <DeliveryInput placeholder="City" />
          <DeliveryInput placeholder="State" />
        </div>
        <div className="flex items-center gap-2.5">
          <DeliveryInput placeholder="Zipcode" />
          <DeliveryInput placeholder="Country" />
        </div>
        <input
          type="tel"
          placeholder="Phone"
          pattern="^\+?[0-9\s\-]{7,15}$"
          className="border-borderColor4 outline-activeBorder w-full rounded-sm border p-3 text-sm"
          required
        />
      </div>
    </div>
  );
};

export default DeliveryInfo;
