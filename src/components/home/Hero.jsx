import React from "react";
import SubHeroTitle from "./SubHeroTitle";
import { assets } from "../../assets/assets";

const Hero = () => {
  return (
    <div className="mx-8 pt-5 pb-20 sm:mx-16 lg:mx-36">
      <div className="border-borderColor flex flex-col items-center border sm:flex-row">
        <div className="text-greyMed2 flex justify-center max-sm:py-16 sm:w-1/2">
          <div>
            <SubHeroTitle title="our bestsellers" />
            <h1 className="font-parta text-3xl leading-relaxed font-normal md:text-4xl">
              Latest Arrivals
            </h1>
            <SubHeroTitle title="Shop Now" isReverse={true} height="h-[1px]" />
          </div>
        </div>
        <img
          src={assets.hero_img}
          alt="hero image"
          className="max-h-[450px] w-full object-fill sm:w-1/2"
        />
      </div>
    </div>
  );
};

export default Hero;
