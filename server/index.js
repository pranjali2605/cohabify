const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// test route
app.get("/", (req, res) => res.send("CoHabitify API running"));
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", message: "Backend is running!" });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT} , http://localhost:${PORT}`));
