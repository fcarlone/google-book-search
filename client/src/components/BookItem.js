import React from "react";
import axios from "axios";

const BookItem = ({ book, id }) => {
  // Handle save book
  const handleSaveBook = event => {
    let bookObject = {
      title: book.title,
      authors: book.authors,
      description: book.description,
      link: book.previewLink,
      image: book.imageLinks.smallThumbnail
    };
    console.log("handle save book - book ID: ", event.target.value, bookObject);
    // Save book to MongoDb
    return axios.post("api/books", bookObject).then(function(response) {
      console.log(response);
    });
  };

  return (
    // card or flex-box
    <div>
      <h1>BookItem Component</h1>
      <p>{id}</p>
      <p>{book.title}</p>
      <p>{book.authors}</p>
      <p>{book.description}</p>
      <p>{book.previewLink}</p>
      <p>{book.imageLinks.smallThumbnail}</p>
      <div>
        <button
          value={id}
          onClick={event => {
            handleSaveBook(event);
          }}
        >
          Save{" "}
        </button>
      </div>
      <div>
        <a href={book.previewLink} target={"_blank"}>
          View
        </a>
      </div>
    </div>
  );
};

export default BookItem;

//  onClick={() => props.handleClickEvent(id)}
