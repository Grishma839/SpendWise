const mongoose = require("mongoose");

const expenseSchema = new mongoose.Schema({
  category: String,
  amount: Number,
  description: String,
  date: String
});

module.exports = mongoose.model("Expense", expenseSchema);