const express = require("express");
const app = express();
import employees from "./employees.js";

app.get("/hello-employees", (req, res) => {
  res.send("Hello employees!");
});

app.get("/employees", (req, res) => {
  res.json(employees);
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
// get employee by id
app.get("/employees/:id", (req, res) => {
  const employee = employees.find((emp) => emp.id === parseInt(req.params.id));
  if (employee) {
    res.json(employee);
  } else {
    res.status(404).send("Employee not found");
  }
});
// get random employee
app.get("/employees/random", (req, res) => {
  const randomIndex = Math.floor(Math.random() * employees.length);
  const randomEmployee = employees[randomIndex];
  res.json(randomEmployee);
});
