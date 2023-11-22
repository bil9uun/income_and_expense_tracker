import React from "react";

import StepOne from "@/components/LogIn/StepOne";
import StepTwo from "@/components/LogIn/StepTwo";
import StepThree from "@/components/LogIn/StepThree";
import StepsContainer from "@/components/LogIn/StepsContainer";
import Logo from "@/components/svg/Logo";
import Geld from "@/components/svg/Geld";

const SetUp = () => {
  return (
    <div className="bg-white w-screen h-screen flex flex-col items-center p-10">
      <div className=" flex flex-col justify-center items-center mb-36">
        <div className=" w-24 flex justify-evenly mb-12 ">
          <Logo />
          <Geld />
        </div>
        <StepsContainer />
      </div>
      <StepOne />
      {/* <StepTwo /> */}
      {/* <StepThree /> */}
    </div>
  );
};

export default SetUp;
