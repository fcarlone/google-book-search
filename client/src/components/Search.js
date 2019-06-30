import React from "react";
import "../styles/search.css";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  // Handle onSubmit
  onSubmit = event => {
    event.preventDefault();

    if (this.state.text === "") {
      console.log("SEND MESSAGE");
    } else {
      console.log("onSumit button pressed", this.state);
      // Search books method (App.js)
      this.props.searchBooks(this.state.text);
      this.setState({ text: "" });
    }
  };

  // Handle onChange
  onChange = event => {
    this.setState({ text: event.target.value });
  };

  render() {
    return (
      <div>
        <p className="search-container">Book Search</p>
        <form onSubmit={this.onSubmit}>
          <input
            style={{ width: "50rem" }}
            type="text"
            name="text"
            placeholder="Enter Book Title..."
            value={this.state.text}
            onChange={this.onChange}
          />
          <div>
            <input
              className="btn btn-search btn-warning"
              type="submit"
              value="Search"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default Search;
