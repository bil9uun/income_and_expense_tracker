import React, { useEffect, useState } from "react";
import {
  ArcElement,
  BarElement,
  CategoryScale,
  Chart,
  Legend,
  LinearScale,
} from "chart.js";

import DoughnutChart from "./DoughnutChart";
import BarChart from "./BarChart";

import instanceAxios from "@/utils/axios";

Chart.register(CategoryScale, LinearScale, BarElement, ArcElement, Legend);

const MiddleSection = () => {
  const [barChartData, setBarChartData] = useState(null);
  const [categoryData, setCategoryData] = useState(null);

  const getChartData = async () => {
    try {
      const {
        data: { barChart, doughnutChart },
      } = await instanceAxios.get("/transactions/chartdata/1234");
      console.log("CHART-DATA", barChart);
      console.log("CHART-DATA", doughnutChart);

      setCategoryData(doughnutChart);
      setBarChartData(barChart);
    } catch (error) {}
  };

  useEffect(() => {
    console.log("E2");
    getChartData();
  }, []);

  return (
    <div className="w-full grid grid-cols-2 my-10 gap-9">
      <BarChart barChartData={barChartData} />
      <DoughnutChart categoryData={categoryData} />
    </div>
  );
};

export default MiddleSection;
