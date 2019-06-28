import React from "react";
import BookItem from "./BookItem";

const Books = ({ books }) => {
  return (
    <div>
      {books.map(book => (
        <BookItem key={book.id} book={book.volumeInfo} />
      ))}
    </div>
  );
};

export default Books;
