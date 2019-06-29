import React from "react";

const SavedItems = ({ book }) => {
  const { title, authors, description, link, image } = book;
  return (
    <div>
      <h1>SavedItem Component</h1>
      <p>display saved books </p>
      <p>{title}</p>
      <p>{authors}</p>
      <p>{description}</p>
      <p>{link}</p>
      <p>{image}</p>
    </div>
  );
};

export default SavedItems;
