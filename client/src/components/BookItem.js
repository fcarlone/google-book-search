import React from "react";

const BookItem = ({
  book: { title, authors, description, previewLink, imageLinks }
}) => {
  return (
    <div>
      <h1>BookItem Component</h1>
      <p>{title}</p>
      <p>{authors}</p>
      <p>{description}</p>
      <p>{previewLink}</p>
      <p>{imageLinks.smallThumbnail}</p>
      <input type="submit" value="Save" />
      <input type="submit" value="View" />
    </div>
  );
};

export default BookItem;
