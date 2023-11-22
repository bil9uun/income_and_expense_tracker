import React from "react";

import Navbar from "@/components/Navbar";
import RecordsMenu from "@/components/RecordsMenu";
import RecordsContainer from "@/components/RecordsContianer";

const Records = () => {
  return (
    <div className="w-screen h-screen bg-[#F3F4F6]">
      <Navbar />
      <div className=" flex justify-between max-w-6xl mx-auto my-[28px]">
        <RecordsMenu />
        <RecordsContainer />
      </div>
    </div>
  );
};

export default Records;
