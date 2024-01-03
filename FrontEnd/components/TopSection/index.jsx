import React from "react";
import { useEffect, useState } from "react";
import instanceAxios from "@/utils/axios";

import Noise from "../Noise";
import CardExpence from "../Card/cardExpence";
import CardIncome from "../Card/cardIncome";

const TopSection = () => {
  const [totals, setTotals] = useState({ totalIncome: 0, totalExpense: 0 });

  const getTotalIncExp = async () => {
    const {
      data: { totalIncome, totalExpense },
    } = await instanceAxios.get("/transactions/total");
    setTotals({ ...totals, totalIncome, totalExpense });
  };

  useEffect(() => {
    getTotalIncExp();
  }, []);

  return (
    <div className="flex justify-between mt-8">
      <Noise />
      <CardIncome totalIncome={totals.totalIncome} />
      <CardExpence totalExpense={totals.totalExpense} />
    </div>
  );
};

export default TopSection;
