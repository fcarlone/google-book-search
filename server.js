const express = require("express");
const connectDB = require("./config/db");

const app = express();

const PORT = process.env.PORT || 5000;

// Connect Database
connectDB();

// Add Middleware

// Routes
app.get("/", (req, res) => {
  res.send("Welcome to landing page");
});

// Define Routes
require("./routes/books")(app);
// app.use("/api/books", require("./routes/books"));

// Add Listner
app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});
