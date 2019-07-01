// Connect model
const Book = require("../models/Book");

// Routes
module.exports = function(app) {
  // GET Request - get all books stored in MongoDB
  app.get("/api/books", async (req, res) => {
    try {
      const books = await Book.find({}).sort({
        title: 1
      });
      res.json(books);

      // Handle Error
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  });

  // POST Route - to add new book
  app.post("/api/books", async (req, res) => {
    // Get input data
    console.log("req body - post route", req.body);

    const { title, authors, description, image, link } = req.body;

    // Build object to save book
    try {
      const newBook = new Book({
        title: title,
        authors: authors,
        description: description,
        image: image,
        link: link
      });

      console.log("new book object", newBook);

      // Save book to MongoDB database
      const book = await newBook.save();
      // Return book to the client
      res.json(book);
      // Catch error
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  });

  // Delete Route - remove a book from MongoDb
  app.delete("/api/books/:id", async (req, res) => {
    console.log("Get id to delete", req.params.id);

    // Get book id
    try {
      let book = await Book.findById(req.params.id);

      // Check if book exists
      if (!book) {
        return res.status(404).json({ msg: "Book not found" });
      }

      // Remove book from MongoDB
      await Book.findByIdAndRemove(req.params.id);
      res.json({ msg: "Book was removed from database" });

      // Handle error
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  });
};
