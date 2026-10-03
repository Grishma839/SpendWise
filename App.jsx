import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/expenses")
      .then((response) => {
        setExpenses(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="app">
      <h1>SpendWise</h1>
      <p>My Expenses</p>

      {expenses.map((expense) => (
        <div className="expense" key={expense._id}>
          <span>{expense.category}</span>
          <b>₹{expense.amount}</b>
        </div>
      ))}
    </div>
  );
}

export default App;