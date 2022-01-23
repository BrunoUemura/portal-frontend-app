import { useContext, useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import TableBody from "../../components/TableBody";
import TableHeader from "../../components/TableHeader";
import { AuthContext } from "../../contexts/AuthContext";
import { Expense } from "../../services/Expense";

// const expenses = [
//   {
//     title: "Nubankkk",
//     amount: 150,
//     month: 10,
//     year: 2021,
//     category: "Finance",
//   },
//   {
//     title: "Nubankkk",
//     amount: 150,
//     month: 10,
//     year: 2021,
//     category: "Finance",
//   },
//   {
//     title: "Nubankkk",
//     amount: 150,
//     month: 10,
//     year: 2021,
//     category: "Finance",
//   },
//   {
//     title: "Nubankkk",
//     amount: 150,
//     month: 10,
//     year: 2021,
//     category: "Finance",
//   },
//   {
//     title: "Nubankkk",
//     amount: 150,
//     month: 10,
//     year: 2021,
//     category: "Finance",
//   },
//   {
//     title: "Nubankkk",
//     amount: 150,
//     month: 10,
//     year: 2021,
//     category: "Finance",
//   },
//   {
//     title: "Nubankkk",
//     amount: 150,
//     month: 10,
//     year: 2021,
//     category: "Finance",
//   },
//   {
//     title: "Nubankkk",
//     amount: 150,
//     month: 10,
//     year: 2021,
//     category: "Finance",
//   },
//   {
//     title: "Nubankkk",
//     amount: 150,
//     month: 10,
//     year: 2021,
//     category: "Finance",
//   },
//   {
//     title: "Nubankkk",
//     amount: 150,
//     month: 10,
//     year: 2021,
//     category: "Finance",
//   },
//   {
//     title: "Nubankkk",
//     amount: 150,
//     month: 10,
//     year: 2021,
//     category: "Finance",
//   },
//   {
//     title: "Nubankkk",
//     amount: 150,
//     month: 10,
//     year: 2021,
//     category: "Finance",
//   },
//   {
//     title: "Nubankkk",
//     amount: 150,
//     month: 10,
//     year: 2021,
//     category: "Finance",
//   },
//   {
//     title: "Nubankkk",
//     amount: 150,
//     month: 10,
//     year: 2021,
//     category: "Finance",
//   },
//   {
//     title: "Nubankkk",
//     amount: 150,
//     month: 10,
//     year: 2021,
//     category: "Finance",
//   },
//   {
//     title: "Nubankkk",
//     amount: 150,
//     month: 10,
//     year: 2021,
//     category: "Finance",
//   },
//   {
//     title: "Nubankkk",
//     amount: 150,
//     month: 10,
//     year: 2021,
//     category: "Finance",
//   },
//   {
//     title: "Nubankkk",
//     amount: 150,
//     month: 10,
//     year: 2021,
//     category: "Finance",
//   },
//   {
//     title: "Nubankkk",
//     amount: 150,
//     month: 10,
//     year: 2021,
//     category: "Finance",
//   },
// ];

export default function Expenses() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await Expense.findByUserId();
      setExpenses(data);
    })();
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      <div className="flex flex-col justify-center items-center w-4/5">
        <div className="w-4/5 flex flex-row justify-center border-gray-200 mb-6">
          <input
            className="bg-white p-1 mr-1 rounded-md"
            type="text"
            placeholder="Expense"
          />
          <input
            className="bg-white p-1 mr-1 rounded-md"
            type="number"
            placeholder="Amount"
          />
          <input
            className="bg-white p-1 mr-1 rounded-md"
            type="number"
            placeholder="Month"
            min={1}
            max={12}
          />
          <input
            className="bg-white p-1 mr-1 rounded-md"
            type="number"
            placeholder="Year"
            min={2000}
            max={3000}
          />
          <button className="bg-slate-600 text-white p-1 rounded-md">
            Filter
          </button>
        </div>

        <div className="flex flex-col w-4/5 h-3/4 shadow-lg overflow-y-scroll overflow-x-scroll">
          <TableHeader />

          {expenses.map((expense, index) => (
            <TableBody key={index} {...expense} />
          ))}
        </div>
      </div>
    </div>
  );
}
