import React from "react";

const SavedItems = ({ book }) => {
  const { title, authors, description, link, image, _id } = book;

  const handleDeleteBook = event => {
    console.log("delete button", event.target.value);
  };
  return (
    <div>
      <h1>SavedItem Component</h1>
      <p>display saved books </p>
      <p>{title}</p>
      <p>{authors}</p>
      <p>{description}</p>
      <p>{link}</p>
      <p>{image}</p>
      <div>
        <a href={link} target={"_blank"}>
          View
        </a>
      </div>
      <div>
        <button
          value={_id}
          onClick={event => {
            handleDeleteBook(event);
          }}
        >
          Remove{""}
        </button>
      </div>
    </div>
  );
};

export default SavedItems;
