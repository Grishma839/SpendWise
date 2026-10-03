const fs = require("fs");

fs.writeFileSync("expense.txt", "Food - ₹300");

const data = fs.readFileSync("expense.txt", "utf8");

console.log("File Content:");
console.log(data);