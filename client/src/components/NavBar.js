import React from "react";
import "../styles/navbar.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: true
    };
  }
  // handleSearchChange = () => {
  //   console.log("change boolen");
  //   this.setState({ search: true });
  // };

  // handleSavedChange = () => {
  //   console.log("change boolen");
  //   this.setState({ search: false });
  // };
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
