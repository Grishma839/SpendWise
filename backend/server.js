require("dotenv").config();
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Expense = require("./models/Expense");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("SpendWise API is running");
});

// CREATE
app.post("/expenses", async (req, res) => {
  const expense = await Expense.create(req.body);
  res.json(expense);
});

// READ
app.get("/expenses", async (req, res) => {
  const expenses = await Expense.find();
  res.json(expenses);
});

// UPDATE
app.put("/expenses/:id", async (req, res) => {
  const expense = await Expense.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(expense);
});

// DELETE
app.delete("/expenses/:id", async (req, res) => {
  await Expense.findByIdAndDelete(req.params.id);
  res.json({ message: "Expense deleted" });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});