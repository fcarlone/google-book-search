import React from "react";
import BookItem from "./BookItem";
import "../styles/books.css";

const Books = ({ books }) => {
  return (
    <div className="container">
      <div className="category-container">
        <h3>Searched Books</h3>
        <div>
          {books.map(book => (
            <BookItem
              className="searched-container"
              key={book.id}
              book={book.volumeInfo}
              id={book.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Books;
