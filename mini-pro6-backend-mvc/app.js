const express = require("express");
const app = express();
const routes = require("./routes/index");

// Middleware to parse JSON
app.use(express.json());

// Use routes
app.use("/", routes);

// Bonus: handle unknown routes
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Start server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
