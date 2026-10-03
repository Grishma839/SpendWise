const fs = require("fs");

const stream = fs.createReadStream("expense.txt", "utf8");

stream.on("data", (chunk) => {
  console.log("Stream Data:");
  console.log(chunk);
});

stream.on("end", () => {
  console.log("Stream Finished");
});