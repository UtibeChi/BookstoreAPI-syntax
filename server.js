const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const bookRoutes = require("./src/routes/bookRoute");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to read JSON
app.use(express.json());

// Register book routes
app.use("/api/books", bookRoutes);

// Start the server after connecting to MongoDB
const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB connected successfully");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to start:", error.message);
    process.exit(1);
  }
};

startServer();