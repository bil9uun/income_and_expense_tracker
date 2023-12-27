import React, { createContext, useContext, useState } from "react";
import { UserContext } from "../UserProvider";
import axios from "axios";
import { toast } from "react-toastify";
import { data } from "autoprefixer";

export const TransactionContext = createContext(null);

const TransactionProvider = ({ children }) => {
  const { user } = useContext(UserContext);
  const [transactions, setTransactions] = useState({});
  const [transactionData, setTransactionData] = useState({
    transaction_name: "",
    amount: 10000,
    transaction_type: "EXP",
    description: "",
    categoryId: "",
    updated_at: "",
  });

  const changeTransactionData = (key, value) => {
    setTransactionData({ ...transactionData, [key]: value });
    // transactionData.amount <=> transactionData['amount'] <==> key="amount" transaction[key] : ''
  };

  const addTransaction = async () => {
    console.log("DATA", transactionData);
    console.log("USER", user);
    try {
      const { data } = await axios.post("http://localhost:8008/transactions", {
        ...transactionData,
        userId: "22e7e357-8b12-4bd2-952e-33586a423080",
      });
      toast.success("Гүйлгээг амжилттай нэмлээ.");
    } catch (error) {
      toast.error("Гүйлгээг нэмэхэд алдаа гарлаа.");
    }
  };

  const getTransactions = async () => {
    console.log("WORKING");
    try {
      const {
        data: { transactions },
      } = await axios.get("http://localhost:8008/transactions");
      console.log("TRA");
      console.log("hihihi", data);
      // toast.success("Гүйлгээнүүдийг амжилттай татлаа.");
      setTransactions(transactions);
    } catch (error) {
      console.log("TER", error);
      toast.error("Гүйлгээг нэмэхэд алдаа гарлаа.");
    }
  };

  return (
    <TransactionContext.Provider
      value={{
        transactionData,
        changeTransactionData,
        addTransaction,
        getTransactions,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export default TransactionProvider;
