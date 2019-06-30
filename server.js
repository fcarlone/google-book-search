const express = require("express");
const path = require("path");
const connectDB = require("./config/db");

const app = express();

const PORT = process.env.PORT || 5000;

// Connect Database
connectDB();

// Add Middleware
app.use(express.json({ extended: true }));

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define Routes
require("./routes/books")(app);

// Route to load single HTML page
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Add Listner
app.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});
