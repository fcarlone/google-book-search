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
    axios
      .get("/api/books", (req, res) => {})
      .then(response => {
        this.setState({
          books: response.data
        });
        console.log("updated state", this.state);
      });
  }
  render() {
    return (
      <div className="container">
        <div className="category-container">
          <h3>Saved Books</h3>
          {this.state.books.map(book => (
            <SavedItems
              className="saved-container"
              key={book._id}
              book={book}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Saved;
