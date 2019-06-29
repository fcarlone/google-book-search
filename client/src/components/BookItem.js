import React from "react";

const BookItem = ({ book, id }) => {
  // Handle save book
  const handleSaveBook = event => {
    console.log("handle save book - book ID: ", event.target.value);
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
        <a href={book.previewLink}>View</a>
      </div>
    </div>
  );
};

export default BookItem;

//  onClick={() => props.handleClickEvent(id)}
