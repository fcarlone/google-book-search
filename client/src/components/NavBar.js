import React from "react";
import "../styles/navbar.css";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const NavBar = () => {
  return (
    <Navbar bg="primary" variant="dark" sticky="top">
      <Navbar.Brand>Google Book API</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#seach">Search</Nav.Link>
        <Nav.Link href="#saved">Saved</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
