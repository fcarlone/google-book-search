import React from "react";
import axios from "axios";
import SavedItems from "./SavedItems";
import "../styles/saved.css";

class Saved extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: []
    };
  }

  // Display saved books
  componentDidMount() {
    console.log("Saved Component componentDidMount");
    axios.get("/api/books").then(response => {
      this.setState({
        books: response.data
      });
      console.log("updated state", this.state);
    });
  }

  // Handle remove saved book
  handleRemoveSavedBook = id => {
    console.log("test");
    console.log("handle remove saved book", id);

    // Update database
    axios.delete(`/api/books/${id}`).then(response => {
      console.log("saved book deleted: ", response.data);
    });

    // Update state
    let result = this.state.books.filter(book => {
      return book._id !== id;
    });

    this.setState({ books: result });
  };

  render() {
    return (
      <div className="container">
        <div className="category-container">
          <h3>Saved Books</h3>
          <h6>sorted by title</h6>
          {this.state.books.map(book => (
            <SavedItems
              className="saved-container"
              key={book._id}
              book={book}
              handleRemoveSavedBook={() => this.handleRemoveSavedBook(book._id)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Saved;
