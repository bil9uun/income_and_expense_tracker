import React from "react";

import Logo from "../svg/Logo";
import Geld from "../svg/Geld";
import Shape from "../svg/Shape";

const Noise = () => {
  return (
    <div className=" bg-[url('/img/Noise.png')] w-[384px] h-[219px] rounded-[18px] relative">
      <div className="flex items-center absolute left-8 top-8">
        <Logo color="white" />
        <Geld color="white" />
      </div>
      <div className="absolute right-0 bottom-0">
        <Shape />
      </div>
      <div className="text-white absolute left-8 bottom-8">
        <h1 className=" text-base leading-6 font-semibold">Cash</h1>
        <h1 className=" text-2xl leading-6 font-bold">10,000,000</h1>
      </div>
    </div>
  );
};

export default Noise;
