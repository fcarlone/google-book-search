import React from "react";
import axios from "axios";

const SavedItems = ({ book }) => {
  const { title, authors, description, link, image, _id } = book;

  const handleDeleteBook = event => {
    const id = event.target.value;
    console.log("delete button", id);

    // axois call
    axios
      .delete(`/api/books/${id}`, (req, res) => {
        console.log("test");
      })
      .then(function(response) {
        console.log(response);
      });
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
