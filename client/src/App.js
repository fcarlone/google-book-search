import React from "react";
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import Saved from "./components/Saved";
import Books from "./components/Books";
import axios from "axios";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      search: false
    };
  }

  // Search Google Books API
  searchBooks = async text => {
    console.log("searchBooks method", text);

    // GET Request - seach Google Books API
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${text}`
    );
    console.log(response.data.items);

    // setState to books array
    this.setState({ books: response.data.items, search: true });
  };

  // Get search value from Navbar links
  handleSearchValue = data => {
    console.log("data from App", data);
    this.setState({ search: data });
  };

  render() {
    console.log("Search State", this.state.search);
    return (
      <div className="App">
        <NavBar handleSearchValue={this.handleSearchValue} />
        <div className="intro">
          <p className="header-title">Google Books Search</p>
          <p className="header-description">
            Perform full-text searches and retrieve book{" "}
          </p>
          <p className="header-description">
            information using Google’s Book API
          </p>
        </div>
        <Search searchBooks={this.searchBooks} />
        {this.state.search ? <Books books={this.state.books} /> : <Saved />}
      </div>
    );
  }
}

export default App;
