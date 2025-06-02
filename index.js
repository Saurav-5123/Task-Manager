const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

let tasks = [
  { id: 1, title: "Finish report", description: "Complete Q3 summary", status: "todo" },
  { id: 2, title: "Team meeting", description: "Discuss project goals", status: "done" }
];

app.get("/api/tasks", (req, res) => res.json(tasks));

app.post("/api/tasks", (req, res) => {
  const task = req.body;
  task.id = tasks.length + 1;
  tasks.push(task);
  res.json(tasks);
});

app.delete("/api/tasks/:id", (req, res) => {
  tasks = tasks.filter(t => t.id !== parseInt(req.params.id));
  res.json(tasks);
});

app.listen(5000, () => console.log("🚀 Backend running on port 5000"));
