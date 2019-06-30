import React from "react";
import axios from "axios";
import "../styles/bookItem.css";

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
    <div className="content-container">
      <div className="box-1">
        <p className="title">{book.title}</p>

        <p className="authors">{book.authors}</p>
        <div className="buttons-container">
          <div>
            <a
              className="btn btn-view btn-primary"
              href={book.previewLink}
              target={"_blank"}
            >
              View{" "}
            </a>
          </div>
          <button
            className="btn btn-save btn-info"
            value={id}
            onClick={event => {
              handleSaveBook(event);
            }}
          >
            Save{" "}
          </button>
        </div>
      </div>
      <div className="box-2">
        <img
          className="image"
          src={book.imageLinks.smallThumbnail}
          alt={book.title}
        />
        <p className="description">{book.description}</p>
      </div>
    </div>
  );
};

export default BookItem;
