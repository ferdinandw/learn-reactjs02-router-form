import React, { Component } from 'react';
import { Nav, Navbar} from 'react-bootstrap'

const Navbar1 = () => {
    return(
    <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Home</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">TodoApp</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
 )
}
export default Navbar1