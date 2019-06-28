import React from "react";

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
        <h1>Search Component</h1>
        <p>Search for a book</p>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="text"
            placeholder="Search Here..."
            value={this.state.text}
            onChange={this.onChange}
          />
          <input type="submit" value="Search" />
        </form>
      </div>
    );
  }
}

export default Search;
