const express = require("express");
require('express-async-errors');

const connectDB = require("./utils/db");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 8080;

require("dotenv").config();

// Routes
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");

//Middlewares
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.use(cors({ credentials: true, origin: "*" }));

app.use(express.json({ limit: "10mb" }));
app.get("/", (req, res) => {
  res.send("Server is running");
});

// // User Routes
app.use("/api/user", userRoutes);

// // Product Routes
app.use("/api/product", productRoutes);

// Middleware for Request Logging
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});
//Middleware Error handling Functions
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

// Server and connect to MongoDB function
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () =>
      console.log(`Server is listening on port ${PORT}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
