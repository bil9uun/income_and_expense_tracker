import React from "react";

import Navbar from "@/components/Navbar";
import Noise from "@/components/Noise";
import Card from "@/components/Card";
import { Chart } from "chart.js";
import LastRecords from "@/components/LastRecords";

const Home = () => {
  return (
    <div className="w-full h-full bg-[#F3F4F6]">
      <Navbar />
      <div className="mx-[120px]">
        <div className="flex justify-between mt-8">
          <Noise />
          <Card />
          <Card />
        </div>
        <div className=" h-96">Chart.js</div>
        <LastRecords />
      </div>
    </div>
  );
};

export default Home;
