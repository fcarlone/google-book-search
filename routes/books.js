// Routes
module.exports = function(app) {
  app.get("/api/books", (req, res) => {
    res.json({ msg: "books api" });
  });
};
