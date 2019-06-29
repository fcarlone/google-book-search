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
      books: []
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
    this.setState({ books: response.data.items });
  };

  render() {
    return (
      <div className="App">
        <NavBar />
        <Search searchBooks={this.searchBooks} />
        <Saved />
        <Books books={this.state.books} />
      </div>
    );
  }
}

export default App;
