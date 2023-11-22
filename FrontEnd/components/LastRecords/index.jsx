import React from "react";

import LastRecord1 from "./LastRecord1";

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
  return (
    <div className="bg-white rounded-[12px]">
      <div className="py-4 px-6 text-black font-semibold border-b border-solid border-[#E5E7EB]">
        Last Records
      </div>
      <div className="px-6">
        {LastRecords.map((LastRecord) => {
          return <LastRecord1 LastRecord={LastRecord} />;
        })}
      </div>
    </div>
  );
};

export default LastRecords;
