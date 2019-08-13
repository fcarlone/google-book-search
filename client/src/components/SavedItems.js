import React from "react";
// import axios from "axios";
import "../styles/savedItems.css";

const SavedItems = props => {
  const { title, authors, description, link, image, _id } = props.book;

  // const handleDeleteBook = event => {
  //   const id = event.target.value;
  //   console.log("delete button", id);

  //   axios
  //     .delete(`/api/books/${id}`, (req, res) => {})
  //     .then(function(response) {
  //       console.log(response);
  //     });
  // };

  return (
    <div className="content-container">
      <div className="box-1">
        <p className="title">{title}</p>

        <p className="authors">{authors}</p>
        <div className="buttons-container">
          <div>
            <a
              className="btn btn-view btn-primary"
              href={link}
              target={"_blank"}
            >
              View{" "}
            </a>
          </div>
          <div>
            <button
              className="btn btn-remove btn-danger"
              value={_id}
              onClick={props.handleRemoveSavedBook}
            >
              Remove{""}
            </button>
          </div>
        </div>
      </div>
      <div className="box-2">
        <img className="image" src={image} alt={title} />
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default SavedItems;
