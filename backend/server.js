const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectMongo = require("./config/mongo");

const assignmentRoutes = require("./routes/assignmentRoutes");
const queryRoutes = require("./routes/queryRoutes");
const hintRoutes = require("./routes/hintRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

connectMongo();

//  FIX HERE
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true,
}));

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/assignments", assignmentRoutes);
app.use("/api/run-query", queryRoutes);
app.use("/api/get-hint", hintRoutes);

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});