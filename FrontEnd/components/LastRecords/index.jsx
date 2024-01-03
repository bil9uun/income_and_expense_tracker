import React, { useContext } from "react";

import LastRecord1 from "./LastRecord1";
import { TransactionContext } from "@/context/TransactionContext";

const LastRecords = () => {
  const LastRecords = [
    {
      title: "Lending & Renting",
      time: "3 hours ago",
      amount: "1000₮",
      color: "",
    },
    {
      title: "Lending & Renting",
      time: "3 hours ago",
      amount: "1000₮",
      color: "",
    },
    {
      title: "Lending & Renting",
      time: "3 hours ago",
      amount: "1000₮",
      color: "",
    },
    {
      title: "Lending & Renting",
      time: "3 hours ago",
      amount: "1000₮",
      color: "",
    },
    {
      title: "Lending & Renting",
      time: "3 hours ago",
      amount: "1000₮",
      color: "",
    },
  ];
  const { transactions } = useContext(TransactionContext);

  return (
    <div className="bg-white rounded-[12px]">
      <div className="py-4 px-6 text-black font-semibold border-b border-solid border-[#E5E7EB]">
        Last Records
      </div>
      <div className="px-6">
        {transactions.map((LastRecord) => {
          return <LastRecord1 LastRecord={LastRecord} />;
        })}
      </div>
    </div>
  );
};

export default LastRecords;
