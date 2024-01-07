const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const connectDB = require('./utils/db')
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 8080;
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");


app.use(cors(
  {credentials: true, origin: '*'}
));

app.use(express.json({ limit: "10mb" }));


// Connect to MongoDB



// Routes
app.get("/", (req, res) => {
  res.send("Server is running");
});

// User Routes
app.use("/api/user", userRoutes);

// Product Routes
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


connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server is running at port: ${PORT}`));
})

// Server is running
