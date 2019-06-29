import React from "react";
import axios from "axios";
import SavedItems from "./SavedItems";

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
      <div>
        {this.state.books.map(book => (
          <SavedItems key={book._id} book={book} />
        ))}
      </div>
    );
  }
}

export default Saved;
