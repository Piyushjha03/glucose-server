const express = require("express");
const cors = require("cors");
const { PythonShell } = require("python-shell");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Endpoint for glucose prediction
app.post("/predict", (req, res) => {
  const { IR1, IR2, IR3, IR4, IR5 } = req.body;

  let options = {
    mode: "text",
    pythonPath: "python3",
    pythonOptions: ["-u"],
    scriptPath: "./",
    args: [IR1, IR2, IR3, IR4, IR5],
  };

  PythonShell.run("predict.py", options)
    .then((results) => {
      const prediction = parseFloat(results[0]);
      res.json({ prediction });
    })
    .catch((err) => {
      console.error("Error:", err);
      res.status(500).json({ error: "Prediction failed" });
    });
});

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
