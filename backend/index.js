const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "10mb" }));

const PORT = process.env.PORT || 8080;

// Connect to MongoDB
(async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to Database");
  } catch (err) {
    console.error(err);
  }
})();

// Import user model
const userSchema = require("./Models/userModel");
const userModel = mongoose.model("user", userSchema);

// Routes
app.get("/", (req, res) => {
  res.send("Server is running");
});

// User Routes
const userRoutes = require("./Routes/userRoutes")(userModel);
app.use("/api/user", userRoutes);

// Product Routes
const productRoutes = require("./Routes/productRoutes");
app.use("/api/product", productRoutes);

// Middleware for Request Logging
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Unhandled Exception Handling
process.on("uncaughtException", (error) => {
  console.error("Uncaught Exception:", error);
});

// Unhandled Rejection Handling
process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send({ message: "Internal Server Error", alert: false });
});

// Server is running
app.listen(PORT, () => console.log(`Server is running at port: ${PORT}`));
