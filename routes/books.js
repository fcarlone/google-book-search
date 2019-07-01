// const express = require('express');
// const axios = require("axios");

// Connect model
const Book = require("../models/Book");
const bookObject = {
  title: "Moby Dick",
  authors: ["Harold Bloom"],
  description:
    "This carefully crafted ebook: Moby-Dick (Unabridged) + D. H. Lawrences critique of Moby-Dick is formatted for your eReader with a functional and detailed table of contents. Moby-Dick by Herman Melville: first published in 1851, considered to be one of the Great American Novels and a treasure of world literature, one of the great epics in all of literature. The story tells the adventures of wandering sailor Ishmael, and his voyage on the whaleship Pequod, commanded by Captain Ahab. Ishmael soon learns that Ahab has one purpose on this voyage: to seek out Moby Dick, a ferocious, enigmatic white sperm whale. In a previous encounter, the whale destroyed Ahabs boat and bit off his leg, which now drives Ahab to take revenge... D. H. Lawrences critique of Moby-Dick: Lawrences opinions earned him many enemies and he endured official persecution, censorship, and misrepresentation of his creative work throughout the second half of his life, much of which he spent in a voluntary exile which he called his savage pilgrimage. Lawrence is now valued by many as a visionary thinker and significant representative of modernism in English literature. In his Studies in Classic American Literature, D. H. Lawrence reads Moby Dick as a peculiarly American work. The Pequod, containing many races, many peoples, many nations, under the Stars and Stripes, is the ship of Americas soul; it can be no accident that the ship is governed by a mad captain embarked upon a fanatics hunt. Moby Dick is the deepest blood-being of the white race, hunted by the maniacal fanaticism of our white mental consciousness.",
  image:
    "http://books.google.com/books/content?id=9esSBAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
  link:
    "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api"
};

// Routes
module.exports = function(app) {
  // GET Request - get all books stored in MongoDB
  app.get("/api/books", async (req, res) => {
    try {
      const books = await Book.find({}).sort({
        title: -1
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

    // console.log("return body - book request body", req.body);
    // const { title, authors, description, image, link } = bookObject;
    // const { title, authors, description, image, link } = req.body;

    // Build object to save book
    try {
      const newBook = new Book({
        title: req.body.title,
        authors: req.body.authors,
        description: req.body.description,
        image: req.body.image,
        link: req.body.link
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
