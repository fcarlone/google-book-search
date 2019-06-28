const axios = require("axios");
console.log(axios);
// Routes
module.exports = function(app) {
  // GET Request
  app.get("/api/books", async (req, res) => {
    // res.json({ msg: "books api" });

    console.log("test google api request");

    const response = await axios.get(
      "https://www.googleapis.com/books/v1/volumes?q=moby%20dick"
    );

    console.log("response:", response);
    res.send(response.data.items[0].volumeInfo);
  });
};
