import React from "react";
import "../styles/navbar.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: false
    };
  }
  handleSearchChange = () => {
    console.log("search change");
    this.props.handleSearchValue(true);
    this.setState({ search: true });
  };

  handleSavedChange = () => {
    console.log("saved change ");
    this.props.handleSearchValue(false);
    this.setState({ search: false });
  };
  render() {
    return (
      <Navbar bg="primary" variant="dark" sticky="top">
        <i className="fas fa-book" />
        <Navbar.Brand> Google Book API</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#search" onClick={this.handleSearchChange}>
            Search
          </Nav.Link>
          <Nav.Link href="#saved" onClick={this.handleSavedChange}>
            Saved
          </Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export default NavBar;
