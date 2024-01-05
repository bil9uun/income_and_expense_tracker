import React from "react";

import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
} from "chart.js";

import Navbar from "@/components/Navbar";
import TopSection from "@/components/HomePageSections/TopSection";
import LastRecords from "@/components/LastRecords";
import MiddleSection from "@/components/HomePageSections/MiddleSection";

Chart.register(CategoryScale, LinearScale, BarElement, ArcElement, Legend);

const Home = () => {
  const data1 = {
    labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "My First Dataset",
        backgroundColor: "#85CC16",
        data: [3000000, 3000000, 3000000, 3000000, 3000000, 3000000, 3000000],
      },
      {
        label: "My Second Dataset",
        backgroundColor: "#F97316",
        data: [2000000, 2000000, 2000000, 2000000, 2000000, 2000000, 2000000],
      },
    ],
  };

  const data2 = {
    datasets: [
      {
        data: [5000000, 5000000, 5000000, 5000000, 5000000],

        backgroundColor: [
          "#1C64F2",
          "#E74694",
          "#FDBA8C",
          "#16BDCA",
          "#F2901C",
        ],
        hoverBackgroundColor: [
          "#1C64F2",
          "#E74694",
          "#FDBA8C",
          "#16BDCA",
          "#F2901C",
        ],
      },
    ],
    labels: ["Bill", "Food ", "Shopping", "Insurance", "Clothing"],
  };
  const options1 = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const options2 = {
    legend: {
      align: "start",
      position: "right",

      labels: {
        display: false,
        position: "right",
      },
    },
  };

  return (
    <div className="w-full h-full bg-[#F3F4F6]">
      <Navbar />
      <div className="mx-[120px]">
        <div>
          <TopSection />
        </div>
        <div className="flex justify-between h-[30%] my-10">
          <MiddleSection />
        </div>
        <LastRecords />
      </div>
    </div>
  );
};

export default Home;

{
  /* <div className="card bg-white flex w-[48%] justify-center items-center p-4">
            <Bar data={data1} options={options1} />
          </div>
          <div className="card bg-white flex w-[48%] justify-center items-center p-4">
            <Doughnut options={options2} data={data2} />
          </div> */
}
