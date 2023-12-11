import React from "react";
import { useContext } from "react";

import Navbar from "@/components/Navbar";
import Noise from "@/components/Noise";
import Card from "@/components/Card";
import { Chart } from "chart.js";
import LastRecords from "@/components/LastRecords";
import { userContext } from "@/context/UserContext";

const Home = () => {
  const { user } = useContext(userContext);
  console.log("user", user);
  return (
    <div className="w-full h-full bg-[#F3F4F6]">
      <Navbar />
      <div className="mx-[120px]">
        <div className="flex justify-between mt-8">
          <Noise />
          <Card />
          <Card />
        </div>
        <div className=" h-96">
          <h1>{user.name}</h1>
        </div>
        <LastRecords />
      </div>
    </div>
  );
};

export default Home;
